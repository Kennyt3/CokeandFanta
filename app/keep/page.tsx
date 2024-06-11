import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <div className='generalInvite_generalInvite__08o8t'>
        <div className='generalInvite_generalInvite__left__F5iBf'>
          <span
            className=' lazy-load-image-background blur lazy-load-image-loaded'
            style={{
              color: 'transparent',
              display: 'inline-block',
              height: '100%',
              width: '100%',
            }}
          >
            <img
              src='/designs/gas-left.6cd6dc04824d38fbdc60.png'
              alt='Inawo'
              width='100%'
              height='100%'
              className='generalInvite_generalInvite__left__F5iBf'
            />
          </span>
        </div>
        <div className='generalInvite_generalInvite__body__l5a9w'>
          <div className='generalInvite_generalInvite__card__1xqEr'>
            <div className='generalInvite_generalInvite__card__image__WXT1-'>
              <span
                className=' lazy-load-image-background blur lazy-load-image-loaded'
                style={{
                  color: 'transparent',
                  display: 'inline-block',
                  height: '100%',
                  width: '100%',
                }}
              >
                <img
                  // src='https://res.cloudinary.com/inawo-medias/image/upload/v1706469892/prod/o8utf3lsxyyb4rwmxm11.png?inawoHeight=3105&amp;inawoWidth=3105'
                  src='/engagement/STD2.png'
                  alt='invitationCard'
                  width='100%'
                  height='100%'
                />
              </span>
            </div>
            <Link href='/invite' className='cursor-pointer cta'>
              <span className=''>Become a Guest</span>
            </Link>
          </div>
        </div>
        <div className='generalInvite_generalInvite__right__sIsv4'>
          <span
            className=' lazy-load-image-background blur lazy-load-image-loaded'
            style={{
              color: 'transparent',
              display: 'inline-block',
              height: '100%',
              width: '100%',
            }}
          >
            <img
              src='/designs/gas-right.2cce57b688814986e36c.png'
              alt='Inawo'
              width='100%'
              height='100%'
              className='generalInvite_generalInvite__right__sIsv4'
              style={{ objectFit: 'cover' }}
            />
          </span>
        </div>
      </div>
    </main>
  )
}
