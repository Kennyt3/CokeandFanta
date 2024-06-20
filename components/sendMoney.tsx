import { useAppContext } from '@/context/context'
export default function SendMoney() {
  const { setShowCash, setShowWish } = useAppContext()
  return (
    <button
      onClick={() => {
        setShowCash(true)
        setShowWish(false)
      }}
    >
      <span>Send Money</span>
    </button>
  )
}
