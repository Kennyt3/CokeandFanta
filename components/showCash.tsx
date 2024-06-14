import { useAppContext } from '../context/context'
export default function ShowCash() {
  const { showForm, setShowForm, showGift, setShowGift, showCash } =
    useAppContext()
  return (
    <div className='popUp'>
      <div className='text-red-400'>Hello world</div>
    </div>
  )
}
