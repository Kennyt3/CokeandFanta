'use client'

import { useEffect } from 'react'
import { Gallery } from 'react-grid-gallery'
import Link from 'next/link'
export default function Photos() {
  const photos = [
    {
      src: '/engagement/coke1.jpg',
      width: 200,
      height: 200,
    },
    {
      src: '/engagement/coke2.jpg',
      width: 200,
      height: 200,
    },
    {
      src: '/engagement/coke3.jpg',
      width: 200,
      height: 200,
    },
    {
      src: '/engagement/coke4.jpg',
      width: 200,
      height: 200,
    },
    {
      src: '/engagement/coke5.jpg',
      width: 200,
      height: 200,
    },
    {
      src: '/engagement/coke6.jpg',
      width: 200,
      height: 200,
    },
    {
      src: '/engagement/coke7.jpg',
      width: 200,
      height: 200,
    },
    {
      src: '/engagement/coke8.jpg',
      width: 200,
      height: 200,
    },
    {
      src: '/engagement/coke9.jpg',
      width: 200,
      height: 200,
    },
    // {
    //   src: '/engagement/coke10.jpg',
    //   width: 200,
    //   height: 200,
    // },
    // {
    //   src: '/engagement/coke11.jpg',
    //   width: 200,
    //   height: 200,
    // },
    {
      src: '/engagement/coke12.jpg',
      width: 200,
      height: 200,
    },
  ]
  return (
    <main>
      <Gallery images={photos} margin={40} rowHeight={300} />
      <div className='gallery-button my-[40px]'>
        <Link href='/' target='_blank'>
          <button className='gallery_button'>
            <span>Back to website</span>
          </button>
        </Link>
      </div>
    </main>
  )
}
