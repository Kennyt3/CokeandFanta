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
          href='https://mercy-taiwo.vercel.app'
          target='_blank'
          rel='noreferrer'
        >
          <GiDiamondRing />
        </a>{' '}
        by
        <a
          href='https://mercy-taiwo.vercel.app'
          target='_blank'
          rel='noreferrer'
        >
          Kennycode
        </a>
      </footer>
    </div>
  )
}
