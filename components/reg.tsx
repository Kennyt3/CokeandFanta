import Link from 'next/link'
import Image from 'next/image'
import Form from './form'
import BgImg from '@/public/engagement/coke4.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useAppContext } from '../context/context'
import { STDCard } from './design'
export default function Reg() {
  const { showForm, setShowForm } = useAppContext()
  return (
    <div className='bg-container form'>
      <div className='bg-image-container'>
        <span>
          <Image src={BgImg} fill alt='couple-image' className='image'></Image>
        </span>
      </div>
      <div className='bg-form-container'>
        <div className='STD_container'>
          <div className='STD_card'>
            <STDCard />
          </div>
          <button
            onClick={() => setShowForm(true)}
            className='cursor-pointer cta'
          >
            <span className=''>Become a Guest</span>
          </button>
        </div>
      </div>
      <div className='shadow'></div>
    </div>
  )
}
