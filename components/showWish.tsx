import { useAppContext } from '@/context/context'
import { IoMdClose } from 'react-icons/io'
import Wish from './wish'
import { usePathname } from 'next/navigation'
export default function ShowWish() {
  const { setShowWish, setShowGWish, setPrice, page } = useAppContext()
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className='open'>
      <div>
        <button
          className='close'
          onClick={() => {
            pathname === '/gift' && setShowGWish(false)
            pathname === '/gift' && setPrice('')
            setShowWish(false)
          }}
        >
          <IoMdClose size={25} />
        </button>
        <Wish />
      </div>
    </div>
  )
}
