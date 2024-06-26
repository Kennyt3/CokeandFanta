'use client'
import Reg from '@/components/reg'
import Form from '@/components/register'
import Gift from '@/components/gift'
import { useAppContext } from '@/context/context'
import ShowCash from '@/components/showCash'
import ShowWish from '@/components/showWish'
import { useEffect } from 'react'
export default function Register() {
  useEffect(() => {
    setShowForm(false)
    setShowGift(false)
  }, [])
  const { showCash, showWish, showForm, setShowForm, showGift, setShowGift } =
    useAppContext()
  return (
    <main>
      {showGift ? <Gift /> : showForm ? <Form /> : <Reg />}
      {showCash && <ShowCash />}
      {showWish && <ShowWish />}
    </main>
  )
}
