'use client';

import { useEffect, useRef, useState } from 'react';

interface ControllerRotationProps {
    className?: string;
}

const connectorInfo = [
    { key: 'mr30', label: 'MR-30 LED Output', range: [0, 3] as const, color: 'rgba(89,126,255,0.25)' },
    { key: 'rgbw', label: '6-Pin RGB WW CW', range: [4, 7] as const, color: 'rgba(155,89,255,0.25)' },
    { key: 'usb', label: 'USB-C 5A Input', range: [8, 11] as const, color: 'rgba(89,126,255,0.28)' },
    { key: 'barrel', label: 'Barrel Jack 7A', range: [12, 15] as const, color: 'rgba(255,88,220,0.23)' },
    { key: 'screw', label: 'Screw Terminal 20A', range: [16, 18] as const, color: 'rgba(255,88,220,0.28)' },
];

/**
 * Wheel-locked controller showcase using the 19-frame connectors image sequence.
 * While pointer is over the component, wheel scroll is consumed to scrub frames,
 * preventing page scroll and showing connector highlights.
 */
export default function ControllerRotation({ className }: ControllerRotationProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const framesRef = useRef<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);
    const [currentFrame, setCurrentFrame] = useState(0);
    const currentFrameRef = useRef(0);
    const wheelBufferRef = useRef(0);
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
        setCurrentFrame(index);
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

    useEffect(() => {
        if (!loaded) return;
        drawFrame(0);
    }, [loaded]);

    const activeConnector = connectorInfo.find(
        (item) => currentFrame >= item.range[0] && currentFrame <= item.range[1]
    ) ?? connectorInfo[0];

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
                touchAction: 'none',
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

            {loaded && (
                <>
                    <div
                        style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            zIndex: 3,
                            padding: '8px 10px',
                            borderRadius: '10px',
                            background: 'rgba(17,17,24,0.72)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            backdropFilter: 'blur(8px)',
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: '12px',
                            color: 'var(--Text_2)',
                        }}
                    >
                        Scroll over image to rotate connectors ({currentFrame + 1}/{TOTAL_FRAMES})
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '12px',
                            left: '12px',
                            right: '12px',
                            zIndex: 3,
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gap: '8px',
                        }}
                    >
                        <div
                            style={{
                                padding: '8px 10px',
                                borderRadius: '10px',
                                background: activeConnector.color,
                                border: '1px solid rgba(255,255,255,0.22)',
                                color: 'var(--Text_1)',
                                fontFamily: "'Open Sans', sans-serif",
                                fontSize: '12px',
                                fontWeight: 700,
                            }}
                        >
                            Active connector: {activeConnector.label}
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '6px',
                            }}
                        >
                            {connectorInfo.map((item) => {
                                const isActive = item.key === activeConnector.key;
                                return (
                                    <span
                                        key={item.key}
                                        style={{
                                            fontFamily: "'Open Sans', sans-serif",
                                            fontSize: '11px',
                                            padding: '5px 8px',
                                            borderRadius: '999px',
                                            border: isActive
                                                ? '1px solid rgba(255,255,255,0.45)'
                                                : '1px solid rgba(255,255,255,0.12)',
                                            background: isActive ? item.color : 'rgba(17,17,24,0.62)',
                                            color: isActive ? 'var(--Text_1)' : 'var(--Text_2)',
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                );
                            })}
                        </div>
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
