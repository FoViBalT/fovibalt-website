'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { initAnalytics } from '@/lib/analytics';

interface GoogleAnalyticsProps {
  measurementId: string;
}

/**
 * Drop this once in the root layout.
 * It loads the GA4 script and immediately reads the ab_variant cookie
 * so every hit is tagged with the variant the user is seeing.
 */
export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            send_page_view: false
          });
        `}
      </Script>
    </>
  );
}
