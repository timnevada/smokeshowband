import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  getStudioCookieName,
  getStudioCookieValue,
  isStudioPasswordConfigured,
} from '@/lib/studioAuth';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith('/studio')) {
    return NextResponse.next();
  }

  if (!isStudioPasswordConfigured()) {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get(getStudioCookieName())?.value;

  if (authCookie === getStudioCookieValue()) {
    return NextResponse.next();
  }

  const loginUrl = new URL('/studio-login', request.url);
  loginUrl.searchParams.set('next', pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/studio/:path*'],
};
