import Image from 'next/image'
import Link from 'next/link'
import BgImg from '@/public/engagement/cokey.jpg'
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
    <div className='bg-container'>
      <div className='bg-image-container'>
        <span>
          <Image src={BgImg} fill alt='couple-image' className='image'></Image>
        </span>
      </div>
      <div
        className='bg-text-container'
        data-aos='slide-ya'
        data-aos-duration='1000'
        data-aos-easing='ease-in'
        data-aos-mirror='true'
        data-aos-once='false'
        data-aos-anchor-placement='top-center'
      >
        <div>
          <h5>Dorcas Weds Emmanuel</h5>
          <p>#CokeandFantaSeries</p>
          <div className='bg-button-container'>
            <div>
              <Link href='/register' target='_blank'>
                <span>RSVP</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='shadow'></div>
    </div>
  )
}
