import Head from 'next/head'
import HeaderProducts from 'components/molecules/HeaderShop'
import { IoTrashOutline } from 'react-icons/io5'
import Counter from 'components/atoms/Counter'
import { AiFillCamera } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { useContext } from 'react'
import { CartContext } from 'contexts/CartContext'
import { useEffect, useState } from 'react'
import { api } from 'services/apiClient'
import router from 'next/router'
import { useMedia } from 'use-media'
import { FiArrowLeft } from 'react-icons/fi'
import { FaCheck } from 'react-icons/fa'
import { toast } from 'react-toastify'

import {
  EmptyCartContainer,
  Container,
  Content,
  CartContainer,
  CartContainerFooter,
  CartHead,
  CartProduct,
  SeeProductsButton
} from '../../styles/pages/Cart'

const Cart = () => {
  const widthScreen = useMedia({ minWidth: '426px' })

  const { items, setItems } = useContext(CartContext)
  const [selectAll, setSelectAll] = useState(true)

  const total = items.reduce((prev, curr) => {
    return prev + Number(curr.price) * Number(curr.amount)
  }, 0)

  function handleSelectAll() {
    setSelectAll(!selectAll)
    setItems(
      items.map((it) => {
        return {
          ...it,
          enabled: !selectAll
        }
      })
    )
  }

  function handleToggleEnabledProduct(productId) {
    const copyItems = [...items]

    const isEnabled = copyItems.find((it) => it.productId === productId).enabled

    copyItems.find((it) => it.productId === productId).enabled = !isEnabled

    setItems(copyItems)

    if (copyItems.filter((it) => it.enabled).length === copyItems.length) {
      setSelectAll(true)
    } else {
      setSelectAll(false)
    }
  }

  function handleRemoveItem(id: string) {
    setItems(items.filter((it) => it.productId != id))
    localStorage.setItem(
      'ultimo.cart.items',
      JSON.stringify(items.filter((it) => it.productId != id))
    )
  }

  async function handleSubmit() {
    try {
      let data
      if (!widthScreen) {
        console.log('tela pequena')

        const res = await api.post(`/orders/${items[0].storeId}`, {
          products: items
            .filter((it) => it.enabled)
            .map((prod) => ({
              productId: prod.productId,
              amount: prod.amount
            }))
        })

        data = res.data
      } else {
        const res = await api.post(`/orders/${items[0].storeId}`, {
          products: items
            .filter((it) => it.enabled)
            .map((prod) => ({
              productId: prod.productId,
              amount: prod.amount
            }))
        })

        data = res.data
      }

      localStorage.setItem('ultimo.cart.items', '')
      window.open(data.whatsapp)
      router.push('/cart/finish')
    } catch (e) {
      if (e.response.status === 401) {
        return toast.error(
          'Clique aqui para fazer o login e finalizar sua compra!',
          {
            onClick: () => router.push('/login')
          }
        )
      }

      if (e.response.status === 500) {
        return toast.error(
          'Faça o login com uma conta de usuário para finalizar a compra!'
        )
      }

      toast.error('Erro ao finalizar compra, tente novamente mais tarde!')
    }
  }

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('ultimo.cart.items', JSON.stringify(items))
    }
  }, [items])

  return (
    <>
      <Head>
        <title>Cart | Último</title>
      </Head>

      <HeaderProducts />

      <Container>
        <Content>
          <div className="header" onClick={() => router.push('/')}>
            {!widthScreen && <FiArrowLeft size={25} color="var(--black-800)" />}
            <h1>Meu carrinho</h1>
          </div>

          <div
            className="checkbox"
            style={
              widthScreen || items.length == 0 ? { display: 'none' } : undefined
            }
          >
            <div className="check">
              <button
                type="button"
                id="btn"
                className="btn"
                onClick={handleSelectAll}
              >
                {selectAll && <FaCheck color="var(--gray-800)" />}
              </button>
              <label htmlFor="btn">Selecionar Todos</label>
            </div>
            <div className="cupomContainer">
              <img src="/images/ticket.svg" alt="Adicionar Cupom" />
              <p
                style={{
                  color: 'var(--color-secondary)',
                  marginRight: '1rem',
                  fontWeight: 'bold'
                }}
              >
                Adicionar cupom
              </p>
            </div>
          </div>

          {items.length == 0 ? (
            <EmptyCartContainer>
              <img src="/images/emptyCart.svg" alt="Carrinho vazio" />

              <h1>Carrinho vazio!</h1>

              <p>Você ainda não possui itens no seu {'\n'} carrinho</p>

              <SeeProductsButton
                title="Ver produtos"
                onClick={() => router.push('/')}
              />
            </EmptyCartContainer>
          ) : (
            <CartContainer>
              <CartHead>
                <section style={{ flex: 5, justifyContent: 'flex-start' }}>
                  <span>Produto</span>
                </section>

                <section>
                  <span>Quantidade</span>
                </section>

                <section>
                  <span>Preço</span>
                </section>

                <section style={{ flex: 1 }} />
              </CartHead>

              {items.map((it) => (
                <>
                  <CartProduct key={it.productId}>
                    {widthScreen ? (
                      <>
                        <section
                          style={{ flex: 5, justifyContent: 'flex-start' }}
                        >
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
                            onClick={() => {
                              handleRemoveItem(it.productId)
                            }}
                          >
                            <IoTrashOutline size={24} color="var(--red)" />

                            <strong>Excluir</strong>
                          </button>
                        </section>
                      </>
                    ) : (
                      <>
                        <div className="checkbox">
                          <div className="check">
                            <button
                              type="button"
                              id="btn"
                              className="btn"
                              onClick={() =>
                                handleToggleEnabledProduct(it.productId)
                              }
                            >
                              {it.enabled && (
                                <FaCheck color="var(--gray-800)" />
                              )}
                            </button>
                          </div>
                        </div>

                        <section
                          className="sectionImg"
                          style={{ flexGrow: 1, height: '100%' }}
                        >
                          <div className="imgContainer">
                            <AiFillCamera size={28} color="white" />
                          </div>
                        </section>
                        <section
                          className="spanProductInformation"
                          style={{ flexGrow: 2 }}
                        >
                          <span>{it.title}</span>
                          <strong>
                            {new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL'
                            }).format(it.price)}
                          </strong>
                          <Counter id={it.productId} />
                        </section>
                      </>
                    )}
                  </CartProduct>

                  {!widthScreen && (
                    <p className="subTotal">
                      Subtotal:{' '}
                      <strong style={{ color: 'var(--color-primary)' }}>
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(it.price * it.amount)}
                      </strong>
                    </p>
                  )}
                </>
              ))}
            </CartContainer>
          )}

          {items.length !== 0 && (
            <CartContainerFooter
              disabled={items.filter((it) => it.enabled).length === 0}
            >
              <div className="info">
                <div>
                  <span>Total: </span>
                  <strong>
                    {!widthScreen
                      ? new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(
                          items
                            .filter((it) => it.enabled)
                            .reduce((prev, curr) => {
                              return (
                                prev + Number(curr.price) * Number(curr.amount)
                              )
                            }, 0)
                        )
                      : new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(total)}
                  </strong>
                </div>
                <span className="spanBottom">
                  {items.filter((it) => it.enabled).length <= 1
                    ? items.length + ' item'
                    : items.length + ' itens'}
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
                <button
                  className="empty"
                  onClick={() => {
                    setItems([])
                    localStorage.setItem('ultimo.cart.items', '[]')
                  }}
                >
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
                  {' '}
                  <BsWhatsapp size={24} color="white" />
                  <p>FINALIZAR</p>
                </button>
              </div>
            </CartContainerFooter>
          )}
        </Content>
      </Container>
    </>
  )
}

export default Cart
