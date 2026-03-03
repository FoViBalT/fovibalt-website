'use client';

import { useEffect, useRef } from 'react';

/**
 * A subtle spotlight effect that follows the mouse cursor.
 * Creates a soft radial highlight centered on the cursor position.
 */
export default function MouseSpotlight() {
    const spotRef = useRef<HTMLDivElement>(null);
    const raf = useRef<number>(0);
    const mousePos = useRef({ x: 0, y: 0 });
    const currentPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        // Smooth lerp animation
        const animate = () => {
            const spot = spotRef.current;
            if (!spot) {
                raf.current = requestAnimationFrame(animate);
                return;
            }

            const lerp = 0.08;
            currentPos.current.x += (mousePos.current.x - currentPos.current.x) * lerp;
            currentPos.current.y += (mousePos.current.y - currentPos.current.y) * lerp;

            spot.style.transform = `translate(${currentPos.current.x - 250}px, ${currentPos.current.y - 250}px)`;

            raf.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        raf.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(raf.current);
        };
    }, []);

    return (
        <div
            ref={spotRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(89,126,255,0.06) 0%, transparent 60%)',
                pointerEvents: 'none',
                zIndex: 1,
                willChange: 'transform',
                mixBlendMode: 'screen',
            }}
            aria-hidden="true"
        />
    );
}
