'use client'
import DisplayPage from '@/components/displayPage'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Outline from '@/components/outline'
import { useAppContext } from '@/context/context'
export default function Home() {
  const { displayPage, page } = useAppContext()
  return (
    <main className='relative'>
      <>
        <Header />
        <Hero />
        <Outline />
      </>
      {displayPage && <DisplayPage page={page} />}
    </main>
  )
}
