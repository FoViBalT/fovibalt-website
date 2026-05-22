import { NextRequest, NextResponse } from 'next/server';

const AB_COOKIE = 'ab_variant';
const VARIANTS = ['a', 'b'] as const;
type Variant = (typeof VARIANTS)[number];

/**
 * Pages that participate in A/B testing.
 * Key: the original pathname, Value: the B-variant pathname.
 */
const AB_ROUTES: Record<string, string> = {
  '/': '/b',
};

function pickVariant(): Variant {
  return Math.random() < 0.5 ? 'a' : 'b';
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only run on pages registered for A/B testing
  if (!(pathname in AB_ROUTES)) {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  // Read or assign a variant
  let variant = request.cookies.get(AB_COOKIE)?.value as Variant | undefined;
  if (!VARIANTS.includes(variant as Variant)) {
    variant = pickVariant();
    response.cookies.set(AB_COOKIE, variant, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      sameSite: 'lax',
    });
  }

  // Rewrite B-variant users to the B page
  if (variant === 'b') {
    const url = request.nextUrl.clone();
    url.pathname = AB_ROUTES[pathname];
    return NextResponse.rewrite(url, {
      headers: response.headers,
    });
  }

  return response;
}

export const config = {
  // Run middleware only on the pages listed in AB_ROUTES
  matcher: ['/'],
};
