import Link from 'next/link'
import Image from 'next/image'
import Telcode from './telcode'
import { useEffect, useRef, useState } from 'react'
import { useAppContext } from '../context/context'
import emailjs from '@emailjs/browser'
import { STDCard } from './design'
import * as XLSX from 'xlsx'
// import { saveAs } from 'file-saver'
export default function Form() {
  const [clear, setClear] = useState(false)
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
    let Name = firstName
    let Email = email
    let Last = lastName
    let Phone = telephone
    setClear(true)
    const response = await fetch('api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Name, Last, Email, Phone }),
    })
    const data = await response.json()
    emailjs
      .send(
        'service_qgo4bdj',
        'wedding_form',
        { firstName, lastName, email, telephone },
        'cRQmou1HpEeCnEv5T'
      )
      .then(
        (result: any) => {
          console.log(result.text)
        },
        (error: any) => {
          console.log(error.text)
        }
      )
    emailjs
      .send(
        'service_6hro5uf',
        'doyin_form',
        { firstName, lastName, email, telephone },
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
    setShowForm(false)
    setShowGift(true)
    setClear(false)
  }

  const dont = (e: any) => {
    e.preventDefault()
  }
  return (
    <form action='' className='regForm' onSubmit={clear ? dont : handleSubmit}>
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
