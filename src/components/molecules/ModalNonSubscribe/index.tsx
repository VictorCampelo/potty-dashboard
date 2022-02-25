import CustomModal from 'components/molecules/CustomModal'
import { useNonSubscribe } from 'contexts/NonSubscribeContext'

export default function ModalNonSubscribe() {
  const { activeModal, toggleModal } = useNonSubscribe()

  return (
    <CustomModal
      buttons={true}
      modalVisible={activeModal}
      setModalOpen={toggleModal}
    >
      {activeModal ? 'ativo' : 'inativo'}
    </CustomModal>
  )
}
