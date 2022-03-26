import './Notification.css'

function Notification({ text }) {
  return (
    <div className="notification">
      <p className="notification__text">{text}</p>
    </div>
  )
}

export default Notification