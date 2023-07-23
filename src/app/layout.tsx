import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Texts } from './texts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arthur Porto',
  description: Texts.Site_Description
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
