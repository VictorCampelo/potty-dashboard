import Head from 'next/head'
import styled from 'styled-components'
import HeaderProducts from 'components/molecules/HeaderShop'
import { Button as BigButton } from 'components/atoms/Button'
import router from 'next/router'

const Cart = () => {
  return (
    <>
      <Head>
        <title>Carrinho | Último</title>
      </Head>

      <HeaderProducts />

      <Container>
        <Content>
          <FinishPucharse>
            <img src="/images/finishCart.png" alt="Compra finalizada" />

            <h1>Obrigado por visitar nossa loja!</h1>

            <p>Você foi encaminhado para o WhatsApp do vendedor.</p>

            <BigButton
              title="Voltar para a loja"
              style={{ maxWidth: 450 }}
              onClick={() => router.push('/')}
            />

            <span>
              Erro ao redirecionar? <a href="/cart">Clique aqui</a>
            </span>
          </FinishPucharse>
        </Content>
      </Container>
    </>
  )
}

export default Cart

const FinishPucharse = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 250px;
    margin-bottom: 40px;
  }

  h1,
  p {
    margin-bottom: 1rem;
  }

  span {
    margin-top: 1rem;
    color: var(--gray-700);
    font-size: 0.865rem;
  }

  a {
    color: var(--color-secondary);
  }
`

const Container = styled.main`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0 4rem;
`

const Content = styled.section`
  max-width: 1420px;
  height: 100%;
  width: 100%;
  padding-top: 3rem;
`
