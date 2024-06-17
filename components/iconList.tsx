import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsEnvelopePaperHeartFill } from 'react-icons/bs'
import { TbNotes } from 'react-icons/tb'

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
]
export default function IconList() {
  return (
    <div>
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
