'use client'

import { useAppContext } from '@/context/context'
import { GiDiamondRing } from 'react-icons/gi'
export default function Copy() {
  const { displayPage, page } = useAppContext()
  return (
    <div>
      <footer className='copy'>
        Made
        <a
          href='https://cokeandfanta.vercel.app'
          target='_blank'
          rel='noreferrer'
        >
          <GiDiamondRing size={30} style={{ color: '#ba9ed1' }} />
        </a>{' '}
        by
        <a
          href='https://mercy-taiwo.vercel.app'
          target='_blank'
          rel='noreferrer'
          className='underline'
        >
          Kennycode
        </a>
      </footer>
    </div>
  )
}
