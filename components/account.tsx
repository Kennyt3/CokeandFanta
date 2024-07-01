import { DiVim } from 'react-icons/di'
import { useAppContext } from '@/context/context'
import CopyButton from './copyButton'

export default function Account() {
  const { price } = useAppContext()
  const account = [
    { name: 'Account Number', details: '0711336519' },
    { name: 'Bank Name', details: 'Access Bank' },
    { name: 'Currency', details: 'Naira' },
    { name: 'Beneficiary Name', details: 'Omoyajowo Doyinsola' },
  ]
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
        {price && (
          <li>
            <div>
              <h5>Amount:</h5>
            </div>
            <div>
              <p>{price}</p>
              <CopyButton value={price} />
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}
