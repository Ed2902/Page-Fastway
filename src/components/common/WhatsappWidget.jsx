import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import WhatsappAdvisorModal from './WhatsappAdvisorModal'

export default function WhatsappWidget() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <button
        type='button'
        className='wa-fab'
        onClick={() => setOpenModal(true)}
        aria-label='Abrir WhatsApp'
      >
        <FaWhatsapp size={26} aria-hidden='true' />
      </button>

      <WhatsappAdvisorModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  )
}
