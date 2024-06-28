import type { Metadata } from 'next'
import './styles/globals.css'
import './styles/reset.css'
import './styles/wish.css'
import './styles/account.css'
import './styles/form.css'
import './styles/bg.css'
import './styles/story.css'
import './styles/quotes.css'
import './styles/general.css'
import './styles/styles.css'
import './styles/tale.css'
import './styles/marquee.css'
import './styles/message.css'
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
