import { NextRequest, NextResponse } from 'next/server';

const CANONICAL_HOST = 'fovibalt.com';

export function middleware(request: NextRequest) {
  const { hostname, pathname, search } = request.nextUrl;

  // Redirect www → non-www (and any other stray subdomains)
  if (hostname !== CANONICAL_HOST && hostname.endsWith(CANONICAL_HOST)) {
    return NextResponse.redirect(
      `https://${CANONICAL_HOST}${pathname}${search}`,
      301,
    );
  }

  return NextResponse.next();
}

export const config = {
  // Run on all routes except static files and Next.js internals
  matcher: ['/((?!_next/static|_next/image|images|fonts|favicon.ico|icon.svg|robots.txt|sitemap.xml).*)'],
};
