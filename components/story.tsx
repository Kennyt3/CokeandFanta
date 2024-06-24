// import { PiCheersThin } from 'react-icons/pi'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'
// import { useEffect } from 'react'
// export default function Story() {
//   useEffect(() => {
//     AOS.init({
//       once: false,
//       mirror: true,
//       anchorPlacement: 'top-center',
//     }),
//       []
//   })
//   return (
//   )
// }
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'
import Image from 'next/image'

export default function Story() {
  return (
    <div className='storyBox'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide className='story-container'>
          <div className=''>
            <div>
              <div className='columnBox'>
                <div className=''>
                  <span>
                    <Image
                      src='/engagement/coke5.jpg'
                      fill
                      alt='groom'
                      className='img'
                    />
                  </span>
                </div>
                <div className=''>
                  <p>Groom</p>
                  <article>
                    Out of the blues I saw a request, I checked it and it was
                    this beautiful lady. I accepted it immediately and started
                    checking her TL. On the 4th of April 2016, I sent her a DM
                    and we started talking. We became really really close. Later
                    in November I asked her to be my girlfriend and here we are
                    today🥰 getting married.
                  </article>
                  <button>
                    <div>View more</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className='swiper-slide-shadow'
            style={{ opacity: 1, transitionDuration: '0ms' }}
          ></div>
        </SwiperSlide>
        <SwiperSlide className='story-container'>
          <div className=''>
            <div>
              <div className='columnBox'>
                <div className=''>
                  <span>
                    <Image
                      src='/engagement/coke5.jpg'
                      fill
                      alt='groom'
                      className='img'
                    />
                  </span>
                </div>
                <div className=''>
                  <p>Groom</p>
                  <article>
                    Out of the blues I saw a request, I checked it and it was
                    this beautiful lady. I accepted it immediately and started
                    checking her TL. On the 4th of April 2016, I sent her a DM
                    and we started talking. We became really really close. Later
                    in November I asked her to be my girlfriend and here we are
                    today🥰 getting married.
                  </article>
                  <button>
                    <div>View more</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className='swiper-slide-shadow'
            style={{ opacity: 1, transitionDuration: '0ms' }}
          ></div>
        </SwiperSlide>
      </Swiper>
      <div></div>
    </div>
  )
}
