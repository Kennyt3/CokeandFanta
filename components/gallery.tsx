import Gallery from 'react-photo-gallery'
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
      width: 4,
      height: 3,
    },
    {
      src: '/engagement/coke2.jpg',
      width: 1,
      height: 1,
    },
    {
      src: '/engagement/coke3.jpg',
      width: 3,
      height: 4,
    },
    {
      src: '/engagement/coke4.jpg',
      width: 3,
      height: 4,
    },
    {
      src: '/engagement/coke5.jpg',
      width: 3,
      height: 4,
    },
    {
      src: '/engagement/coke6.jpg',
      width: 4,
      height: 3,
    },
    {
      src: '/engagement/coke3.jpg',
      width: 3,
      height: 4,
    },
    {
      src: '/engagement/coke4.jpg',
      width: 4,
      height: 3,
    },
    {
      src: '/engagement/coke5.jpg',
      width: 4,
      height: 3,
    },
    {
      src: '/engagement/coke6.jpg',
      width: 3,
      height: 4,
    },
    {
      src: '/engagement/coke6.jpg',
      width: 4,
      height: 3,
    },
    {
      src: '/engagement/coke6.jpg',
      width: 4927,
      height: 1000,
    },
    {
      src: '/engagement/coke6.jpg',
      width: 4,
      height: 3,
    },
    {
      src: '/engagement/coke6.jpg',
      width: 4,
      height: 3,
    },
    {
      src: '/engagement/coke6.jpg',
      width: 4,
      height: 3,
    },
    {
      src: '/engagement/coke6.jpg',
      width: 4,
      height: 3,
    },
  ]
  return <Gallery photos={photos} />
}
