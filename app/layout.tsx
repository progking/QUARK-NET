import type { Metadata } from 'next';
import { Newsreader, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Quark Net — Decentralized Compute Network',
  description: 'Quark Net is a decentralized compute network that transforms idle GPU, CPU, and server capacity from independent providers into a unified, on-demand supercomputer.',
  openGraph: {
    title: 'Quark Net — Decentralized Compute Network',
    description: 'Transforming idle GPU, CPU, and server capacity into a unified on-demand supercomputer with on-chain settlement.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quark Net — Decentralized Compute Network',
    description: 'Transforming idle GPU, CPU, and server capacity into a unified on-demand supercomputer with on-chain settlement.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#f4f1ea] text-[#121615] antialiased selection:bg-[#10b981] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

