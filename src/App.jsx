import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

import PhoneNumber from './components/PhoneNumber/PhoneNumber'

function App() {
  const [phoneNumbers, setPhoneNumbers] = useState([])
  async function changeDataWithServerInfo() {
    const promise = axios.get(import.meta.env.VITE_SERVER + '/api/phonenumbers')
    promise.then(response => {
      setPhoneNumbers(response.data)
      return
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    changeDataWithServerInfo()
  }, [])
  return (
    <main className="App">
      {phoneNumbers.map(phone => <PhoneNumber phone={phone} />)}
    </main>
  )
}

export default App
