import Header from '../../components/molecules/Header'
import Head from 'next/head'
import HeaderProducts from 'components/molecules/HeaderShop'
import { Checkbox } from '../../components/atoms/Checkbox'
import { IoTrashOutline } from 'react-icons/io5'
import Counter from 'components/atoms/Counter'
import { Button as BigButton } from 'components/atoms/Button'
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
  CartProduct
} from '../../styles/pages/Cart'
type CartItem = {
  storeId: string
  productId: string
  amount: number
  title: string
  price: number
  enable: boolean
}

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
          enable: !selectAll
        }
      })
    )
  }

  function handleToggleEnableProduct(productId) {
    const copyItems = [...items]

    const isEnable = copyItems.find((it) => it.productId === productId).enable

    copyItems.find((it) => it.productId === productId).enable = !isEnable

    setItems(copyItems)

    if (items.filter((it) => it.enable).length < items.length) {
      setSelectAll(false)
    } else {
      setSelectAll(true)
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
    if (items.filter((it) => it.enable).length > 0) {
      try {
        const { data } = await api.post(`/orders/${items[0].storeId}`, {
          products: items
            .filter((it) => it.enable)
            .map((prod) => ({
              productId: prod.productId,
              amount: prod.amount
            }))
        })

        localStorage.setItem('ultimo.cart.items', '')
        window.open(data.whatsapp)
        router.push('/cart/finish')
      } catch (e) {
        toast.error('Erro ao finalizar compra, tente novamente mais tarde!')
      }
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
          <div className="header">
            {!widthScreen && (
              <FiArrowLeft
                size={25}
                color="var(--black-800)"
                onClick={() => {
                  router.push('/')
                }}
              />
            )}
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
            <div>
              <p style={{ color: 'purple', marginRight: '1rem' }}>
                Adicionar cupom
              </p>
            </div>
          </div>

          {items.length == 0 ? (
            <EmptyCartContainer>
              <img src="/images/emptycart.png" alt="Carrinho vazio" />

              <h1>Carrinho vazio!</h1>

              <p>Você ainda não possui itens no seu {'\n'} carrinho</p>

              <BigButton
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
                  <span>Subtotal</span>
                </section>

                <section style={{ flex: 1 }} />
              </CartHead>

              {items.map((it) => (
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
                              handleToggleEnableProduct(it.productId)
                            }
                          >
                            {it.enable && <FaCheck color="var(--gray-800)" />}
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
                        <span>
                          {it.title}
                          {/* Título */}
                        </span>
                        <strong>
                          {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                          }).format(it.price * it.amount)}
                        </strong>
                        <Counter id={it.productId} />
                      </section>
                    </>
                  )}
                </CartProduct>
              ))}
              <section
                style={
                  widthScreen
                    ? { display: 'none' }
                    : { marginTop: '1rem', marginLeft: '3rem' }
                }
              >
                <span>Subtotal:</span>
                <strong style={{ color: 'var(--color-primary)' }}>
                  R$ 8.997,00
                </strong>
              </section>
            </CartContainer>
          )}

          <CartContainerFooter
            disabled={items.filter((it) => it.enable).length === 0}
          >
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
                {items.length <= 1
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
        </Content>
      </Container>
    </>
  )
}

export default Cart
