import { useAppContext } from '@/context/context'
import { useState } from 'react'

interface SendMoneyProps {
  pricey: string
}
const SendMoney: React.FC<SendMoneyProps> = ({ pricey }) => {
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

export default SendMoney
