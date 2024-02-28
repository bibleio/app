import type { Metadata } from "next";
import { Viewport } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import { IconCode, IconSearch, IconSettingsDown } from "@tabler/icons-react";
import "./globals.css";
import InfoModal from "@/components/ui/InfoModal";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://biblio.day"),
  title: "Biblio",
  description: "A minimalist, simple Bible viewing website.",
  keywords: [
    "Bible",
    "Online Bible",
    "Free Bible",
    "Church",
    "Christianity",
    "Bible hub",
    "Bible app",
    "Biblio",
  ],
  authors: [{ name: "dukc", url: "https://dukc.dev" }],
  creator: "dukc",
  publisher: "dukc",
  openGraph: {
    title: "Biblio",
    description: "A minimalist, simple Bible viewing website.",
    url: "https://biblio.day",
    siteName: "dukc",
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
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexSerif.className}>
      <body className="bg-bg-white bg-no-repeat text-[#0C0C0C] bg-cover overflow-hidden h-screen p-96 flex flex-col flex-start gap-64">
        <nav className="flex gap-32 items-center">
          <h1 className="text-1 font-bold">Biblio</h1>
          <div className="h-[1px] w-full bg-black/20"></div>
          <div className="flex gap-32 items-start">
            <button className="flex flex-col w-fit group">
              <p className="text-body">Bible</p>
              <div className="w-full bg-accent h-[3px] group-hover:scale-x-75 group-active:scale-x-[.25] rounded-full duration-200 ease-out"></div>
            </button>
            <button>
              <IconSearch className="hover:-translate-y-[1px] active:translate-y-4 hover:text-accent duration-200 ease-out" />
            </button>
            <button>
              <IconSettingsDown className="hover:-translate-y-[1px] active:translate-y-4 hover:text-accent duration-200 ease-out" />
            </button>
            <InfoModal />
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
