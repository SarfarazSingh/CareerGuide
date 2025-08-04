import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Career Guide',
  description: 'A guide to your career opportunities',
  generator: 'v0.dev',
  manifest: '/manifest.json',
  themeColor: '#0070f3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
