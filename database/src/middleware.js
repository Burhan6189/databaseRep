import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();

  let patientcookie = request.cookies.get("Patient");

  if (!patientcookie) {
    if (request.nextUrl.pathname.startsWith("/Things") || request.nextUrl.pathname.startsWith("/PatientDashboard")) {
      return NextResponse.rewrite(new URL("/Login", request.url));
    }
    
  } else {
    if (url.pathname === "/login") {
      if (patientcookie) {
        url.pathname = "Things";

        return NextResponse.redirect(url);
      }
    }
  }
}
