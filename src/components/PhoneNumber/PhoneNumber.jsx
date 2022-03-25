import './PhoneNumber.css'

function PhoneNumber({ phone }) {
  const { id, name, phoneNumber } = phone;
  return (
    <article className="phone-number">
      <p className="phone-number__name">{name}</p>
      <p className="phone-number__number">{phoneNumber}</p>
    </article>
  )
}

export default PhoneNumber