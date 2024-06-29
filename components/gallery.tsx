import { Gallery } from 'react-grid-gallery'
import Link from 'next/link'
export default function PicGallery() {
  const photos = [
    {
      src: '/engagement/coke3.jpg',
      width: 500,
      height: 600,
    },
    {
      src: '/engagement/coke2.jpg',
      width: 500,
      height: 700,
    },
    {
      src: '/engagement/coke1.jpg',
      width: 200,
      height: 300,
    },
    {
      src: '/engagement/coke4.jpg',
      width: 2500,
      height: 3500,
    },
    {
      src: '/engagement/coke5.jpg',
      width: 2500,
      height: 3500,
    },
    {
      src: '/engagement/coke6.jpg',
      width: 2500,
      height: 3500,
    },
  ]
  return (
    <div>
      <Gallery images={photos} rowHeight={700} />
      <div className='gallery-button'>
        <Link href='/photos' target='_blank'>
          <button className='gallery_button'>
            <span>View Photobook</span>
          </button>
        </Link>
      </div>
    </div>
  )
}
