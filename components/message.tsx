'use client'

import { useAppContext } from '@/context/context'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
export default function Message() {
  const { showMoreB, showMoreG } = useAppContext()
  const [warning, setWarning] = useState(false)
  const {
    message,

    setMessage,
  } = useAppContext()
  const handleSubmit = (e: any) => {
    e.preventDefault()

    emailjs
      .send('service_6hro5uf', 'message_form', { message }, 'oJDi6VCsC3ODt00Ul')
      .then(
        (result: any) => {
          console.log(result.text)
        },
        (error: any) => {
          console.log(error.text)
        }
      )
    e.target.reset()
    setMessage('')
  }
  return (
    <div className='message'>
      <div>
        <h1>Write to Dorcas and Emmanuel</h1>
      </div>
      <form action='' onSubmit={handleSubmit}>
        <div>
          <textarea
            placeholder='Type your message here'
            name=''
            id=''
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <p>Max: 240 words</p>
          {warning && <span>Message cannot be longer than 240 word</span>}
        </div>
        <div>
          <div>
            <button className='regForm_button'>
              <span>Send Message</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
