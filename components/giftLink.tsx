import { RxExternalLink } from 'react-icons/rx'
import Link from 'next/link'
interface GiftLinkProps {
  value: string
}
const GiftLink: React.FC<GiftLinkProps> = ({ value }) => {
  return (
    <Link href={value} className='h-fit' target='_blank'>
      <RxExternalLink size={20} />
    </Link>
  )
}
export default GiftLink
