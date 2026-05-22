'use client';

/**
 * Drop-in replacement for `next/link` with automatic GA4 click tracking.
 *
 * Usage: replace `import Link from 'next/link'` with
 *        `import Link from '@/components/parts/Link'`
 *
 * The `trackLabel` prop is optional — if omitted the href is used as label.
 */

import NextLink, { type LinkProps } from 'next/link';
import { type AnchorHTMLAttributes } from 'react';
import { trackClick } from '@/lib/analytics';

type Props = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    trackLabel?: string;
  };

export default function Link({ href, trackLabel, onClick, children, ...rest }: Props) {
  const destination = typeof href === 'string' ? href : (href.pathname ?? '');

  return (
    <NextLink
      href={href}
      onClick={(e) => {
        trackClick(trackLabel ?? destination, destination);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </NextLink>
  );
}
