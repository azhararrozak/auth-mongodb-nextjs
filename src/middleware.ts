import { NextRequest, NextResponse } from "next/server";
import { verifyJWT } from "./lib/auth";



const PUBLIC_ROUTES = ['/login', '/signup']

export async function middleware(request: NextRequest){
    const token = request.cookies.get('token')?.value
    //const isPublicRoute = PUBLIC_ROUTES.includes(request.nextUrl.pathname)
    //const isAuthRoute = AUTH_ROUTES.some(route => request.nextUrl.pathname.startsWith(route))

    const { pathname } = request.nextUrl;
    const isPublicRoute = PUBLIC_ROUTES.some(route => pathname.startsWith(route));



    if(token && isPublicRoute){
        return NextResponse.redirect(new URL('/dashboard' , request.url))
    }

    //if(isAuthRoute){
    if(pathname.startsWith('/dashboard')) {
        if(!token){
            return NextResponse.redirect(new URL('/login', request.url))
        }

        try {
            const payload = await verifyJWT()
            if (!payload) {
                const response = NextResponse.redirect(new URL('/login', request.url))
                response.cookies.delete('token')
                return response
            }

            const { role } = payload;

            if (pathname === '/dashboard') {
                if (role === 'admin') {
                    return NextResponse.redirect(new URL('/dashboard/admin', request.url));
                } else {
                    return NextResponse.redirect(new URL('/dashboard/user', request.url));
                }
            }

            if (pathname.startsWith('/dashboard/admin') && role !== 'admin') {
                return NextResponse.redirect(new URL('/dashboard/user', request.url));
            }

            if (pathname.startsWith('/dashboard/user') && role === 'admin') {
                return NextResponse.redirect(new URL('/dashboard/admin', request.url));
            }
        } catch (error) {
            console.error("JWT verification failed:", error);
            const response = NextResponse.redirect(new URL('/login' , request.url))
            response.cookies.delete('token')
            return response
        }
    }

    return NextResponse.next()

}