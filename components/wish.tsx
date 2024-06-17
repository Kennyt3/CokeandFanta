import SendMoney from './sendMoney'

interface WishList {
  gift: string
  price: string
  link: string
}
export const wish: WishList[] = [
  { gift: 'Washing Machine', price: 'N700,000', link: '' },
  { gift: 'Refrigerator', price: 'N400,000', link: '' },
  { gift: 'A trip to Monaco', price: 'N10,000,000', link: '' },
  { gift: 'Beneficiary Name', price: '', link: '' },
]

export default function Wish() {
  return (
    <ul className='wish-container'>
      {wish.map((e) => {
        return (
          <li>
            <div>
              <p>{e.gift}</p>
              <p>{e.price}</p>
            </div>
            <SendMoney />
          </li>
        )
      })}
    </ul>
  )
}
