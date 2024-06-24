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
    delay: number
  }

  const outline: outline[] = [
    {
      title: 'Our Engagement',
      date: 'Sat Sep 14 2024',
      time: '11:00 PM',
      venue: '7, Aromire Street, Harmony Estate, Itoki, Ogun State.',
      delay: 200,
    },
    {
      title: 'Our Wedding',
      date: 'Thur Sep 19 2024',
      time: '11:00 AM',
      venue: 'RCCG, City of God Zone. 34, Aromire Ave, Ikeja, Lagos.',
      delay: 350,
    },
    {
      title: 'Our Reception',
      date: 'Thur Sep 19 2024',
      time: '12:00 PM',
      venue:
        ' LUXURY PARTY EVENT CENTRE Block G, plot A2 M.K.O Abiola Gardens Road, beside Addonai Court, lkeja.',
      delay: 500,
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
            data-aos-delay={e.delay}
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
            <span className='max-w-[200px]'>{e.venue}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
