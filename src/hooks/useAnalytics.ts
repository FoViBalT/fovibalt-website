'use client';

import { useEffect, useRef } from 'react';
import { trackPageView, trackScrollDepth, resetScrollDepth } from '@/lib/analytics';

/**
 * Drop this hook into any page component (or the root layout client wrapper)
 * to automatically track:
 *  - Page view on mount / route change
 *  - Scroll depth milestones (25 / 50 / 75 / 90 / 100 %)
 */
export function useAnalytics() {
  const tracked = useRef(false);

  // Track page view once per mount
  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;
    resetScrollDepth();
    trackPageView(window.location.href, document.title);
  }, []);

  // Track scroll depth
  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const percentage = Math.round((scrolled / total) * 100);
      trackScrollDepth(percentage);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
