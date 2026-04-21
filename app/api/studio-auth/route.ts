import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import {
  getStudioCookieMaxAge,
  getStudioCookieName,
  getStudioCookieValue,
  getStudioPassword,
  isStudioPasswordConfigured,
} from '@/lib/studioAuth';

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = String(formData.get('password') || '');
  const nextPath = String(formData.get('next') || '/studio');

  if (!isStudioPasswordConfigured()) {
    return NextResponse.redirect(new URL(nextPath, request.url));
  }

  if (password !== getStudioPassword()) {
    return NextResponse.redirect(new URL(`/studio-login?error=1&next=${encodeURIComponent(nextPath)}`, request.url));
  }

  const cookieStore = await cookies();
  cookieStore.set({
    name: getStudioCookieName(),
    value: getStudioCookieValue(),
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: getStudioCookieMaxAge(),
  });

  return NextResponse.redirect(new URL(nextPath, request.url));
}
