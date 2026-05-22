'use client';

import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

/**
 * Fires GA4 `scroll_depth` events at 25 / 50 / 75 / 100% milestones.
 * Each milestone fires at most once per page load.
 *
 * GA4 Enhanced Measurement only tracks 90% natively — this hook gives
 * full funnel visibility (25 / 50 / 75 / 100).
 *
 * Events appear in GA4 under Reports → Engagement → Events.
 * Add `depth_percent` as a custom dimension to filter by milestone.
 */
export default function useScrollDepth() {
  const fired = useRef<Set<number>>(new Set());

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;

      const pct = Math.round((scrolled / total) * 100);

      for (const milestone of [25, 50, 75, 100]) {
        if (pct >= milestone && !fired.current.has(milestone)) {
          fired.current.add(milestone);
          trackEvent('scroll_depth', { depth_percent: milestone });
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
