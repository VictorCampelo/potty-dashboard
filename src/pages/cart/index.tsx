import Header from '../../components/molecules/Header'
import Head from 'next/head'
import styled from 'styled-components'
import HeaderProducts from 'components/molecules/HeaderShop'
import { IoTrashOutline } from 'react-icons/io5'
import Counter from 'components/atoms/Counter'
import { AiFillCamera } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { useContext } from 'react'
import { CartContext } from 'contexts/CartContext'
import { useEffect } from 'react'
import { api } from 'services/apiClient'
import router from 'next/router'
import sizes from '../../utils/sizes'
import { useMedia } from 'use-media'

const Cart = () => {
  const widthScreen = useMedia({ minWidth: '426px' })

  const { items, setItems } = useContext(CartContext)

  const total = items.reduce((prev, curr) => {
    return prev + Number(curr.price) * Number(curr.amount)
  }, 0)

  function handleRemoveItem(id: string) {
    setItems(items.filter((it) => it.productId != id))
  }

  async function handleSubmit() {
    if (items.length > 0) {
      try {
        const { data } = await api.post(`/orders/${items[0].storeId}`, {
          products: items.map((prod) => ({
            productId: prod.productId,
            amount: prod.amount
          }))
        })

        router.push(data.whatsapp)
      } catch (e) {
        console.error(e)
      }
    }
  }

  return (
    <>
      <Head>
        <title>Cart | Último</title>
      </Head>

      <HeaderProducts />

      <Container>
        <Content>
          <h1>Meu carrinho</h1>

          <CartContainer>
            {items.length == 0 ? (
              <h1>Carrinho vazio!</h1>
            ) : (
              <>
                <CartHead>
                  <section style={{ flex: 5, justifyContent: 'flex-start' }}>
                    <span>Produto</span>
                  </section>

                  <section>
                    <span>Quantidade</span>
                  </section>

                  <section>
                    <span>Subtotal</span>
                  </section>

                  <section style={{ flex: 1 }} />
                </CartHead>

                {items.map((it) => (
                  <CartProduct key={it.productId}>
                    <section style={{ flex: 5, justifyContent: 'flex-start' }}>
                      <div className="imgContainer">
                        <AiFillCamera size={28} color="white" />
                      </div>

                      <span>{it.title}</span>
                    </section>

                    <Counter id={it.productId} />

                    <section>
                      <strong>
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(it.price * it.amount)}
                      </strong>
                    </section>

                    <section style={{ flex: 1 }}>
                      <button
                        className="exclude"
                        onClick={() => handleRemoveItem(it.productId)}
                      >
                        <IoTrashOutline size={24} color="var(--red)" />

                        <strong>Excluir</strong>
                      </button>
                    </section>
                  </CartProduct>
                ))}
              </>
            )}
          </CartContainer>

          <CartContainerFooter>
            <div className="info">
              <div>
                <span>Total: </span>
                <strong>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(total)}
                </strong>
              </div>
              <span className="spanBottom">
                {items.length > 1
                  ? items.length + ' item'
                  : items.length + ' items'}
                {' | '}
                {!widthScreen && (
                  <a onClick={() => setItems([])}>Esvaziar Carrinho</a>
                )}
              </span>
            </div>

            <div
              className="buttonContainer"
              style={widthScreen ? undefined : { display: 'none' }}
            >
              <button className="empty" onClick={() => setItems([])}>
                <IoTrashOutline size={24} color="var(--red)" />
                ESVAZIAR CARRINHO
              </button>

              <button className="finish" onClick={handleSubmit}>
                <BsWhatsapp size={24} color="white" />
                FINALIZAR COMPRA
              </button>
            </div>
            <div
              className="buttonContainerMob"
              style={widthScreen ? { display: 'none' } : undefined}
            >
              <button className="finish" onClick={handleSubmit}>
                <BsWhatsapp size={24} color="white" />
                <p>FINALIZAR</p>
              </button>
            </div>
          </CartContainerFooter>
        </Content>
      </Container>
    </>
  )
}

export default Cart

export const Container = styled.main`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0 4rem;

  ${[sizes.down('lgMob')]} {
    /* background: var(--white); */
    background: white;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`

export const Content = styled.section`
  max-width: 1420px;
  height: 100%;
  width: 100%;
  padding-top: 3rem;
`

export const CartContainer = styled.section`
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
      border: 1px solid red;
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
  padding: 2rem;
  justify-content: space-between;

  ${[sizes.down('lgMob')]} {
    bottom: 0;
    position: fixed;
    border-radius: 30px 30px 0 0;
    box-shadow: 0 0 1rem rgba(99, 99, 99, 0.2);
    padding: 0 0 0 1rem;
    .info {
      display: flex;
      flex-direction: column;

      .spanBottom {
        font-size: 1rem;
        a {
          color: var(--red);
          text-decoration: underline;
        }
      }
    }
    .buttonContainerMob {
      display: flex;
      height: 80px;
      .finish {
        border-radius: 0 30px 0 0;
        background-color: purple;
        border: 1px solid purple;
        height: 100%;
        padding: 0 1rem 0 1rem;
        p {
          color: white;
        }
      }
    }
  }
`
export const CartHead = styled.div`
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

export const CartProduct = styled.div`
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
