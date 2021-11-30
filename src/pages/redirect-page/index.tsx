import { Button } from 'components/atoms/Button'
import router from 'next/router'
import styled from 'styled-components'
import HeaderShop from '../../components/molecules/HeaderShop'

const Redirect = () => {
  function handleBackToStore() {
    router.push('/')
  }
  return (
    <>
      <HeaderShop />
      <Container>
        <section>
          <img src="/images/redirect.svg" />
          <h1>Obrigado por comprar em nossa loja!</h1>
          <Button title="IR PARA A LOJA" onClick={handleBackToStore} />
        </section>
      </Container>
    </>
  )
}

export default Redirect

const Container = styled.div`
  width: 100%;
  height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section {
    width: 1420px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      margin-top: 20px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      color: #6c7079;
    }

    button {
      margin-top: 48px;
    }
  }
`
