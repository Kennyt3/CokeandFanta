'use client'
import Link from 'next/link'
import Reg from '@/components/reg'
import Form from '@/components/form'
import Gift from '@/components/gift'
import { useAppContext } from '../context/context'
import { useEffect } from 'react'
export default function Home() {
  useEffect(() => {
    setShowForm(false)
    setShowGift(false)
  }, [])
  const { showForm, setShowForm, showGift, setShowGift } = useAppContext()
  return <main>{!showGift ? <Gift /> : showForm ? <Form /> : <Reg />}</main>
}
