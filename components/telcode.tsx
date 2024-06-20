import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { useAppContext } from '../context/context'
export default function Telcode() {
  const { telephone, setTelephone } = useAppContext()
  return (
    <div className='w-full'>
      <PhoneInput
        international
        placeholder='Enter phone number'
        country='NG'
        className='telinput'
        value={telephone}
        onChange={(e: any) => setTelephone(e)}
        defaultCountry='NG'
        limitMaxLength
      />
    </div>
  )
}
