import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import Navbar from "@/components/navbar";

export const metadata: Metadata = {
    title: "AI Meal Plans | Simple SaaS Demo",
    description: "Generate personalized meal plans with OpenAI",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className='bg-gray-50 text-gray-900'>
                    <Navbar />
                    <main className='max-w-7xl mx-auto pt-16 p-4 min-h-screen'>{children}</main>
                </body>
            </html>
        </ClerkProvider>
    );
}
