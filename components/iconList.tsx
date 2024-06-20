'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsEnvelopePaperHeartFill } from 'react-icons/bs'
import { TbNotes } from 'react-icons/tb'
import { PiMoneyWavy } from 'react-icons/pi'
import { TiMessages } from 'react-icons/ti'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useAppContext } from '@/context/context'

interface iconList {
  icon: React.ReactElement
  element: string
  page: string
}
export const icon: iconList[] = [
  {
    icon: <BsEnvelopePaperHeartFill className='icon' size={20} />,
    element: 'Invitation',
    page: 'invite',
  },
  {
    icon: <TbNotes className='icon' size={24} />,
    element: 'Wishlist',
    page: 'wishlist',
  },
  {
    icon: <PiMoneyWavy className='icon' size={24} />,
    element: 'Cash Gift',
    page: 'cash',
  },
  {
    icon: <TiMessages className='icon' size={24} />,
    element: 'Message',
    page: 'message',
  },
]
export default function IconList() {
  const { displayPage, setDisplayPage, page, setPage } = useAppContext()
  useEffect(() => {
    AOS.init({
      once: true,
      anchorPlacement: 'top-bottom',
    }),
      []
  })
  console.log(page)

  return (
    <div
      data-aos='pop-ya'
      data-aos-duration='1000'
      data-aos-delay='500'
      data-aos-easing='ease-in'
      data-aos-once='true'
      data-aos-anchor-placement='top-bottom'
    >
      {icon.map((e, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setDisplayPage(true)
              setPage(e.page)
            }}
          >
            {e.icon}
            <p>{e.element}</p>
          </button>
        )
      })}
    </div>
  )
}
