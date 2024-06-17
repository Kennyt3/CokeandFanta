interface WishList {
  name: string
  price: string
  details: string
}
export const wish: WishList[] = [
  { name: 'Washing Machine', price: 'N700,000', details: '0248004968' },
  { name: 'Bank Name', price: '', details: 'GTBank' },
  { name: 'Currency', price: '', details: 'Naira' },
  { name: 'Beneficiary Name', price: '', details: 'Taiwo Mercy' },
]

export default function Wish() {
  return (
    <ul className='wish-container'>
      {wish.map((e) => {
        return (
          <li>
            <div>
              <p>{e.name}</p>
              <p>{e.price}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
