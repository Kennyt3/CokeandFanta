import { useAppContext } from '@/context/context'
import { IoMdClose } from 'react-icons/io'
import Account from './account'
export default function ShowCash() {
  const { setShowCash, setShowWish } = useAppContext()
  return (
    <div className='popUp'>
      <div className='cashBox'>
        <button className='close' onClick={() => setShowCash(false)}>
          <IoMdClose />
        </button>
        <h3>Account Details</h3>
        <Account />
      </div>
    </div>
  )
}
