import { IoMdClose } from 'react-icons/io'
import Account from './account'
import { useAppContext } from '@/context/context'
import Image from 'next/image'
import { STDCard } from './design'
export default function DisplayPage(page: any) {
  const { setDisplayPage, setPage } = useAppContext()
  return (
    <div className='displayOpen' onClick={() => setDisplayPage(false)}>
      <div className='displayBox'>
        <button>
          <IoMdClose size={30} />
        </button>
        <div className='display-invite-box'>
          <div>
            <STDCard />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
