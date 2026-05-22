import { cookies } from 'next/headers';

export type Variant = 'a' | 'b';

const AB_COOKIE = 'ab_variant';

/**
 * Returns the A/B variant assigned to the current request.
 * Can only be called from Server Components / Route Handlers.
 * Falls back to 'a' if the cookie is missing (e.g. during static rendering).
 */
export function getVariant(): Variant {
  const cookieStore = cookies();
  const value = cookieStore.get(AB_COOKIE)?.value;
  return value === 'b' ? 'b' : 'a';
}
