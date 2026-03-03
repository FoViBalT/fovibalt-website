'use client';

import { useEffect, useRef } from 'react';

/**
 * A pair of glowing orbs that drift through the page background
 * based on scroll position, creating a living ambient light feel.
 */
export default function ScrollGlow() {
    const orb1 = useRef<HTMLDivElement>(null);
    const orb2 = useRef<HTMLDivElement>(null);
    const raf = useRef<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            cancelAnimationFrame(raf.current);
            raf.current = requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const docH = document.documentElement.scrollHeight - window.innerHeight;
                const progress = docH > 0 ? scrollY / docH : 0;

                if (orb1.current) {
                    // Orb 1: moves from top-left to bottom-right in a sine curve
                    const x1 = 15 + Math.sin(progress * Math.PI * 2) * 30;
                    const y1 = progress * 100;
                    orb1.current.style.transform = `translate(${x1}vw, ${y1}vh)`;
                    orb1.current.style.opacity = `${0.4 + Math.sin(progress * Math.PI) * 0.3}`;
                }

                if (orb2.current) {
                    // Orb 2: moves opposite path
                    const x2 = 65 - Math.sin(progress * Math.PI * 2.5) * 25;
                    const y2 = progress * 90 + 10;
                    orb2.current.style.transform = `translate(${x2}vw, ${y2}vh)`;
                    orb2.current.style.opacity = `${0.3 + Math.cos(progress * Math.PI * 1.5) * 0.25}`;
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(raf.current);
        };
    }, []);

    const baseStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0,
        filter: 'blur(120px)',
        willChange: 'transform, opacity',
        transition: 'opacity 0.3s ease',
    };

    return (
        <>
            <div
                ref={orb1}
                style={{
                    ...baseStyle,
                    background: 'radial-gradient(circle, rgba(89,126,255,0.18) 0%, rgba(89,126,255,0.05) 50%, transparent 70%)',
                }}
                aria-hidden="true"
            />
            <div
                ref={orb2}
                style={{
                    ...baseStyle,
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(255,88,220,0.14) 0%, rgba(255,88,220,0.04) 50%, transparent 70%)',
                }}
                aria-hidden="true"
            />
        </>
    );
}
