import type { Metadata } from "next";
import { Viewport } from "next";

import { IBM_Plex_Serif, Inter, Quicksand, Tinos } from "next/font/google";
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

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-serif",
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
      className={`${ibmPlexSerif.variable} ${inter.variable} ${quickSand.variable} ${tinos.variable} ${GeistMono.variable} ${openDyslexic.variable}`}
    >
      <body
        className={`bg-bg-white font-ibm-serif bg-fixed text-[#0C0C0C] text-body bg-cover overflow-x-hidden h-screen flex flex-col items-center gap-64 pb-256 py-12 max-[1250px]:py-0`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
