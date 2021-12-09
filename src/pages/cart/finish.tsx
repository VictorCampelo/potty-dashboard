import Head from 'next/head'
import styled from 'styled-components'
import HeaderProducts from 'components/molecules/HeaderShop'
import { Button as BigButton } from 'components/atoms/Button'
import router from 'next/router'

const Cart = () => {
  return (
    <>
      <Head>
        <title>Cart | Último</title>
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

const CartContainer = styled.section`
  background: white;
  width: 100%;
  border-radius: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  margin-top: 2rem;
  flex-direction: column;

  h1 {
    padding: 2rem 1.5rem;
  }

  .info {
    span,
    strong {
      font-size: 1.25rem;
    }

    strong {
      color: var(--color-primary);
    }
  }

  .buttonContainer {
    display: flex;

    button {
      padding: 0 1rem;
      display: flex;
      align-items: center;
      margin-left: 1rem;
      border: none;
      background: white;
      border-radius: 50px;
      height: 48px;
      font-weight: bold;

      svg {
        margin-right: 0.5rem;
      }

      &.empty {
        border: 1px solid var(--red);
        color: var(--red);
      }

      &.finish {
        background: var(--color-primary);
        color: white;
      }
    }
  }
`

const CartHead = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 2rem;

  section {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  span {
    color: var(--blue-primary);
    font-weight: 700;
    font-size: 1.25rem;
  }
`

const CartProduct = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 2rem;
  align-items: center;
  border-top: 1px solid var(--gray-100);

  section {
    flex: 1;
    display: flex;
    justify-content: center;

    span {
      font-size: 1.5rem;
    }

    .exclude {
      display: flex;
      border: none;
      background: white;
      border-radius: 30px;
      padding: 1rem;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

      strong {
        margin-left: 0.5rem;
        color: var(--red);
      }
    }

    :last-child {
      display: flex;
      justify-content: flex-end;
    }

    .imgContainer {
      width: 90px;
      height: 90px;
      border-radius: 5px;
      background: var(--gray-300);
      margin-right: 1rem;
      padding: 30px;
    }
  }
`
