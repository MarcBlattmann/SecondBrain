import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = requestUrl.searchParams.get('next') ?? '/protected'

  if (code) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
    
    try {
      await supabase.auth.exchangeCodeForSession(code)
      
      if (next.includes('reset-password')) {
        return NextResponse.redirect(`${requestUrl.origin}/reset-password`)
      }
    } catch (error) {
      console.error('Error exchanging code for session:', error)
      return NextResponse.redirect(`${requestUrl.origin}/sign-in?error=Authentication failed`)
    }
  }

  return NextResponse.redirect(`${requestUrl.origin}${next}`)
}
