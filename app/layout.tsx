import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import { IconSearch, IconSettingsDown } from "@tabler/icons-react";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Biblio",
  description: "A minimalist Bible website.",
};

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
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
