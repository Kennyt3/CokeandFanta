import { useAppContext } from '@/context/context'
import { useState } from 'react'
export default function SendMoney(pricey: any) {
  const { setPage, price, setPrice } = useAppContext()
  return (
    <button
      onClick={() => {
        setPage('cash')
        setPrice(pricey)
      }}
    >
      <span>Send Money</span>
    </button>
  )
}
