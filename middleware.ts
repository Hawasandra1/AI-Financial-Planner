import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Protect all routes except Next.js assets, static files, and webhooks (if applicable)
    "/((?!_next|.*\\..*|api/webhook).*)",
    // Ensure API routes are protected if needed
    "/(api|trpc)(.*)",
  ],
};
