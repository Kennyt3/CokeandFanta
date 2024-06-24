import { PiCheersThin } from 'react-icons/pi'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export default function Story() {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      anchorPlacement: 'top-center',
    }),
      []
  })
  return <div className='storyBox'></div>
}
