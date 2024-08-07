import Link from 'next/link'
import Image from 'next/image'
import { STDCard } from './design'
import { useAppContext } from '@/context/context'
import BgImg from '@/public/engagement/cokey.jpg'
import { WishList, Cash, BottomRight, TopLeft } from './design'
export default function Gift() {
  const { setShowGCash, setShowGWish } = useAppContext()
  return (
    <div className='bg-container form'>
      <div className='bg-image-container'>
        <span>
          <Image src={BgImg} fill alt='couple-image' className='image'></Image>
        </span>
      </div>
      <div className='bg-form-container'>
        <div className='dubcol_container'>
          <div className='gift_left'>
            <STDCard />
          </div>
          <div className='gift_right'>
            <h3 className=''>
              You are now a guest at <br /> Dorcas and Emmanuel&apos;s wedding
            </h3>
            <p className=''>Show love to this lovely couple</p>
            <div className='gift_card-container'>
              <button className='gift_link' onClick={() => setShowGCash(true)}>
                <div className='gift_card'>
                  <div className=''>
                    <Cash />
                  </div>
                  <span>Send them Cash Gifts</span>
                </div>
              </button>
              <button className='gift_link' onClick={() => setShowGWish(true)}>
                <div className='gift_card'>
                  <div className=''>
                    <WishList />
                  </div>
                  <span>Tick their Wishlist</span>
                </div>
              </button>
            </div>
            <span>
              <Link href='/' target='_blank' className='underline'>
                Skip to their wedding website.
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className='shadow'></div>
    </div>
  )
}
