import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import './globals.css';
import '@bibleio/design/dist/index.css';
import { Nav } from '@/components/Nav';

const lora = Lora({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Bibleio Web',
  description: 'A simple, casual Bible reading experience on the web.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${lora.className} text-text bg`}>
        <Nav path="/" />
        {children}
      </body>
    </html>
  );
}
