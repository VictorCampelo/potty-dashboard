import Head from 'next/head'
import styled from 'styled-components'
import HeaderProducts from 'components/molecules/HeaderShop'
import { BsWhatsapp } from 'react-icons/bs'
import { FiChevronLeft, FiPlus } from 'react-icons/fi'
import { MultiSelect as Select } from 'components/molecules/Select'
import { useContext, useState } from 'react'
import router from 'next/router'
import { CartContext } from 'contexts/CartContext'
import { api } from 'services/apiClient'
import useMedia from 'use-media'
import { toast } from 'react-toastify'

type PaymentForm = {
  value: string
  label: string
}

const CartContinue = () => {
  const { items } = useContext(CartContext)

  const total = items.reduce((prev, curr) => {
    return prev + Number(curr.price) * Number(curr.amount)
  }, 0)

  const [paymentForm, setPaymentForm] = useState<PaymentForm>({
    value: '0',
    label: 'Cartão de crédito'
  })
  const [installments, setInstallments] = useState<PaymentForm>({
    value: '0',
    label: '1x'
  })

  const paymentForms = [
    {
      value: '0',
      label: 'Cartão de crédito'
    },
    {
      value: '1',
      label: 'Cartão de debito'
    },
    {
      value: '2',
      label: 'Pix'
    },
    {
      value: '3',
      label: 'Boleto'
    }
  ]

  const Installments = [...Array(12)].map((it, idx) => ({
    value: String(idx + 1),
    label: idx + 1 + 'x'
  }))

  const widthScreen = useMedia({ minWidth: '426px' })

  async function handleSubmit() {
    try {
      let data
      if (!widthScreen) {
        const stores = []

        items.forEach((it) => {
          if (stores.some((store) => store.storeId == it.storeId)) {
            stores.find((store) =>
              store.orderProducts.push({
                productId: it.productId,
                amount: it.amount
              })
            )
          } else {
            stores.push({
              storeId: it.storeId,
              orderProducts: [
                {
                  productId: it.productId,
                  amount: it.amount
                }
              ]
            })
          }
        })

        const res = await api.post(`/orders`, {
          products: [...stores]
        })

        data = res.data
      } else {
        const stores = []

        items.forEach((it) => {
          if (stores.some((store) => store.storeId == it.storeId)) {
            stores.find((store) =>
              store.orderProducts.push({
                productId: it.productId,
                amount: it.amount
              })
            )
          } else {
            stores.push({
              storeId: it.storeId,
              orderProducts: [
                {
                  productId: it.productId,
                  amount: it.amount
                }
              ]
            })
          }
        })

        const res = await api.post(`/orders`, {
          products: [...stores]
        })

        data = res.data
      }

      localStorage.setItem('ultimo.cart.items', '')
      data.whatsapp.forEach((it) => window.open(it))
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
                  <span>
                    <strong>Nome do usuário:</strong> Vitor Rafael
                  </span>

                  <span>
                    <strong>Endereço: </strong>
                    Avenida José Honório de Sousa 66, Centro, Dom Expedito
                    Lopes, PI, 64620000, Brasil
                  </span>

                  <span>
                    <strong>Telefone: </strong> 8999821-1234
                  </span>
                </AdressInfo>

                <NewAdressButton>
                  <FiPlus size={24} />
                  Adicionar novo endereço
                </NewAdressButton>

                <h1>Forma de pagamento</h1>

                <div style={{ display: 'flex', gap: 16 }}>
                  <Select
                    name="Forma de pagamento"
                    options={paymentForms}
                    selectedValue={paymentForm}
                    setSelectedValue={setPaymentForm}
                    loading={false}
                    placeholder="Selecione sua forma de pagamento"
                  />

                  {paymentForm?.value === '0' && (
                    <Select
                      name="Parcelamento"
                      options={Installments}
                      selectedValue={installments}
                      setSelectedValue={setInstallments}
                      loading={false}
                      placeholder="Selecione o número de parcelas"
                    />
                  )}
                </div>
              </AdressCard>

              <ProductsContainer>
                <h1>Produtos</h1>

                <div className="productscontainer">
                  {items.map((it) => (
                    <ProductItem key={it.productId}>
                      <div className="imgcontainer">
                        <img src="" alt="" />
                      </div>

                      <div className="infocontainer">
                        <h4>{it.title}</h4>

                        <span>{it.amount}x</span>
                      </div>
                    </ProductItem>
                  ))}
                </div>
              </ProductsContainer>
            </div>

            <CartContainerFooter>
              <div className="buttonContainer">
                <button
                  className="finish goback"
                  onClick={() => {
                    router.push('/cart')
                  }}
                >
                  <FiChevronLeft size={24} color="var(--color-primary)" />
                  Voltar para o carrinho
                </button>
              </div>

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
                <span className="spanBottom"></span>
              </div>

              <div className="buttonContainer">
                <button className="finish" onClick={handleSubmit}>
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
  height: 100%;
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
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
`

const CardsContainer = styled.section`
  width: 100%;
  height: 67vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1.5rem;

  .top-container {
    display: flex;
    height: 80%;
    gap: 2rem;
    min-height: 350px;
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
  padding: 0.9rem 0.75rem;
  border-radius: 11px;
  margin-top: 0.5rem;

  span {
    display: block;
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
  margin-bottom: 1rem;
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
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .productscontainer {
    flex: 1;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
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

      &.goback {
        border: 1px solid var(--color-primary);
        background: white;
        color: var(--color-primary);
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

export const ProductItem = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;

  .imgcontainer {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    background: #f3f3f3;
  }

  .infocontainer {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.25rem 1rem;

    h4 {
      font-size: 1rem;
    }
  }
`
