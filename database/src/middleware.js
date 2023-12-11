import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();

  let patientcookie = request.cookies.get("Patient");

  if (!patientcookie) {
    if (request.nextUrl.pathname.startsWith("/dashboard") ) {
      return NextResponse.rewrite(new URL("/Login", request.url));
    }
    
  } else {
    if (url.pathname === "/login") {
      if (patientcookie) {
        url.pathname = "dashboard";

        return NextResponse.redirect(url);
      }
    }
  }
}
export { default } from "next-auth/middleware"
