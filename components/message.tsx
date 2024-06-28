'use client'

import { useAppContext } from '@/context/context'
import { useState } from 'react'
export default function Message() {
  const { showMoreB, showMoreG } = useAppContext()
  const [warning, setWarning] = useState(false)
  return (
    <div className='message'>
      <div>
        <h1>Write to Dorcas and Emmanuel</h1>
      </div>
      <form action=''>
        <div>
          <textarea
            placeholder='Type your message here'
            name=''
            id=''
          ></textarea>
          <p>Max: 240 words</p>
          {warning && <span>Message cannot be longer than 240 word</span>}
        </div>
        <div></div>
      </form>
    </div>
  )
}
