'use client';

import { type ReactNode } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

/** Thin client component — just activates the analytics hook. */
export default function AnalyticsProvider({ children }: { children: ReactNode }) {
  useAnalytics();
  return <>{children}</>;
}
