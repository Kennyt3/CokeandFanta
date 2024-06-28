import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'
import { useAppContext } from '@/context/context'
import DisplayPage from './displayPage'

interface story {
  image: string
  title: string
  article: string
}
const story: story[] = [
  {
    image: '/engagement/emmyt2.jpg',
    title: 'Groom',
    article:
      "Before I knew you, I heard your voice. How I heard your voice that day and approached you afterwards still amazes me; well I guess God amplified your voice for me to hear as it all began in the church(Love and Peace, Moro, Ife). I couldn’t get an Educational degree from Obafemi Awolowo University, but I got something that would last me for the rest of my days, a love degree. Na school dey send me, na fine girl I go dey meet😂😂. It has been 9years of an amazing friendship with you, 4 years of the best journey with you as my partner; I will forever be grateful I took that bike from my Grandma’s place at Ifako to your father's house, wearing knicker shorts, which I didn’t even know I had on until I got to your father’s gate😂, it’s the boldness of asking you out in your father’s living room for me😂( Na bible I follow, “for God has not given me the spirit of fear…) As we get on this journey to forever, I promise to stay dedicated to loving and caring for you, holding hands to build our home with God at the centre of it. My fine girl, the love no choke, but allows for a breath of fresh air.",
  },
  {
    image: '/engagement/dorcas.jpg',
    title: 'Bride',
    article:
      'My Story It was hard not to notice My Coca-Cola ,as He is a vibrant soul always giving steps in the Choir department. I believe I met Emmanuel during my Pre-degree days precisely at the RCCG Love & Peace Parish at Moro campus of OAU after a Sunday service. He heard me talking about my secondary school and walked up to me to confirm what he heard , now that I look back it was probably a pick up line if you know what I mean. We had like a quick conversation, I believe we exchanged contacts and apparently we kept in touch. Fast forward to me finding out that we have a mutual friend from my secondary school, and then we all met as friends in my Father’s house which was totally unplanned but for some reason I was feeling shy though… We spent a Christmas or a new year together still as friends. Mind you we were both feeling different people at the time I was supposedly in a serious relationship and he liked somebody else at the point yet we found ourselves talking about our future together, well it all makes sense now. During our friendship, he was and still is a genuine friend that cares a lot about me whom I referred to as “a family man”, he counseled me and pushed me to be a better version of myself which might sound a bit cliche but it is what it is. Years of friendship, we both later found out we were now single. And then came Covid and I could see that I was definitely feeling something but as the hard girl that I am, I refused to acknowledge that feeling, but also praying at the same time you get. My Birthday came and he surprised me with his presence, a cake and a gift, at that point my Mum was seeing what I did not acknowledge. I dissed it and was still praying. He later on told me how he felt, which was mutual. Daily kept on telling me about his feelings and one day I insisted on him proclaiming his love to my face. He did so the exact same day without planning an outfit or the likes (he realized his outfit when he arrived at my fathers gate but too late to go back), came in and my parent gave us space to talk and boom it was like a proposal and I said “yes”. Cheers to saying “yes” again 3 years later. I Love you 🌞 . I believe this is something GOD has been cooking for over 10 years. The Bible says before I formed thee, I knew thee and it shows every second of our relationship. I Thank God for Bringing you to me today, tomorrow and always.',
  },
]

export default function Story() {
  const {
    setShowMoreB,
    setShowMoreG,
    setDisplayPage,
    setShowMoreS,
    displayPage,
  } = useAppContext()
  useEffect(() => {
    setShowMoreB(false)
    setShowMoreG(false)
  }, [])
  return (
    <div className='storyBox'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {story.map((e, index) => (
          <SwiperSlide className='story-container' key={index}>
            <div className=''>
              <div>
                <div className='columnBox'>
                  <div className=''>
                    <span>
                      <Image src={e.image} fill alt='groom' className='img' />
                    </span>
                  </div>
                  <div className=''>
                    <p>{e.title}</p>
                    <article>{e.article}</article>
                    <button
                      onClick={() => {
                        setDisplayPage(true)
                        setShowMoreS(true)
                        e.title === 'Bride'
                          ? setShowMoreB(true)
                          : e.title === 'Groom'
                          ? setShowMoreG(true)
                          : ''
                      }}
                    >
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
        ))}
      </Swiper>
      <div></div>
    </div>
  )
}
