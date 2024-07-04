import { useAppContext } from '@/context/context'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

interface SendMoneyProps {
  pricey: string
}

const SendMoney: React.FC<SendMoneyProps> = ({ pricey }) => {
  const pathname = usePathname()

  const {
    setPage,
    price,
    setPrice,
    setShowGCash,
    setShowGWish,
    remain,
    setRemain,
    page,
  } = useAppContext()

  return (
    <button
      onClick={() => {
        setPage('cash')
        setPrice(pricey)
        setRemain(true)
        {
          pathname === '/gift' && setShowGCash(true)
        }
        {
          pathname === '/gift' && setShowGWish(false)
        }
      }}
    >
      <span>Send Money</span>
    </button>
  )
}

export default SendMoney
