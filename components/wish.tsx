import GiftLink from './giftLink'
import SendMoney from './sendMoney'

interface WishList {
  gift: string
  price: string
  link: string
}
export const wish: WishList[] = [
  {
    gift: 'Silver Crest 6.5 Litres Capacity Airfryer',
    price: 'N55,000',
    link: 'https://www.jumia.com.ng/silver-crest-6.5-litres-capacity-airfryer-92849858.html',
  },
  {
    gift: 'Silver Crest 2 Litres German Industrial Blender (SC-2030D)',
    price: 'N45,000',
    link: 'https://www.jumia.com.ng/silver-crest-2-litres-german-industrial-blender-sc-2030d-72172768.html',
  },
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
                      </div>
                      {e.link.length >= 1 && <GiftLink value={e.link} />}
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
