import { IoMdClose } from 'react-icons/io'
import Account from './account'
import { useAppContext } from '@/context/context'
import Image from 'next/image'
import { STDCard } from './design'
import Link from 'next/link'
export default function Invitation(page: any) {
  const { setDisplayPage, setPage } = useAppContext()
  return (
    <div className='display-invite-box'>
      <div>
        <STDCard />
      </div>
      <div className='display-invite-options'>
        <div>
          <Link href='register' target='_blank'>
            <div>I&apos;m coming</div>
          </Link>
        </div>
        <div>
          <Link href='gift' target='_blank'>
            <div>I&apos;m not coming</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
