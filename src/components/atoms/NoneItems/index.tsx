import { HiOutlineEmojiSad } from 'react-icons/hi'
import styled from 'styled-components'

const NoneItems = () => {
  return (
    <Container>
      <HiOutlineEmojiSad size={60} color="#B2B5BA" />

      <span>Ainda não há informações disponíveis</span>
    </Container>
  )
}

export default NoneItems

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    color: #b2b5ba;
    margin-top: 16px;
    font-weight: 500;
  }
`
