import Image from 'next/image'
import Link from 'next/link'

export default function HeroContainer() {
  return (
    <div className='hero-container'>
      <div className='hero-image-container'>
        <span>
          <Image
            src='/engagement/img5.jpg'
            fill
            alt='couple-image'
            className='image'
          ></Image>
        </span>
      </div>
      <div className='hero-text-container'>
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
