import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

import PhoneNumber from './components/PhoneNumber/PhoneNumber'
import Header from './components/Header/Header.jsx'
import FormToAddNumber from './components/FormToAddNumber/FormToAddNumber'
import Notification from './components/Notification/Notification'

function App() {
  const [phoneNumbers, setPhoneNumbers] = useState([])
  const [textOfNotification, setTextOfNotification] = useState('')
  async function changeDataWithServerInfo() {
    const promise = axios.get(import.meta.env.VITE_URL_GET_PHONE_NUMBERS)
    promise.then(response => {
      setPhoneNumbers(response.data)
      return
    }).catch((error) => {
      console.log(error)
    })
  }
  function updateList() {
    changeDataWithServerInfo()
  }
  function showNotification(text) {
    setTextOfNotification(text)
    setTimeout(() => {
      setTextOfNotification('')
    }, 1900)
  }
  useEffect(() => {
    changeDataWithServerInfo()
  }, [])
  return (
    <main className="App">
      <Header />
      <section className="phoneNumbers">
        {phoneNumbers.map(phone => <PhoneNumber key={phone.id + phone.name} phone={phone} updateList={() => updateList()} showNotification={(text) => showNotification(text)} />)}
      </section>
      <FormToAddNumber updateList={() => updateList()} showNotification={(text) => showNotification(text)} />
      {textOfNotification !== ''
        ? <Notification text={textOfNotification} />
        : ''
      }
    </main>
  )
}

export default App
