import { DiVim } from 'react-icons/di'
import CopyButton from './copyButton'

interface Account {
  name: string
  details: string
}
export const account: Account[] = [
  { name: 'Account Number', details: '0711336519' },
  { name: 'Bank Name', details: 'Access Bank' },
  { name: 'Currency', details: 'Naira' },
  { name: 'Beneficiary Name', details: 'Omoyajowo Doyinsola' },
]

export default function Account() {
  return (
    <div className='accountBox'>
      <h3>Account Details</h3>
      <ul className='account-container'>
        {account.map((e, index) => {
          return (
            <li key={index}>
              <div>
                <h5>{e.name}</h5>
              </div>
              <div>
                <p>{e.details}</p>
                <CopyButton value={e.details} />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
