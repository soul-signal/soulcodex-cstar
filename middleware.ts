import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // Redirect www → apex
  if (host === "www.soulsignal.co") {
    const url = new URL(request.url);
    url.host = "soulsignal.co";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}
