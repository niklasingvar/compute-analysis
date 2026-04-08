import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, isValidLocale } from "./lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if locale is already in the path
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Skip static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check Accept-Language header for preferred locale
  const acceptLang = request.headers.get("accept-language") || "";
  const preferredLocale = acceptLang.includes("sv") ? "sv" : acceptLang.includes("en") ? "en" : defaultLocale;
  const locale = isValidLocale(preferredLocale) ? preferredLocale : defaultLocale;

  // Redirect to locale-prefixed path
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\.).*)"],
};
