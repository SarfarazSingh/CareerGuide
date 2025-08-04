import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Career Guide',
  description: 'A guide to your career opportunities',
  generator: 'Next.js'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Link to the web‑app manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Define the theme colour for the browser chrome */}
        <meta name="theme-color" content="#0070f3" />
        {/* Optionally include Apple touch icons if you have them */}
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
