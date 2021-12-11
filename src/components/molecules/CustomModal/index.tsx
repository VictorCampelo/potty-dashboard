import { Container } from './styles'
import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal'

interface CustomModal extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  buttons: boolean
  modalVisible: boolean
  setModalOpen: () => void
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    color: '#000000',
    borderRadius: '30px',
    border: 'none',
    boxShadow: '0px 0px 20px rgba(54, 63, 78, 0.2)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(5px)',
    zIndex: 1000
  }
}

const CustomModal = ({
  title,
  buttons = false,
  modalVisible,
  setModalOpen,
  ...rest
}: CustomModal) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(modalVisible)
  }, [modalVisible])

  return (
    <ReactModal
      shouldCloseOnOverlayClick={true}
      onRequestClose={setModalOpen}
      isOpen={visible}
      ariaHideApp={false}
      style={customStyles}
    >
      <Container>
        <div className="modal">
          <h1>{title}</h1>
          {rest.children}
        </div>
      </Container>
    </ReactModal>
  )
}

export default CustomModal
