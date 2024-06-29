import Link from 'next/link'
import Image from 'next/image'
import Telcode from './telcode'
import { useEffect, useRef } from 'react'
import { useAppContext } from '../context/context'
import emailjs from '@emailjs/browser'
import { STDCard } from './design'
import { AiOutlinePushpin } from 'react-icons/ai'
export default function Marquee() {
  const message = [
    { message: 'congrats 🎉' },
    { message: 'Woow! It is happpening cheers 🎉' },
    { message: 'Your home is blessed 🎉' },
    { message: 'You are moving up the ranks bro congrats 🎉' },
    { message: 'congrats 🎉' },
    { message: 'congrats 🎉' },
  ]
  return (
    <div>
      <div className='marquee-container'>
        <div>
          <div className='marquee'>
            <div dir='rtl' className='rtl'>
              {message.map((e, index) => (
                <div className='marquee-box'>
                  <div>
                    <AiOutlinePushpin size={35} key={index} />
                  </div>
                  <p>{e.message}</p>
                </div>
              ))}
            </div>
            <div className='rtl'>
              {message.map((e, index) => (
                <div className='marquee-box' key={index}>
                  <div>
                    <AiOutlinePushpin size={35} />
                  </div>
                  <p>{e.message}</p>
                </div>
              ))}
            </div>
            <div dir='rtl' className='rtl'>
              {message.map((e, index) => (
                <div className='marquee-box' key={index}>
                  <div>
                    <AiOutlinePushpin size={35} />
                  </div>
                  <p>{e.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
