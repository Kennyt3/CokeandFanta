import { DiVim } from 'react-icons/di'
import CopyButton from './copyButton'

interface Account {
  name: string
  details: string
}
export const account: Account[] = [
  { name: 'Account Number', details: '0248004968' },
  { name: 'Bank Name', details: 'GTBank' },
  { name: 'Currency', details: 'Naira' },
  { name: 'Beneficiary Name', details: 'Taiwo Mercy' },
]

export default function Account() {
  return (
    <ul className='account-container'>
      {account.map((e, index) => {
        return (
          <li key={index}>
            <p>{e.name}</p>
            <p>{e.details}</p>
            <CopyButton value={e.details} />
          </li>
        )
      })}
    </ul>
  )
}
