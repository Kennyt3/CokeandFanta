'use client'

import { useAppContext } from '@/context/context'
import { GiDiamondRing } from 'react-icons/gi'
import { FaLinkedin, FaXTwitter, FaLink } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
export default function Copy() {
  const { displayPage, page } = useAppContext()
  return (
    <div>
      <footer className='copy'>
        <div>
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
        </div>
        <div>
          <a href='https://mercy-taiwo.vercel.app/' target='_blank'>
            <FaLink size={25} className='cursor-pointer' />
          </a>
          <a
            href='https://www.linkedin.com/in/mercy-taiwo-002b26131'
            target='_blank'
          >
            <FaLinkedin size={25} className='cursor-pointer' />
          </a>
          <a href='https://github.com/Kennyt3' target='_blank'>
            <FaGithub size={25} className='cursor-pointer' />
          </a>
          <a href='https://twitter.com/mercyWritesCode' target='_blank'>
            <FaXTwitter size={25} className='cursor-pointer' />
          </a>
        </div>
      </footer>
    </div>
  )
}
