import Link from 'next/link'
import Image from 'next/image'
import Telcode from './telcode'
import { useEffect, useRef } from 'react'
import { useAppContext } from '../context/context'
import emailjs from '@emailjs/browser'
import { STDCard } from './design'
import * as XLSX from 'xlsx'
// import { saveAs } from 'file-saver'
export default function Form() {
  const {
    showForm,
    setShowForm,
    showGift,
    setShowGift,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    telephone,
    setTelephone,
  } = useAppContext()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log(firstName, lastName)

    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbzFY8eoQX-23zH-7yidUfJtzyWkOOtFEw6kqNhimKv7Bjmy0jv-oIgJt_6FHyz6cJyK/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, telephone }),
      }
    )
    const data = await response.json()
    console.log(data)
    // emailjs
    //   .send(
    //     'service_qgo4bdj',
    //     'wedding_form',
    //     { firstName, lastName, email, telephone },
    //     'cRQmou1HpEeCnEv5T'
    //   )
    //   .then(
    //     (result: any) => {
    //       console.log(result.text)
    //     },
    //     (error: any) => {
    //       console.log(error.text)
    //     }
    //   )
    e.target.reset()
    setShowForm(false)
    setShowGift(true)
  }
  return (
    <form action='' className='regForm' onSubmit={handleSubmit}>
      <div className='regForm_Input'>
        <label htmlFor='firstName'>First Name</label>
        <div>
          <input
            name='firstName'
            type='text'
            required
            placeholder='Enter First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
      </div>
      <div className='regForm_Input'>
        <label htmlFor='lastName'>Last Name</label>
        <div>
          <input
            name='lastName'
            type='text'
            required
            placeholder='Enter Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className='regForm_Input'>
        <label htmlFor='email'>Email</label>
        <div>
          <input
            name='email'
            type='text'
            required
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <Telcode />
      <button className='regForm_button'>
        <span className=''>Become a Guest</span>
      </button>
    </form>
  )
}
