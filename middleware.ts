import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Redirect www.soulsignal.co → soulsignal.co
  if (url.hostname === "www.soulsignal.co") {
    url.hostname = "soulsignal.co";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}
