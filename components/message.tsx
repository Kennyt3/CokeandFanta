'use client'

import { useAppContext } from '@/context/context'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
export default function Message() {
  const [warning, setWarning] = useState(false)
  const { message, setMessage, name, setName } = useAppContext()
  const handleSubmit = (e: any) => {
    e.preventDefault()

    emailjs
      .send(
        'service_6hro5uf',
        'message_form',
        { name, message },
        'oJDi6VCsC3ODt00Ul'
      )
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
    setName('')
  }
  return (
    <div className='message'>
      <div>
        <h3>Write to Dorcas and Emmanuel</h3>
      </div>
      <form action='' onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              name='name'
              type='text'
              required
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
