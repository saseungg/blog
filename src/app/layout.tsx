import '../styles/globals.css';
import '../styles/markdown.css';
import type { Metadata } from 'next';
import { Newsreader, Gowun_Batang } from 'next/font/google';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

const newreader = Newsreader({ subsets: ['latin'], variable: '--newsreader' });

const gowun = Gowun_Batang({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--gowun',
});

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

export const cls = (...classnames: string[]) => {
  return classnames.join(' ');
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cls(pretendard.className, newreader.variable, gowun.variable)}>
      <body className="flex flex-col w-full max-w-[650px] mx-auto h-auto py-24">
        <main>{children}</main>
      </body>
    </html>
  );
}
