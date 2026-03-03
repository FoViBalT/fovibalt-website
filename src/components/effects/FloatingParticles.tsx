'use client';

import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    alpha: number;
    alphaDir: number;
    hue: number;
}

/**
 * A canvas-based floating LED-like particle field.
 * Particles gently drift and pulse with the brand gradient colors.
 */
export default function FloatingParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const raf = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = document.documentElement.scrollHeight;

        canvas.width = width;
        canvas.height = height;

        const PARTICLE_COUNT = Math.min(50, Math.floor(width / 30));
        const particles: Particle[] = [];

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.2 - 0.1,
                radius: Math.random() * 2 + 1,
                alpha: Math.random() * 0.4 + 0.1,
                alphaDir: Math.random() > 0.5 ? 0.002 : -0.002,
                hue: Math.random() > 0.5 ? 230 : 310, // blue or pink
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                p.alpha += p.alphaDir;

                if (p.alpha > 0.5) p.alphaDir = -Math.abs(p.alphaDir);
                if (p.alpha < 0.05) p.alphaDir = Math.abs(p.alphaDir);

                // Wrap around edges
                if (p.x < -10) p.x = width + 10;
                if (p.x > width + 10) p.x = -10;
                if (p.y < -10) p.y = height + 10;
                if (p.y > height + 10) p.y = -10;

                // Draw glow
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 8);
                gradient.addColorStop(0, `hsla(${p.hue}, 80%, 65%, ${p.alpha})`);
                gradient.addColorStop(1, `hsla(${p.hue}, 80%, 65%, 0)`);
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius * 8, 0, Math.PI * 2);
                ctx.fill();

                // Draw core
                ctx.fillStyle = `hsla(${p.hue}, 80%, 80%, ${p.alpha * 1.5})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            }

            raf.current = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = document.documentElement.scrollHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);

        // Resize observer to catch content height changes
        const resizeObserver = new ResizeObserver(() => {
            height = document.documentElement.scrollHeight;
            canvas.height = height;
        });
        resizeObserver.observe(document.body);

        return () => {
            cancelAnimationFrame(raf.current);
            window.removeEventListener('resize', handleResize);
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
            aria-hidden="true"
        />
    );
}
