import { IoMdClose } from 'react-icons/io'
import Account from './account'
import { useAppContext } from '@/context/context'
import Image from 'next/image'
import { STDCard } from './design'
export default function Invitation(page: any) {
  const { setDisplayPage, setPage } = useAppContext()
  return (
    <div className='display-invite-box'>
      <div>
        <STDCard />
      </div>
      <div className='display-invite-options'>
        <div>
          <button>
            <div>I&apos;m coming</div>
          </button>
        </div>
        <div>
          <button>
            <div>I&apos;m not coming</div>
          </button>
        </div>
      </div>
    </div>
  )
}
