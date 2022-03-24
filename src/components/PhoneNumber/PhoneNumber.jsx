
function PhoneNumber({ phone }) {
  const { id, name, phoneNumber } = phone;
  return (
    <article>
      <p>{name}</p>
      <p>{phoneNumber}</p>
    </article>
  )
}

export default PhoneNumber