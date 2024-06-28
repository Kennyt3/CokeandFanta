import { Gallery } from 'react-grid-gallery'
import Link from 'next/link'
import Image from 'next/image'
import Telcode from './telcode'
import { useEffect, useRef } from 'react'
import { useAppContext } from '../context/context'
import emailjs from '@emailjs/browser'
import { STDCard } from './design'

export default function PicGallery() {
  const photos = [
    {
      src: '/engagement/coke1.jpg',
      width: 500,
      height: 600,
    },
    {
      src: '/engagement/coke2.jpg',
      width: 500,
      height: 700,
    },
    {
      src: '/engagement/coke3.jpg',
      width: 200,
      height: 300,
    },
    {
      src: '/engagement/coke4.jpg',
      width: 2500,
      height: 3500,
    },
    {
      src: '/engagement/coke5.jpg',
      width: 2500,
      height: 3500,
    },
  ]
  return (
    <div>
      <Gallery images={photos} rowHeight={500} />
    </div>
  )
}
