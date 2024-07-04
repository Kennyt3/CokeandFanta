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
  ]

  const message2 = [
    {
      message:
        'I’m so happy to witness the beginning of this beautiful journey with Doyinsola and Emmanuel, you both a perfect pea in a pod🥰 Thank you for making Love beautiful and inspiring…. Congratulations 🍾',
    },
    {
      message:
        'Congratulations my school and the nurse that will take care of my school father😂😂😂❤️❤️❤️❤️😂😂😂',
    },
    {
      message:
        'Love you guys so much! Emmy T handover the baton that day❤️😂😂',
    },
    {
      message:
        "Congratulations my people. Doyinsola & Emmanuel.💍👩‍❤️‍👨 I'm so happy for you both, and I pray you enjoy a lifetime of happiness, peace and joy that comes with being with the one you love❤️",
    },
    {
      message:
        'Congratulations Doyin and Emmanuel. I’m super glad that I’ll be witnessing the beginning of this beautiful journey. I pray God bless your home and help you both achieve all your heart desires. Love you both so much❤️',
    },
  ]
  return (
    <div>
      <div className='marquee-container'>
        <div>
          <div className='marquee'>
            <div dir='rtl' className='rtl'>
              {message2.map((e, index) => (
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
            <div dir='rtl' className='rtl'>
              {message2.map((e, index) => (
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
