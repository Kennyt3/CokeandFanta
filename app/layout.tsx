import type { Metadata } from 'next'
import './globals.css'
import './reset.css'
import './wish.css'
import AppProvider from '@/context/context'

export const metadata: Metadata = {
  title: 'Dorcas and Emmanuel',
  description: 'Wedding Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
