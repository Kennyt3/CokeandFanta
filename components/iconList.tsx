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
interface iconList {
  icon: React.ReactElement
  element: string
}
export const icon: iconList[] = [
  {
    icon: <BsEnvelopePaperHeartFill className='icon' size={20} />,
    element: 'Invitation',
  },
  {
    icon: <TbNotes className='icon' size={24} />,
    element: 'Wishlist',
  },
  {
    icon: <PiMoneyWavy className='icon' size={24} />,
    element: 'Cash Gift',
  },
  {
    icon: <TiMessages className='icon' size={24} />,
    element: 'Message',
  },
]
export default function IconList() {
  useEffect(() => {
    AOS.init({
      once: true,
    }),
      []
  })
  return (
    <div
      data-aos='pop-ya'
      data-aos-duration='1000'
      data-aos-delay='500'
      data-aos-easing='ease-in'
      data-aos-once='true'
    >
      {icon.map((e, index) => {
        return (
          <button key={index}>
            {e.icon}
            <p>{e.element}</p>
          </button>
        )
      })}
    </div>
  )
}
