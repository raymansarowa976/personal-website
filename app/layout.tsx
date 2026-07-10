import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import { StarfieldBackground } from "@/components/StarfieldBackground";
import { CometTrail } from "@/components/CometTrail";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rsarowa.com'),
  title: {
    default: 'Rayman Sarowa',
    template: '%s | Rayman Sarowa',
  },
  description: 'Personal website of Rayman Sarowa — software developer from Kelowna, BC.',
  openGraph: {
    title: 'Rayman Sarowa',
    description: 'Personal website of Rayman Sarowa — software developer from Kelowna, BC.',
    type: 'website',
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <StarfieldBackground />
          <SiteChrome>
            <main className="flex-1">{children}</main>
          </SiteChrome>
          <CometTrail />
        </body>
    </html>
  );
}
