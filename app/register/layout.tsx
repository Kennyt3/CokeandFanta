'use client'

import type { Metadata } from 'next'
import './globals.css'
import '../wish.css'
import '../account.css'
import '../form.css'
import '../general.css'
import AppProvider from '@/context/context'

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
