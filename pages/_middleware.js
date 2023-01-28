import { NextResponse } from 'next/server';

export default function middleware(req) {
  const { cookies } = req;
  const jwt = cookies.jwt;
  const url = req.url;
  if (url.includes('/application')) {
    if (jwt === undefined) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    return NextResponse.next();
  }
  return NextResponse.next();
}
