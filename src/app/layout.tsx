// layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, DM_Mono, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Alan Garcia | Software Engineer",
  description:
    "Full-stack engineer specialising in React, Next.js, and scalable Node backends.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmMono.variable} ${sourceSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-navy text-white">
        {children}
      </body>
    </html>
  );
}
