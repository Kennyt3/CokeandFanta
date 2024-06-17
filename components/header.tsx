import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='header-container'>
      <header className='header'>
        <Link href='/'>
          <div>
            <Image
              src='/designs/flowers3.jpg'
              width={40}
              height={40}
              alt='background image bottom'
            />
          </div>
          <h3>Dorcas and Emmanuel</h3>
          {/* <h3>The Coke and Fanta Affair</h3> */}
        </Link>
      </header>
    </div>
  )
}
