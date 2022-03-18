import Head from 'next/head'
import HeaderProducts from 'components/molecules/HeaderShop'
import { IoTrashOutline } from 'react-icons/io5'
import Counter from 'components/atoms/Counter'
import { AiFillCamera } from 'react-icons/ai'
import { useContext } from 'react'
import { CartContext } from 'contexts/CartContext'
import { useEffect, useState } from 'react'
import { api } from 'services/apiClient'
import router from 'next/router'
import { useMedia } from 'use-media'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { FaCheck } from 'react-icons/fa'

import {
  EmptyCartContainer,
  Container,
  Content,
  CartContainer,
  CartContainerFooter,
  CartHead,
  CartProduct,
  SeeProductsButton
} from 'styles/pages/Cart'
import { Player } from '@lottiefiles/react-lottie-player'
import formatToBrl from 'utils/formatToBrl'

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

  async function handleMakeCheckout() {
    try {
      await api.get('users/me')

      router.push('cart/continue')
    } catch (e) {
      if (e.response.status === 401) {
        router.push('/login')
      }
    }
  }

  function handleCleanCart() {
    localStorage.setItem('ultimo.cart.items', JSON.stringify([]))
    setItems([])
  }

  const getDiscount = (price: number, discount: number) =>
    price - (price * discount) / 100

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('ultimo.cart.items', JSON.stringify(items))
    }
  }, [items])

  return (
    <>
      <Head>
        <title>Carrinho | Último</title>
      </Head>

      <HeaderProducts />

      <Container>
        <Content
          style={{
            paddingTop: !widthScreen ? 90 : 0
          }}
        >
          <div className={!widthScreen && 'wrap-header'}>
            <div className="header" onClick={() => router.push('/')}>
              {!widthScreen && (
                <FiArrowLeft size={25} color="var(--black-800)" />
              )}
              <h1>Meu carrinho</h1>
            </div>

            <div
              className="checkbox"
              style={
                widthScreen || !items.length ? { display: 'none' } : undefined
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
          </div>

          {!items.length ? (
            <EmptyCartContainer>
              <Player
                autoplay
                loop
                src="/animations/cart-animation.json"
                style={{ width: '250px', marginBottom: '40px' }}
              />
              <h1>Carrinho vazio!</h1>

              <p>
                Você ainda não possui itens no seu <br /> carrinho
              </p>

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
                            <img src={it?.image} />
                          </div>

                          <span>
                            {it.title.length > 70
                              ? it.title.slice(0, 70) + '...'
                              : it.title}
                          </span>
                        </section>

                        <Counter id={it.productId} />

                        <section>
                          <strong>
                            {formatToBrl(
                              (it.discount
                                ? getDiscount(it.price, it.discount)
                                : it.price) * it.amount
                            )}
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
                          style={{
                            flexGrow: 1,
                            height: '100%'
                          }}
                        >
                          <div className="imgContainer">
                            {/* <AiFillCamera size={28} color="white" /> */}
                            <img src={it.image} alt="" />
                          </div>
                        </section>
                        <section
                          className="spanProductInformation"
                          style={{ flexGrow: 2 }}
                        >
                          <span style={{ fontSize: 18, padding: 5 }}>
                            {it.title.length > 40
                              ? it.title.slice(0, 40) + '...'
                              : it.title}
                          </span>
                          <strong>
                            {formatToBrl(
                              it.discount
                                ? getDiscount(it.price, it.discount)
                                : it.price
                            )}
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
                        {formatToBrl(
                          (it.discount
                            ? getDiscount(it.price, it.discount)
                            : it.price) * it.amount
                        )}
                      </strong>
                    </p>
                  )}
                </>
              ))}
            </CartContainer>
          )}

          {/* <CustomModal
            buttons={false}
            modalVisible={clearModalActive}
            setModalOpen={toggleClearModal}
          >
            <ModalContainer>
              <div className="title" style={{ textAlign: 'center' }}>
                <span>
                  Realmente deseja <strong>esvaziar</strong> o carrinho?
                </span>
              </div>
              <div
                className="buttonsContainer"
                style={{ textAlign: 'center', marginTop: 'var(--spacing-xs)' }}
              >
                <Button
                  title="ESVAZIAR"
                  onClick={() => {
                    setItems([])
                    toggleClearModal()
                  }}
                  style={{ marginBottom: 'var(--spacing-xxs)' }}
                />
                <span onClick={toggleClearModal}>CANCELAR</span>
              </div>
            </ModalContainer>
          </CustomModal> */}

          {items.length && (
            <CartContainerFooter
              disabled={items.filter((it) => it.enabled).length === 0}
            >
              <div className="info">
                <div>
                  <span>Total: </span>
                  <strong>{formatToBrl(total)}</strong>
                </div>
                <span className="spanBottom">
                  {items.filter((it) => it.enabled).length <= 1
                    ? items.length + ' item'
                    : items.length + ' itens'}
                  {!widthScreen && (
                    <a onClick={handleCleanCart}>Esvaziar Carrinho</a>
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

                <button className="finish" onClick={handleMakeCheckout}>
                  CONTINUAR
                </button>
              </div>
              <div
                className="buttonContainerMob"
                style={widthScreen ? { display: 'none' } : undefined}
              >
                <button className="finish" onClick={handleMakeCheckout}>
                  {' '}
                  <FiArrowRight size={24} color="white" />
                  <p>CONTINUAR</p>
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
