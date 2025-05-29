import type { Metadata } from 'next'
import { Roboto_Mono, Inter } from 'next/font/google'
import './globals.css'

// Configure Roboto Mono font
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto-mono',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${robotoMono.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
