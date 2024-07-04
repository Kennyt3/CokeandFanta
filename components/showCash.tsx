import { useAppContext } from '@/context/context'
import { IoMdClose } from 'react-icons/io'
import Account from './account'
import { usePathname } from 'next/navigation'
export default function ShowCash() {
  const { setShowCash, setShowGCash, setShowGWish, page, price } =
    useAppContext()
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className='open'>
      <div>
        <button
          className='close'
          onClick={() => {
            setShowCash(false)
            pathname === '/gift' && setShowGCash(false)
            pathname === '/gift' && price.length >= 1 && setShowGWish(true)
          }}
        >
          <IoMdClose size={25} />
        </button>
        <Account />
      </div>
    </div>
  )
}
