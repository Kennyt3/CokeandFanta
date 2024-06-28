import { PiCheersThin } from 'react-icons/pi'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export default function Quotes() {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      anchorPlacement: 'top-center',
    }),
      []
  })
  return (
    <div className='quoteBox'>
      <div>
        <div
          className='quote-text-box'
          // data-aos='slide-ya'
          // data-aos-duration='1000'
          // data-aos-easing='ease-in'
          // data-aos-mirror='true'
          // data-aos-once='false'
          // data-aos-anchor-placement='top-center'
        >
          <div>
            <PiCheersThin size={40} />
          </div>
          <p>Let's tango our way into forever,</p>
          <p>like two intertwined souls dancing under the stars</p>
        </div>
      </div>
    </div>
  )
}
