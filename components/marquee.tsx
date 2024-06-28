import Link from 'next/link'
import Image from 'next/image'
import Telcode from './telcode'
import { useEffect, useRef } from 'react'
import { useAppContext } from '../context/context'
import emailjs from '@emailjs/browser'
import { STDCard } from './design'

export default function Marquee() {
  return (
    <div>
      <div className='marquee-container'>
        <div>
          <div className='marquee'>
            <div dir='rtl' className='rtl'>
              <div className='marquee-box'>
                <div></div>
                <p>Congratulations</p>
              </div>
            </div>
            <div dir='rtl' className='rtl'>
              <div className='marquee-box'>
                <div></div>
                <p>Congratulations</p>
              </div>
            </div>
            <div dir='rtl' className='rtl'>
              <div className='marquee-box'>
                <div></div>
                <p>Congratulations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
