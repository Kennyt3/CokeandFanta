'use client'
import React, {
  useReducer,
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from 'react'
const AppContext = createContext()
const AppProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false)
  const [showGift, setShowGift] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [showCash, setShowCash] = useState(false)
  const [showWish, setShowWish] = useState(false)
  return (
    <AppContext.Provider
      value={{
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
        showCash,
        setShowCash,
        showWish,
        setShowWish,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export default AppProvider
