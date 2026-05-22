/**
 * Google Analytics 4 – typed helper module
 * Exposes `trackEvent`, click / scroll helpers, and AB-test utilities.
 */

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

/** Fire a GA4 event (no-ops if gtag is not loaded). */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', eventName, params ?? {});
}

/** Track a CTA / button click. */
export function trackClick(label: string, destination?: string) {
  trackEvent('cta_click', {
    label,
    ...(destination ? { destination } : {}),
  });
}

/** Track scroll depth milestones (25 / 50 / 75 / 100). */
export function trackScrollDepth(depth: number) {
  trackEvent('scroll_depth', { depth_percent: depth });
}

// ─── A/B Test ────────────────────────────────────────────────────────────────

export type ABVariant = 'A' | 'B';
const AB_KEY = 'fovibalt_ab_variant';

/**
 * Returns the stored variant or randomly assigns one (50/50), then persists it
 * in localStorage so the same user always sees the same variant.
 */
export function getABVariant(): ABVariant {
  if (typeof window === 'undefined') return 'A'; // SSR fallback → always A
  const stored = localStorage.getItem(AB_KEY) as ABVariant | null;
  if (stored === 'A' || stored === 'B') return stored;
  const assigned: ABVariant = Math.random() < 0.5 ? 'A' : 'B';
  localStorage.setItem(AB_KEY, assigned);
  return assigned;
}

/** Report to GA4 which variant the current user received. */
export function reportABVariant(variant: ABVariant) {
  trackEvent('ab_variant_assigned', { variant });
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('set', 'user_properties', { ab_variant: variant });
  }
}
