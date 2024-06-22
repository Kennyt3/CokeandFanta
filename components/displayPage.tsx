import { IoMdClose } from 'react-icons/io'
import Account from './account'
import { useAppContext } from '@/context/context'
import Image from 'next/image'
import { STDCard } from './design'
import Invitation from './invitation'
import Wish from './wish'
import Form from './form'
export default function DisplayPage() {
  const { setDisplayPage, setPage, page } = useAppContext()
  return (
    <div className='open' onClick={() => setDisplayPage(false)}>
      <div>
        <button className='close'>
          <IoMdClose size={25} />
        </button>
        {page === 'invite' && <Invitation />}
        {page === 'wishlist' && <Wish />}
        {page === 'cash' && <Account />}
        {/* {page === 'message' && <Form />} */}
      </div>
    </div>
  )
}
