import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

function FloatingActions() {
  return (
    <div className="floating-actions">
      <a
        className="whatsapp-action"
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={20} />
      </a>
      <a className="call-action" href="tel:+919876543210" title="Call MK Fitness">
        <FaPhoneAlt size={18} />
      </a>
    </div>
  )
}

export default FloatingActions
