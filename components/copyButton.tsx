import { BsCopy, BsCheck } from 'react-icons/bs'
import { useState } from 'react'
interface CopyButtonProps {
  value: string
}
const CopyButton: React.FC<CopyButtonProps> = ({ value }) => {
  const [copied, setCopied] = useState(false)
  const handleClick = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button onClick={handleClick}>
      {copied ? (
        <BsCheck className='check-icon' size={24} />
      ) : (
        <BsCopy className='copy-icon' size={16} />
      )}
    </button>
  )
}
export default CopyButton
