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
    {
      message:
        'Two souls, one heart, a journey just begun. 💞 Wishing you endless love and happiness. Congratulations! 🎉',
    },
    { message: 'Woow! It is happpening cheers 🎉' },
    {
      message:
        'May God bless your marriage and your lives together with an abundance of love and joy. 🙏💒',
    },
    {
      message:
        "Here's to a lifetime full of love and happiness. Cheers to your beautiful wedding! 🥂💍",
    },
    {
      message:
        'Congratulations on your wedding! 🎊 Wishing you a lifetime of love and happiness. 💕',
    },
    {
      message:
        'I’m so happy to witness the beginning of this beautiful journey with Doyinsola and Emmanuel, you both a perfect pea in a pod🥰 Thank you for making Love beautiful and inspiring…. Congratulations 🍾',
    },
    { message: 'congrats 🎉' },
  ]
  return (
    <div>
      <div className='marquee-container'>
        <div>
          <div className='marquee'>
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
