import { IoMdClose } from 'react-icons/io'
import Account from './account'
import { useAppContext } from '@/context/context'
import Image from 'next/image'
import { STDCard } from './design'
import Invitation from './invitation'
import Wish from './wish'
export default function DisplayPage() {
  const { setDisplayPage, setPage, page } = useAppContext()
  return (
    <div className='displayOpen' onClick={() => setDisplayPage(false)}>
      <div className='displayBox'>
        <button className='display-box-button'>
          <IoMdClose size={30} />
        </button>
        {page === 'invite' && <Invitation />}
        {page === 'wishlist' && <Wish />}
      </div>
    </div>
  )
}
