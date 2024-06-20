import { useAppContext } from '@/context/context'
import { IoMdClose } from 'react-icons/io'
import Account from './account'
export default function ShowCash() {
  const { setShowCash, setShowWish } = useAppContext()
  return (
    <div className='open'>
      <div>
        <button className='close' onClick={() => setShowCash(false)}>
          <IoMdClose />
        </button>
        <div className='cashBox'>
          <h3>Account Details</h3>
          <Account />
        </div>
      </div>
    </div>
  )
}
