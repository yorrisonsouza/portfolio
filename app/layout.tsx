import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Felipe Yorrison',
  description: 'Felipe Yorrison',
  generator: 'Yorrison',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
