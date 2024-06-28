import { IoMdClose } from 'react-icons/io'
import Account from './account'
import { useAppContext } from '@/context/context'
import Image from 'next/image'
import { STDCard } from './design'
import Invitation from './invitation'
import Wish from './wish'
import Form from './form'
import Tale from './tale'
import Message from './message'
export default function DisplayPage() {
  const {
    setDisplayPage,
    setPage,
    page,
    showMoreG,
    showMoreS,
    setShowMoreB,
    setShowMoreG,
    setShowMoreS,
  } = useAppContext()
  return (
    <div className='open'>
      <div>
        <button
          className='close'
          onClick={() => {
            setDisplayPage(false)
            setShowMoreG(false)
            setShowMoreB(false)
            setShowMoreS(false)
            setPage('none')
          }}
        >
          <IoMdClose size={25} />
        </button>
        {page === 'invite' && <Invitation />}
        {page === 'wishlist' && <Wish />}
        {page === 'cash' && <Account />}
        {page === 'message' && <Message />}
        {showMoreS ? <Tale /> : ''}
      </div>
    </div>
  )
}
