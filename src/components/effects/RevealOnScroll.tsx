'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface RevealOnScrollProps {
    children: ReactNode;
    variant?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleUp' | 'fadeIn';
    delay?: number;
    className?: string;
    threshold?: number;
}

/**
 * Wraps children in an animated reveal triggered by intersection observer.
 * Uses React state (not imperative DOM) so reconciliation in server-component
 * pages never wipes the revealed class.
 */
export default function RevealOnScroll({
    children,
    variant = 'fadeUp',
    delay = 0,
    className = '',
    threshold = 0.15,
}: RevealOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Defer observer setup to next frame so layout is settled after
        // hydration / soft-navigation, avoiding false isIntersecting=false.
        const raf = requestAnimationFrame(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setRevealed(true);
                        observer.unobserve(el);
                    }
                },
                { threshold, rootMargin: '0px 0px -40px 0px' }
            );
            observer.observe(el);
            // Store for cleanup
            observerRef.current = observer;
        });

        return () => {
            cancelAnimationFrame(raf);
            observerRef.current?.disconnect();
        };
    }, [threshold]);

    const observerRef = useRef<IntersectionObserver | null>(null);

    const variantMap: Record<string, React.CSSProperties> = {
        fadeUp: { opacity: 0, transform: 'translateY(50px)' },
        fadeLeft: { opacity: 0, transform: 'translateX(-50px)' },
        fadeRight: { opacity: 0, transform: 'translateX(50px)' },
        scaleUp: { opacity: 0, transform: 'scale(0.92)' },
        fadeIn: { opacity: 0, transform: 'none' },
    };

    return (
        <div
            ref={ref}
            className={`reveal-on-scroll ${revealed ? 'revealed' : ''} ${className}`}
            style={{
                ...(revealed ? {} : variantMap[variant]),
                transitionDelay: revealed ? `${delay}ms` : '0ms',
                transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)`,
                willChange: 'opacity, transform',
            }}
        >
            {children}
        </div>
    );
}
