'use client'
import { useEffect } from 'react'
import Quotes from '@/components/quotes'
import DisplayPage from '@/components/displayPage'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Outline from '@/components/outline'
import Story from '@/components/story'
import { useAppContext } from '@/context/context'
import Marquee from '@/components/marquee'
import PicGallery from '@/components/gallery'
import Copy from '@/components/copy'
export default function Home() {
  const {
    displayPage,
    page,
    setShowGift,
    setShowWish,
    setShowForm,
    setMessage,
    setShowMoreB,
    setShowMoreS,
    setShowMoreG,
  } = useAppContext()
  useEffect(() => {
    setShowWish(false)
    setShowGift(false)
    setShowForm(false)
    setShowMoreB(false)
    setShowMoreS(false)
    setShowMoreG(false)
    setMessage('')
  }, [])
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
        <Copy />
      </>
      {displayPage && <DisplayPage />}
    </main>
  )
}
