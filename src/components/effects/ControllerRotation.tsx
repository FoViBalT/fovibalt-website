'use client';

import { useEffect, useRef, useState } from 'react';
import labelStyles from './ControllerRotation.module.css';

interface ControllerRotationProps {
    className?: string;
}

/**
 * Wheel-locked controller showcase using the 19-frame connectors image sequence.
 * Desktop: wheel scroll scrubs frames.
 * Mobile: horizontal finger swipe scrubs frames.
 */
export default function ControllerRotation({ className }: ControllerRotationProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const framesRef = useRef<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);
    const [showHint, setShowHint] = useState(true);
    const currentFrameRef = useRef(0);
    const wheelBufferRef = useRef(0);
    const touchXRef = useRef(0);
    const touchBufferRef = useRef(0);
    const hintDismissedRef = useRef(false);
    const raf = useRef<number>(0);

    const TOTAL_FRAMES = 19;

    useEffect(() => {
        // Preload all frames
        let loadedCount = 0;
        const images: HTMLImageElement[] = [];

        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            const num = String(i).padStart(4, '0');
            img.src = `/images/connectors/connectors_${num}.png`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === TOTAL_FRAMES) {
                    framesRef.current = images;
                    setLoaded(true);
                    drawFrame(0);
                }
            };
            images.push(img);
        }

        return () => {
            cancelAnimationFrame(raf.current);
        };
    }, []);

    const drawFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const img = framesRef.current[index];
        if (!canvas || !ctx || !img) return;

        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        currentFrameRef.current = index;
    };

    const dismissHint = () => {
        if (hintDismissedRef.current) return;
        hintDismissedRef.current = true;
        setShowHint(false);
    };

    // Wheel-driven frame scrubbing with page scroll lock over component
    useEffect(() => {
        if (!loaded) return;
        const container = containerRef.current;
        if (!container) return;

        const stepFrame = (direction: 1 | -1) => {
            const nextFrame = Math.max(0, Math.min(TOTAL_FRAMES - 1, currentFrameRef.current + direction));
            if (nextFrame !== currentFrameRef.current) {
                drawFrame(nextFrame);
            }
        };

        const onWheel = (event: WheelEvent) => {
            event.preventDefault();
            dismissHint();
            wheelBufferRef.current += event.deltaY;

            const threshold = 32;
            while (Math.abs(wheelBufferRef.current) >= threshold) {
                const direction: 1 | -1 = wheelBufferRef.current > 0 ? 1 : -1;
                stepFrame(direction);
                wheelBufferRef.current -= threshold * direction;
            }
        };

        container.addEventListener('wheel', onWheel, { passive: false });
        return () => {
            container.removeEventListener('wheel', onWheel);
        };
    }, [loaded]);

    // Touch-driven horizontal frame scrubbing for mobile (Point 2)
    useEffect(() => {
        if (!loaded) return;
        const container = containerRef.current;
        if (!container) return;

        const onTouchStart = (e: TouchEvent) => {
            touchXRef.current = e.touches[0].clientX;
            touchBufferRef.current = 0;
        };

        const onTouchMove = (e: TouchEvent) => {
            const currentX = e.touches[0].clientX;
            const deltaX = currentX - touchXRef.current;
            touchXRef.current = currentX;
            if (Math.abs(deltaX) > 0) dismissHint();
            touchBufferRef.current += deltaX;

            const threshold = 12;
            while (Math.abs(touchBufferRef.current) >= threshold) {
                // Swipe left → forward, swipe right → backward
                const direction: 1 | -1 = touchBufferRef.current < 0 ? 1 : -1;
                const nextFrame = Math.max(0, Math.min(TOTAL_FRAMES - 1, currentFrameRef.current + direction));
                if (nextFrame !== currentFrameRef.current) {
                    drawFrame(nextFrame);
                }
                touchBufferRef.current -= threshold * (touchBufferRef.current > 0 ? 1 : -1);
            }
        };

        container.addEventListener('touchstart', onTouchStart, { passive: true });
        container.addEventListener('touchmove', onTouchMove, { passive: true });
        return () => {
            container.removeEventListener('touchstart', onTouchStart);
            container.removeEventListener('touchmove', onTouchMove);
        };
    }, [loaded]);

    useEffect(() => {
        if (!loaded) return;
        drawFrame(0);
    }, [loaded]);

    return (
        <div
            ref={containerRef}
            className={className}
            style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                touchAction: 'pan-y pinch-zoom',
            }}
        >
            {/* Glow backdrop behind the controller */}
            <div
                style={{
                    position: 'absolute',
                    inset: '-20%',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(89,126,255,0.2) 0%, rgba(255,88,220,0.08) 40%, transparent 65%)',
                    filter: 'blur(40px)',
                    animation: 'pulseGlow 4s ease-in-out infinite',
                    pointerEvents: 'none',
                }}
                aria-hidden="true"
            />
            <canvas
                ref={canvasRef}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    opacity: loaded ? 1 : 0,
                    transition: 'opacity 0.6s ease',
                    position: 'relative',
                    zIndex: 1,
                }}
            />

            {loaded && showHint && (
                <>
                    <div className={labelStyles.rotationLabel}>
                            Scroll over model to rotate
                    </div>
                </>
            )}
            {!loaded && (
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--Text_3)',
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: '14px',
                    }}
                >
                    Loading controller...
                </div>
            )}
        </div>
    );
}
