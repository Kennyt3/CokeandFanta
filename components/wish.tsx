import GiftLink from './giftLink'
import SendMoney from './sendMoney'

interface WishList {
  gift: string
  price: string
  link: string
}
export const wish: WishList[] = [
  {
    gift: 'Washing Machine',
    price: 'N700,000',
    link: 'https://www.jumia.com.ng/bruhm-bwt-080h-8kg-washine-machine-325479378.html',
  },
  { gift: 'Refrigerator', price: 'N400,000', link: '' },
  { gift: 'A trip to Monaco', price: 'N1, 000,000', link: '' },
  { gift: 'Beneficiary Name', price: '', link: '' },
]

export default function Wish() {
  return (
    <div className='wishBox'>
      <h3>Wedding Wishlist</h3>
      <div className=''>
        <div className='wish-container'>
          <div>
            <ul>
              {wish.map((e, index) => {
                return (
                  <li key={index} className='wish-item'>
                    <div>
                      <div>
                        <p>{e.gift}</p>
                        <h4>{e.price}</h4>
                      </div>
                    </div>
                    <div>
                      <div>
                        <SendMoney />
                        {e.link.length >= 1 && <GiftLink value={e.link} />}
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
