import Head from 'next/head'
import styled from 'styled-components'
import HeaderProducts from 'components/molecules/HeaderShop'
import { BsWhatsapp } from 'react-icons/bs'
import { FiPlus } from 'react-icons/fi'
import { Input } from 'components/molecules/Input'
import { BiMoney } from 'react-icons/bi'

const CartContinue = () => {
  return (
    <>
      <Head>
        <title>Carrinho | Último</title>
      </Head>

      <HeaderProducts />

      <Container>
        <Content>
          <h1>Finalizar compra</h1>

          <CardsContainer>
            <div className="top-container">
              <AdressCard>
                <h1>Endereço</h1>

                <AdressInfo>
                  <span>Nome do usuário: Vitor Rafael</span>

                  <span>
                    Endereço: Avenida José Honório de Sousa 66, Centro, Dom
                    Expedito Lopes, PI, 64620000, Brasil
                  </span>

                  <span>Telefone: 8999821-1234</span>
                </AdressInfo>

                <NewAdressButton>
                  <FiPlus size={24} />
                  Adicionar novo endereço
                </NewAdressButton>

                <h1>Forma de pagamento</h1>

                <Input icon={<BiMoney />}></Input>
              </AdressCard>

              <ProductsContainer>
                <h1>Produtos</h1>
              </ProductsContainer>
            </div>

            <CartContainerFooter>
              <div className="info">
                <div>
                  <span>Total: </span>
                  <strong>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(1231.12)}
                  </strong>
                </div>
                <span className="spanBottom"></span>
              </div>

              <div className="buttonContainer">
                <button className="finish" onClick={() => {}}>
                  <BsWhatsapp size={24} color="white" />
                  FINALIZAR COMPRA
                </button>
              </div>
            </CartContainerFooter>
          </CardsContainer>
        </Content>
      </Container>
    </>
  )
}

export default CartContinue

const Container = styled.main`
  width: 100%;
  height: 80vh;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0 4rem;
`

const Content = styled.section`
  max-width: 1420px;
  flex: 1;
  height: 100%;
  width: 100%;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
`

const CardsContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1.5rem;

  .top-container {
    display: flex;
    height: 80%;
    gap: 2rem;
  }
`

const AdressCard = styled.section`
  flex: 3;
  height: 100%;
  background: white;
  border-radius: 30px;
  padding: 1.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`

const AdressInfo = styled.div`
  width: 100%;
  background: #fff6ed;
  border: 1px solid var(--color-primary);
  padding: 1.25rem;
  border-radius: 30px;
  margin-top: 0.5rem;

  span {
    display: inline-block;
  }
`

const NewAdressButton = styled.button`
  display: flex;
  align-items: center;
  color: var(--color-primary);
  background: transparent;
  border: none;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  transition: color 0.2s;

  svg {
    color: var(--color-primary);
    margin-right: 0.5rem;
    transition: color 0.2s;
  }

  :hover {
    color: var(--color-primary-darker);

    svg {
      color: var(--color-primary-darker);
    }
  }
`

const ProductsContainer = styled.section`
  flex: 1;
  height: 100%;
  background: white;
  border-radius: 30px;
  padding: 2rem 1.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`

export const CartContainer = styled.section`
  background: white;
  width: 100%;
  border-radius: 30px;
  height: 20%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;

  .subTotal {
    padding-left: 1rem;
  }

  h1 {
    padding: 1.5rem;
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

export const CartContainerFooter = styled(CartContainer)`
  flex-direction: row;
  align-items: center;
  padding: 1rem 1.5rem;
  justify-content: space-between;
`
