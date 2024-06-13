import Link from 'next/link'
import Image from 'next/image'
import Wishlist from './wishlist'
import Cash from './cash'
export default function Gift() {
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
        <div className='dubcol_container'>
          <div className='gift_left'>
            <span
              className='STD_card'
              style={{
                color: 'transparent',
                display: 'inline-block',
                height: '100%',
                width: '100%',
              }}
            >
              <img
                src='/engagement/STD3.png'
                alt='invitationCard'
                width='100%'
                height='100%'
                style={{ objectFit: 'cover' }}
              />
            </span>
          </div>
          <div className='gift_right'>
            <h3 className=''>
              You are now a guest at <br /> Dorcas and Emmanuel's wedding
            </h3>
            <p className=''>Show love to this lovely couple</p>
            <div className='gift_card-container'>
              <button className='gift_link'>
                <div className='gift_card'>
                  <div className=''>
                    <Cash />
                  </div>
                  <span>Send them Cash Gifts</span>
                </div>
              </button>
              <button className='gift_link'>
                <div className='gift_card'>
                  <div className=''>
                    <Wishlist />
                  </div>
                  <span>Tick an item off their Wishlist</span>
                </div>
              </button>
            </div>
            <span className=''>
              <Link href='/'>Skip to their wedding website.</Link>
            </span>
          </div>
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
