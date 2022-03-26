import './PhoneNumber.css'
import axios from 'axios';

function PhoneNumber({ phone, updateList, showNotification }) {
  const { id, name, phoneNumber } = phone;

  function deletePhoneNumber() {
    axios.delete(import.meta.env.VITE_URL_DELETE_PHONE_NUMBER + id)
      .then(res => {
        updateList()
        showNotification('Se elimino exitosamente')
      })
      .catch(err => { showNotification('No se pudo eliminar') });
  }

  return (
    <article className="phone-number">
      <section className='phone-number__info-phone-number'>
        <p className="info-phone-number__name">{name}</p>
        <p className="info-phone-number__number">{phoneNumber}</p>
      </section>
      <button className='phone-number__delete-button' onClick={() => deletePhoneNumber()}>
        <svg className='delete-button__delete-icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" /></svg>
      </button>
    </article>
  )
}

export default PhoneNumber