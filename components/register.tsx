import Image from 'next/image'
import { STDCard } from './design'
import Form from './form'
import Link from 'next/link'
import BgImg from '@/public/engagement/coke4.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Register() {
  return (
    <div className='bg-container form'>
      <div className='bg-image-container'>
        <span>
          <Image src={BgImg} fill alt='couple-image' className='image'></Image>
        </span>
      </div>

      <div className='bg-form-container'>
        <div className='dubcol_container'>
          <div className='form_left'>
            <STDCard />
          </div>
          <Form />
        </div>
      </div>
    </div>
  )
}
