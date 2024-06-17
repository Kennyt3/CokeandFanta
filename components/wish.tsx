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
  { gift: 'A trip to Monaco', price: 'N10,000,000', link: '' },
  { gift: 'Beneficiary Name', price: '', link: '' },
]

export default function Wish() {
  return (
    <ul className='wish-container'>
      {wish.map((e, index) => {
        return (
          <li key={index}>
            <div>
              <p>{e.gift}</p>
              <p>{e.price}</p>
            </div>
            <SendMoney />
            {e.link.length >= 1 && <GiftLink value={e.link} />}
          </li>
        )
      })}
    </ul>
  )
}
