'use client'
import Link from 'next/link'
import Reg from '@/components/reg'
import Form from '@/components/form'
import { useAppContext } from '../context/context'
import { useEffect } from 'react'
export default function Home() {
  useEffect(() => {
    setShowForm(false)
  }, [])
  const { showForm, setShowForm } = useAppContext()
  return <main>{showForm ? <Form /> : <Reg />}</main>
}
