import Image from 'next/image'
import Link from 'next/link'
import HeroImg from '@/public/engagement/coke5.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export default function HeroContainer() {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      anchorPlacement: 'top-center',
    }),
      []
  })
  return (
    <div className='hero-container'>
      <div className='hero-image-container'>
        <span>
          <Image
            src={HeroImg}
            fill
            alt='couple-image'
            className='image'
          ></Image>
        </span>
      </div>
      <div
        className='hero-text-container'
        data-aos='slide-ya'
        data-aos-duration='1000'
        data-aos-easing='ease-in'
        data-aos-mirror='true'
        data-aos-once='false'
        data-aos-anchor-placement='top-center'
      >
        <div>
          <h5>Dorcas Weds Emmanuel</h5>
          <p>#cokeandfanta</p>
          <div className='hero-button-container'>
            <div>
              <button>
                <span>RSVP</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='shadow'></div>
    </div>
  )
}
