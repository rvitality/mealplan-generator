import type { Metadata } from "next";
import { ReactQueryClientProvider } from "@/components/react-query-client-provider";
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import "./globals.css";

// Components
import Navbar from "@/components/navbar";
import CreateProfileOnSignIn from "@/components/create-profile";

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
        <html lang='en'>
            <body className='bg-gray-50 text-gray-900'>
                <ReactQueryClientProvider>
                    <ClerkProvider>
                        <CreateProfileOnSignIn />
                        <Navbar />

                        <main className='max-w-7xl mx-auto pt-16 p-4 min-h-screen'>{children}</main>
                    </ClerkProvider>
                </ReactQueryClientProvider>
            </body>
        </html>
    );
}
