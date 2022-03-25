import './FormToAddNumber.css'
import { useState } from 'react'

function FormToAddNumber() {
  const [isClose, setIsClose] = useState(true)
  function submit(e) {
    e.preventDefault()
    setIsClose(!isClose)
  }
  return (
    <form className='form' onSubmit={e => submit(e)}>

      <button className={isClose ? 'form__button' : 'form__button form__button-open'} type='submit'>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
      </button>

    </form>
  )
}

export default FormToAddNumber