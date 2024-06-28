'use client'

import type { Metadata } from 'next'
import './globals.css'
import '../styles/wish.css'
import '../styles/account.css'
import '../styles/form.css'
import '../styles/bg.css'
import '../styles/general.css'
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
