import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req: request, res });

  try {
    const { data: { session } } = await supabase.auth.getSession();

    // If accessing protected routes without auth, redirect to sign-in
    if (!session && request.nextUrl.pathname.startsWith('/protected')) {
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    // If accessing auth pages while logged in, redirect to protected area
    if (session && (request.nextUrl.pathname === '/sign-in' || request.nextUrl.pathname === '/sign-up')) {
      return NextResponse.redirect(new URL('/protected', request.url));
    }
  } catch (error) {
    console.error('Middleware error:', error);
  }

  return res;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
