'use client'

import { useEffect } from 'react'
import { Gallery } from 'react-grid-gallery'
export default function Photos() {
  const photos = [
    {
      src: '/engagement/coke3.jpg',
      width: 500,
      height: 600,
    },
    {
      src: '/engagement/coke2.jpg',
      width: 500,
      height: 700,
    },
    {
      src: '/engagement/coke1.jpg',
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
    <main>
      <Gallery images={photos} rowHeight={700} />
    </main>
  )
}
