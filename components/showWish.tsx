import { useAppContext } from '@/context/context'
import { IoMdClose } from 'react-icons/io'
import Account from './account'
import Wish from './wish'
export default function ShowWish() {
  const { setShowCash, setShowWish } = useAppContext()
  return (
    <div className='popUp'>
      <div className='wishBox'>
        <button className='close' onClick={() => setShowWish(false)}>
          <IoMdClose />
        </button>
        <h3>Wedding Wishlist</h3>
        <Wish />
      </div>
    </div>
  )
}
