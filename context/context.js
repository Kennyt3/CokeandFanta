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
  const [displayPage, setDisplayPage] = useState(false)
  const [showMoreG, setShowMoreG] = useState(false)
  const [showMoreB, setShowMoreB] = useState(false)
  const [showMoreS, setShowMoreS] = useState(false)
  const [message, setMessage] = useState('')

  const [page, setPage] = useState('none')
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
        displayPage,
        setDisplayPage,
        page,
        setPage,
        showMoreB,
        setShowMoreB,
        showMoreG,
        setShowMoreG,
        showMoreS,
        setShowMoreS,
        message,
        setMessage,
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
