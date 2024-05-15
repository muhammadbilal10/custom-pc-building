import { NextResponse } from "next/server";
import { BASE_PATH, auth } from "@/auth";
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default auth((req) => {
  // const reqUrl = new URL(req.url);
  // if (!req.auth) {
  //   const url = req.url.replace("/login", req.nextUrl.pathname);
  //   return Response.redirect(url);
  // }
  // if (!req.auth && reqUrl?.pathname !== "/") {
  //   const url = req.url.replace(req.nextUrl.pathname, "/login");
  //   return Response.redirect(url);
  //   // return NextResponse.redirect(
  //   //   new URL(
  //   //     `${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(
  //   //       reqUrl?.pathname
  //   //     )}`,
  //   //     req.url
  //   //   )
  //   // );
  // }
});
