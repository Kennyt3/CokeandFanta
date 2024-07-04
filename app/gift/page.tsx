'use client'
import Reg from '@/components/reg'
import Form from '@/components/register'
import Gift from '@/components/gift'
import { useAppContext } from '@/context/context'
import ShowCash from '@/components/showCash'
import ShowWish from '@/components/showWish'
import { useEffect } from 'react'
export default function Gifty() {
  useEffect(() => {
    setShowForm(false)
    setShowGift(false)
    setShowWish(false)
  }, [])
  const {
    showGCash,
    showGWish,
    showForm,
    price,
    setShowForm,
    setShowWish,
    showGift,
    setShowGift,
  } = useAppContext()

  return (
    <main>
      <Gift />
      {showGCash && <ShowCash />}
      {showGWish && <ShowWish />}
    </main>
  )
}
