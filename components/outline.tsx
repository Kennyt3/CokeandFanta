import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Flower } from './design'

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

  return (
    <div className='outline'>
      <div>
        {outline.map((e, index) => (
          <div className='outline-item' key={index}>
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
