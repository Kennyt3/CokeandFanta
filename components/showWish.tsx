import { useAppContext } from '@/context/context'
import { IoMdClose } from 'react-icons/io'
import Wish from './wish'
export default function ShowWish() {
  const { setShowCash, setShowWish } = useAppContext()
  return (
    <div className='open'>
      <div>
        <button className='close' onClick={() => setShowWish(false)}>
          <IoMdClose size={30} />
        </button>
        <div className='wishBox'>
          <h3>Wedding Wishlist</h3>
          <div className=''>
            <Wish />
          </div>
        </div>
      </div>
    </div>
  )
}
