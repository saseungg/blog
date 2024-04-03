import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: '승연의 블로그',
    template: '승연의 블로그 | %s',
  },
  description: '기록하다',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col w-full max-w-[640px] mx-auto h-auto py-24">
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
