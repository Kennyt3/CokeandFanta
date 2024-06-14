import { useAppContext } from '../context/context'
export default function ShowCash() {
  const { showForm, setShowForm, showGift, setShowGift, showCash } =
    useAppContext()
  return (
    <div className={!showCash ? 'popUp' : 'hidden'}>
      <div className='bg-white'>Hello world</div>
    </div>
  )
}
