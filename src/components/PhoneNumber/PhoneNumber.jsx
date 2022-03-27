import './PhoneNumber.css'
import axios from 'axios';
import deleteIcon from '../../resources/icons/delete.svg';

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
        <img className='delete-button__delete-icon' src={deleteIcon} alt="delete icon" />
      </button>
    </article>
  )
}

export default PhoneNumber