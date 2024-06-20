import { IoMdClose } from 'react-icons/io'
import Account from './account'
import { useAppContext } from '@/context/context'
export default function DisplayPage(page: any) {
  const { setDisplayPage, setPage } = useAppContext()
  return (
    <div className='popUp' onClick={() => setDisplayPage(false)}>
      <div className='cashBox'>
        <button className='close'>
          <IoMdClose />
        </button>
        <h3>Account Details</h3>
        <Account />
      </div>
    </div>
  )
}
