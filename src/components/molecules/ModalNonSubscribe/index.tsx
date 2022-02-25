import CustomModal from 'components/molecules/CustomModal'
import { Button } from 'components/atoms/Button'
import { useNonSubscribe } from 'contexts/NonSubscribeContext'
import { Container } from './styles'

export default function ModalNonSubscribe() {
  const { activeModal, toggleModal } = useNonSubscribe()

  return (
    <CustomModal
      buttons={true}
      modalVisible={activeModal}
      setModalOpen={toggleModal}
    >
      <Container>
        <h1 className="title">
          Você ainda não é um assinante da plataforma Boa de Venda :(
        </h1>

        <p className="paragraph">
          Para poder usufruir dessa ferramenta e muito mais da nossa plataforma,
          <strong>
            assine um de nossos planos e aproveite da melhor forma!
          </strong>
        </p>

        <p className="description">
          <strong>Escolha o melhor plano para o seu negócio.</strong>
        </p>

        <div className="buttons">
          <Button title="Ver planos" />

          <p className="decline">Não, obrigado</p>
        </div>

        <img src="/images/non-subscribe.svg" alt="imagem" className="image" />
      </Container>
    </CustomModal>
  )
}
