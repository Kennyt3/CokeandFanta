'use client'
import Image from 'next/image'
import Link from 'next/link'
import { BsEnvelopePaperHeartFill } from 'react-icons/bs'
import IconList from './iconList'
import HeroContainer from './heroContainer'

export default function Hero() {
  return (
    <div className=''>
      <div className='floater-container'>
        <IconList />
      </div>
      <HeroContainer />
    </div>
  )
}
