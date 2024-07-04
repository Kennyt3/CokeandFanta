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
  }, [])

  const { showGCash, showGWish, showForm, setShowForm, showGift, setShowGift } =
    useAppContext()
  console.log(showGCash, showGWish)
  return (
    <main>
      <Gift />
      {showGCash && <ShowCash />}
      {showGWish && <ShowWish />}
    </main>
  )
}
