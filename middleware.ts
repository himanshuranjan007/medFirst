import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')
  const { pathname } = request.nextUrl

  // Paths that require authentication
  const protectedPaths = ['/dashboard', '/profile']
  const authPaths = ['/login', '/register']
  
  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path))
  const isAuthPath = authPaths.some(path => pathname.startsWith(path))

  // If user is authenticated and tries to access auth pages, redirect to dashboard
  if (isAuthPath && token) {
    const verifyResponse = await fetch(new URL('/api/auth/verify', request.url), {
      headers: {
        Cookie: `auth-token=${token.value}`
      }
    })
    const { isValid } = await verifyResponse.json()

    if (isValid) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  // If accessing protected paths, verify authentication
  if (isProtectedPath) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    const verifyResponse = await fetch(new URL('/api/auth/verify', request.url), {
      headers: {
        Cookie: `auth-token=${token.value}`
      }
    })
    const { isValid } = await verifyResponse.json()

    if (!isValid) {
      const response = NextResponse.redirect(new URL('/login', request.url))
      response.cookies.delete('auth-token')
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
} 