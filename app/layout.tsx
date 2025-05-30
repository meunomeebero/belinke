import type { Metadata } from 'next'
import { Roboto_Mono, Inter } from 'next/font/google'
import './globals.css'

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
  title: 'Belinke',
  description: 'Create and download a custom LinkedIn profile image with Belinke. Easily customize your name, title, experience, recommendations, and more!',
  keywords: ['LinkedIn', 'profile', 'PNG', 'generator', 'custom profile', 'professional image', 'social media'],
  authors: [{ name: 'Belinke' }],
  icons: {
    icon: '/icon.ico',
    apple: '/cover.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://belinke.bero.land',
    title: 'Belinke',
    description: 'Create and download a custom LinkedIn profile image with Belinke. Easily customize your name, title, experience, recommendations, and more!',
    images: ['/cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@meunomeebero',
    creator: '@meunomeebero',
    title: 'Belinke',
    description: 'Create and download a custom LinkedIn profile image. Customize name, title, experience, and more!',
    images: ['/cover.png'],
  },
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
