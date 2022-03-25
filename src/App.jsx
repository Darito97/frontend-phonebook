import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

import PhoneNumber from './components/PhoneNumber/PhoneNumber'
import Header from './components/Header/Header.jsx'
import FormToAddNumber from './components/FormToAddNumber/FormToAddNumber'

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
      <Header />
      <section className="phoneNumbers">
        {phoneNumbers.map(phone => <PhoneNumber key={phone.id + phone.name} phone={phone} />)}
      </section>
      <FormToAddNumber />
    </main>
  )
}

export default App
