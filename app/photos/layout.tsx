'use client'

import type { Metadata } from 'next'
import AppProvider from '@/context/context'
import '../styles/reset.css'
import '../styles/photos.css'
import '../styles/gallery.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
