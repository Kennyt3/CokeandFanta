import { useAppContext } from '@/context/context'
import { IoMdClose } from 'react-icons/io'
import Account from './account'
export default function ShowCash() {
  const { setShowCash, setShowWish } = useAppContext()
  return (
    <div className='open'>
      <div>
        <button className='close' onClick={() => setShowCash(false)}>
          <IoMdClose size={25} />
        </button>
        <Account />
      </div>
    </div>
  )
}
