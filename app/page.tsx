'use client'
import Quotes from '@/components/quotes'
import DisplayPage from '@/components/displayPage'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Outline from '@/components/outline'
import Story from '@/components/story'
import { useAppContext } from '@/context/context'
import Marquee from '@/components/marquee'
import PicGallery from '@/components/gallery'
export default function Home() {
  const { displayPage, page } = useAppContext()
  return (
    <main className='relative'>
      <>
        <Header />
        <Hero />
        <Outline />
        <Quotes />
        <Story />
        <Marquee />
        <PicGallery />
      </>
      {displayPage && <DisplayPage />}
    </main>
  )
}
