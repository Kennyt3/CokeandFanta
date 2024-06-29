import { useAppContext } from '@/context/context'
import { useState } from 'react'
export default function SendMoney() {
  const { setPage } = useAppContext()
  return (
    <button
      onClick={() => {
        setPage('cash')
      }}
    >
      <span>Send Money</span>
    </button>
  )
}
