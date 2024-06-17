import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsEnvelopePaperHeartFill } from 'react-icons/bs'
import IconList from './iconList'

export default function Hero() {
  return (
    <div className='hero-container'>
      <div className='floater-container'>
        <IconList />
      </div>
    </div>
  )
}
