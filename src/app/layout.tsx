import '../styles/globals.css';
import '../styles/markdown.css';
import type { Metadata } from 'next';
import { Newsreader, Gowun_Batang } from 'next/font/google';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--pretendard',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--newsreader',
  display: 'swap',
  adjustFontFallback: false,
});

const gowun = Gowun_Batang({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--gowun',
});

export const metadata: Metadata = {
  title: {
    default: 'saseungg',
    template: 'saseungg | %s',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const cls = (...classnames: string[]) => {
  return classnames.join(' ');
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cls(pretendard.variable, newsreader.variable, gowun.variable)}>
      <body>
        <div className="blur-layer"></div>
        <main className="w-full max-w-[650px] py-24 font-pretendard mx-auto">{children}</main>
      </body>
    </html>
  );
}
