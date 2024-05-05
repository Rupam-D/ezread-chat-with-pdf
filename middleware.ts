// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// // This function can be marked `async` if using `await` inside
// export const middleware = async (request: NextRequest) => {
//   const { getUser, isAuthenticated } = getKindeServerSession();

//   const isAutherized = await isAuthenticated();
//   const user = await getUser();
//   console.log(user, isAutherized, "from mdwr");

//   if (!isAutherized) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
// };

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/dashboard/:path*",
// };

import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
export default function middleware(req: any) {
  return withAuth(req);
}
export const config = {
  matcher: ["/dashboard/:path*"],
};
