import Link from 'next/link'
import Image from 'next/image'
import { useAppContext } from '../context/context'
import { STDCard } from './design'
export default function Reg() {
  const { showForm, setShowForm } = useAppContext()
  return (
    <div className='container'>
      <div className='bg_img top_left'>
        <Image
          src='/designs/flowers2.webp'
          width={500}
          height={500}
          alt='background image bottom'
        />
      </div>
      <div className='main_body'>
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
      <div className='bg_img bottom_right'>
        <Image
          src='/designs/flowers2.webp'
          width={500}
          height={500}
          alt='background image bottom'
        />
      </div>
    </div>
  )
}
