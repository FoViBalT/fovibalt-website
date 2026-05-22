'use client';

import { useEffect, useState } from 'react';
import { getABVariant, reportABVariant, type ABVariant } from '@/lib/analytics';
import useScrollDepth from '@/hooks/useScrollDepth';
import HomeClient from '@/app/HomeClient';
import HomeClientB from '@/app/HomeClientB';

/**
 * Reads (or assigns) the A/B variant on mount and renders the correct page.
 * Also attaches scroll depth tracking.
 */
export default function ABTestHome() {
  const [variant, setVariant] = useState<ABVariant>('A');

  useScrollDepth();

  useEffect(() => {
    const v = getABVariant();
    setVariant(v);
    reportABVariant(v);
  }, []);

  return variant === 'B' ? <HomeClientB /> : <HomeClient />;
}
