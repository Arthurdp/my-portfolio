import './globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Texts } from './texts'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
})

export const metadata: Metadata = {
  title: 'Arthur Dantas Porto',
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
