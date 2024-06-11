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
