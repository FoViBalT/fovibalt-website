'use client';

import { useRef, ReactNode } from 'react';

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    glowColor?: string;
}

/**
 * A card that tilts toward the mouse cursor with a gradient glow border effect.
 * Creates a premium 3D interactive feel on hover.
 */
export default function TiltCard({ children, className = '', glowColor = 'rgba(89,126,255,0.4)' }: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.MouseEvent) => {
        const card = cardRef.current;
        const glow = glowRef.current;
        if (!card || !glow) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

        // Move glow to cursor position
        glow.style.opacity = '1';
        glow.style.background = `radial-gradient(circle at ${x}px ${y}px, ${glowColor}, transparent 60%)`;
    };

    const handleLeave = () => {
        const card = cardRef.current;
        const glow = glowRef.current;
        if (!card || !glow) return;

        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
        glow.style.opacity = '0';
    };

    return (
        <div
            ref={cardRef}
            className={className}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{
                position: 'relative',
                transition: 'transform 0.2s ease',
                transformStyle: 'preserve-3d',
                overflow: 'hidden',
            }}
        >
            <div
                ref={glowRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none',
                    zIndex: 1,
                    borderRadius: 'inherit',
                }}
                aria-hidden="true"
            />
            <div style={{ position: 'relative', zIndex: 2 }}>
                {children}
            </div>
        </div>
    );
}
