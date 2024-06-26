import { useAppContext } from '@/context/context'
import { IoMdClose } from 'react-icons/io'
import Wish from './wish'
export default function ShowWish() {
  const { setShowCash, setShowWish } = useAppContext()
  return (
    <div className='open'>
      <div>
        <button className='close' onClick={() => setShowWish(false)}>
          <IoMdClose size={25} />
        </button>
        <Wish />
      </div>
    </div>
  )
}
