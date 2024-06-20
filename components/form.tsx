import Link from 'next/link'
import Image from 'next/image'
import Telcode from './telcode'
import { useEffect, useRef } from 'react'
import { useAppContext } from '../context/context'
import emailjs from '@emailjs/browser'
import { STDCard } from './design'

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

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(firstName, lastName)

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
    e.target.reset()
    setShowForm(false)
    setShowGift(true)
  }
  return (
    <div className='container'>
      <div className='bg_img top_left'>
        <Image
          src='/designs/flowers2.webp'
          width={500}
          height={500}
          alt='background image bottom'
        />
      </div>
      <div className='main_body'>
        <div className='dubcol_container'>
          <div className='form_left'>
            <STDCard />
          </div>
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
        </div>
      </div>
      <div className='bg_img bottom_right'>
        <Image
          src='/designs/flowers2.webp'
          width={500}
          height={500}
          alt='background image bottom'
        />
      </div>
    </div>
  )
}
