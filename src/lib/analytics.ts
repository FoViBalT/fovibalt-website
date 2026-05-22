/**
 * analytics.ts
 *
 * Typed wrappers around window.gtag for GA4.
 * Covers:
 *  - Page views (with A/B variant)
 *  - Button / link clicks
 *  - Element visibility (section viewed)
 *  - Scroll depth milestones
 *  - A/B variant assignment
 */

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const AB_COOKIE = 'ab_variant';

function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];
}

function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args);
  }
}

/** Call once on app mount — sets the ab_variant user property so every hit is tagged. */
export function initAnalytics() {
  const variant = getCookie(AB_COOKIE) ?? 'a';
  gtag('set', 'user_properties', { ab_variant: variant });
}

// ─── Page views ──────────────────────────────────────────────────────────────

export function trackPageView(url: string, title?: string) {
  const variant = getCookie(AB_COOKIE) ?? 'a';
  gtag('event', 'page_view', {
    page_location: url,
    page_title: title ?? document.title,
    ab_variant: variant,
  });
}

// ─── Clicks ──────────────────────────────────────────────────────────────────

interface TrackClickOptions {
  /** Human-readable label, e.g. "Hero CTA — Buy now" */
  label: string;
  /** The section or component the element lives in, e.g. "hero" */
  section?: string;
  /** href for links */
  destination?: string;
}

export function trackClick({ label, section, destination }: TrackClickOptions) {
  const variant = getCookie(AB_COOKIE) ?? 'a';
  gtag('event', 'click', {
    event_category: section ?? 'general',
    event_label: label,
    destination,
    ab_variant: variant,
  });
}

// ─── Section / element visibility ────────────────────────────────────────────

interface TrackSectionViewOptions {
  sectionName: string;
}

export function trackSectionView({ sectionName }: TrackSectionViewOptions) {
  const variant = getCookie(AB_COOKIE) ?? 'a';
  gtag('event', 'section_viewed', {
    section_name: sectionName,
    ab_variant: variant,
  });
}

// ─── Scroll depth ────────────────────────────────────────────────────────────

const reportedDepths = new Set<number>();

export function trackScrollDepth(percentage: number) {
  const milestone = [25, 50, 75, 90, 100].find(
    (m) => percentage >= m && !reportedDepths.has(m),
  );
  if (milestone === undefined) return;
  reportedDepths.add(milestone);
  const variant = getCookie(AB_COOKIE) ?? 'a';
  gtag('event', 'scroll_depth', {
    scroll_depth_percentage: milestone,
    ab_variant: variant,
  });
}

/** Reset scroll milestones — call on route change. */
export function resetScrollDepth() {
  reportedDepths.clear();
}
