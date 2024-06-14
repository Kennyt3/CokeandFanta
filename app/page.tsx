'use client'
import Link from 'next/link'
import Reg from '@/components/reg'
import Form from '@/components/form'
import Gift from '@/components/gift'
import { useAppContext } from '../context/context'
import ShowCash from '../components/showCash'
import { useEffect } from 'react'
export default function Home() {
  useEffect(() => {
    setShowForm(false)
    setShowGift(false)
  }, [])
  const {
    showCash,
    setShowCash,
    showWish,
    setShowWish,
    showForm,
    setShowForm,
    showGift,
    setShowGift,
  } = useAppContext()
  return (
    <main className='main_body'>
      {showGift ? <Gift /> : showForm ? <Form /> : <Reg />}
      {/* <ShowCash /> */}
    </main>
  )
}
