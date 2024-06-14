import Link from 'next/link'
import Image from 'next/image'
import { STDCard } from './design'
import { useAppContext } from '@/context/context'
import { WishList, Cash, BottomRight, TopLeft } from './design'
export default function Gift() {
  return (
    <div className='container'>
      <TopLeft />
      <div className='main_body'>
        <div className='dubcol_container'>
          <div className='gift_left'>
            <STDCard />
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
                    <WishList />
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
      <BottomRight />
    </div>
  )
}
