import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Movie",
    description: "Movie Landing Page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`bg-zinc-900 text-red-50 overflow-x-hidden`}>{children}</body>
        </html>
    );
}
