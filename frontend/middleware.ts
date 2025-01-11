import { defaultLoginRedirect, authRoutes } from "@/routes";
import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const { nextUrl } = req;

  if (nextUrl.pathname === "/") {
    return NextResponse.next();
  }

  const isLoggedIn = !!req.cookies.get("token")?.value;

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(defaultLoginRedirect, nextUrl));
    }
    return null;
  }
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }
  return null;
};

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
