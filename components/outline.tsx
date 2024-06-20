'use client'
import React from 'react'
import { Flower } from './design'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Outline() {
  interface outline {
    title: string
    date: string
    time: string
    venue: string
  }

  const outline: outline[] = [
    {
      title: 'Our Introduction',
      date: 'Sat Sep 14 2024',
      time: '08:00 AM',
      venue: 'Assigned engagement venue',
    },
    {
      title: 'Our Introduction',
      date: 'Sat Sep 14 2024',
      time: '08:00 AM',
      venue: 'Assigned engagement venue',
    },
    {
      title: 'Our Introduction',
      date: 'Sat Sep 14 2024',
      time: '08:00 AM',
      venue: 'Assigned engagement venue',
    },
  ]

  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
    }),
      []
  })

  return (
    <div className='outline'>
      <div>
        {outline.map((e, index) => (
          <div
            className='outline-item'
            key={index}
            data-aos='slide-yo'
            data-aos-duration='500'
            data-aos-easing='ease-in'
            data-aos-mirror='true'
            data-aos-once='false'
            data-aos-anchor-placement='top-bottom'
          >
            <div>
              <Flower />
            </div>
            <h3>{e.title}</h3>
            <p>{e.date}</p>
            <p>{e.time}</p>
            <span>{e.venue}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
