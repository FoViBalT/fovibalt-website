'use client';

import NextLink, { type LinkProps } from 'next/link';
import { type AnchorHTMLAttributes } from 'react';
import { trackClick } from '@/lib/analytics';

type TrackedLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    /** Human-readable label for GA4 (defaults to href string). */
    trackLabel?: string;
  };

/**
 * Drop-in replacement for Next.js `<Link>` that automatically fires a
 * `cta_click` GA4 event when clicked.
 */
export default function TrackedLink({
  trackLabel,
  href,
  onClick,
  children,
  ...rest
}: TrackedLinkProps) {
  const destination = typeof href === 'string' ? href : href.pathname ?? '';

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    trackClick(trackLabel ?? destination, destination);
    onClick?.(e);
  }

  return (
    <NextLink href={href} onClick={handleClick} {...rest}>
      {children}
    </NextLink>
  );
}
