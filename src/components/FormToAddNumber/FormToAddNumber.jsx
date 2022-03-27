import './FormToAddNumber.css'
import { useState, useRef, createRef } from 'react'
import axios from 'axios'
import addIcon from '../../resources/icons/add.svg'

function FormToAddNumber({ updateList, showNotification }) {
  const [isClose, setIsClose] = useState(true)
  const boxForm = createRef()
  function submit(e) {
    e.preventDefault()
    addNewNumber()
    if (nameInput !== '' && numberInput !== '') {
      closeOrOpen()
    }
  }
  function addNewNumber() {
    axios.post(import.meta.env.VITE_URL_POST_PHONE_NUMBER, {
      name: nameInput,
      phoneNumber: numberInput
    }).then(res => {
      updateList()
      showNotification('Se agrego correctamente')
    }).catch(error => {
      showNotification('Ocurrio un error')
    })
  }
  function closeOrOpen() {
    if (!isClose) {
      boxForm.current.classList.remove('fadeUp')
      boxForm.current.classList.add('fadeDown')
      setTimeout(() => {
        setIsClose(true)
      }, 300)
    }
    else {
      setIsClose(false)
    }
  }

  const [nameInput, setNameInput] = useState('')
  const [numberInput, setNumberInput] = useState('')

  return (
    isClose ?
      <button className='button--open' onClick={() => closeOrOpen()}>
        <img className='button--open__add-icon' src={addIcon} alt="add icon" />
      </button>
      :
      <div ref={boxForm} className='content--form fadeUp'>
        <div className='content--form__close--button--box'>
          <button className='close--button--box__close--button' onClick={() => closeOrOpen()}>
            <img className='close--button__add-icon' src={addIcon} alt="add icon" />
          </button>
        </div>
        <form className='content--form__form' onSubmit={e => submit(e)}>
          <section className='form__input--section'>
            <label className='input--section__label' htmlFor="name">Nombre de contacto:</label>
            <input className='input--section__input' onChange={(input) => setNameInput(input.target.value)} value={nameInput} name='name' type='text' placeholder='Ingresa el nombre' minLength='1' />
            {nameInput === '' ? <span className='input--section__span'>*Rellena este campo</span> : null}
          </section>
          <section className='form__input--section'>
            <label className='input--section__label' htmlFor="number">Numero:</label>
            <input className='input--section__input' onChange={(input) => setNumberInput(input.target.value)} value={numberInput} name='number' type='number' placeholder='Ingresa el numero' minLength='6' maxLength='13' />
            {numberInput === '' ? <span className='input--section__span'>*Rellena este campo</span> : null}
          </section>
          <button className='form__button--submit' type='submit'>
            Agregar
          </button>
        </form>
      </div>
  )
}

export default FormToAddNumber