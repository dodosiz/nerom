import { NextRequest, NextResponse } from "next/server";
import { Lang } from "./app/localization";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales: Lang[] = ["en", "el"];
const defaultLocale: Lang = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const languages = new Negotiator({
    headers: Object.fromEntries(request.headers),
  }).languages();

  const lang = match(languages, locales, defaultLocale) as Lang;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  request.nextUrl.pathname = `/${lang}/${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/"],
};
