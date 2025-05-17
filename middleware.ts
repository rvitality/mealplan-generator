import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

  

const isSignUpRoute = createRouteMatcher(["/sign-up(.*)"]);

export default clerkMiddleware(async (auth, req) => {
    const userAuth = await auth();
    const { userId } = userAuth;
    const { pathname, origin } = req.nextUrl;

    if (!isPublicRoute(req) && !userId) {
        // If route is NOT public & user not signed in → redirect to /sign-up
        return NextResponse.redirect(new URL("/sign-up", origin));
    }

    if (isSignUpRoute(req) && userId) {
        // If user is signed in and visits /sign-up → redirect to mealplan
        return NextResponse.redirect(new URL("/mealplan", origin));
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
};
