import type { Metadata } from "next";
import { Viewport } from "next";

import { Lora, Inter, Quicksand, Tinos } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import localFont from "next/font/local";

import "./globals.css";
import Nav from "@/components/ui/Nav";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://biblio1.vercel.app"),
  title: "Bibleio",
  description: "A minimalist, simple Bible viewing website.",
  keywords: [
    "Bible",
    "Online Bible",
    "Free Bible",
    "Church",
    "Christianity",
    "Bible hub",
    "Bible app",
    "Bibleio",
  ],
  authors: [{ name: "dukc", url: "https://dukc.dev" }],
  creator: "dukc",
  publisher: "dukc",
  openGraph: {
    title: "Bibleio",
    description: "A minimalist, simple Bible viewing website.",
    url: "https://biblio1.vercel.app",
    siteName: "Biblio",
    images: [
      {
        url: "/seoCover.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const quickSand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const tinos = Tinos({
  subsets: ["latin"],
  variable: "--font-tinos",
  weight: ["400", "700"],
});

const openDyslexic = localFont({
  src: "./localFonts/opendyslexic.woff2",
  variable: "--font-open-dyslexic",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${inter.variable} ${quickSand.variable} ${tinos.variable} ${GeistMono.variable} ${openDyslexic.variable}`}
    >
      <body
        className={`bg-light-bg text-body text-black font-lora overflow-x-hidden flex flex-col gap-0 p-0`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
