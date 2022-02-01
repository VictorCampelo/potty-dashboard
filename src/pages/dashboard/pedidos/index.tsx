import React, { useEffect, useState } from 'react'
import DrawerLateral from '../../../components/molecules/DrawerLateral'
import { Container } from '../../../styles/pages/shopkeeper'
import Head from 'next/head'
import styled from 'styled-components'

import { withSSRAuth } from 'services/withSSRAuth'
import { setupApiClient } from 'services/api'
import { Pagination } from 'components/molecules/Pagination'
import { AiFillEye, AiOutlineSearch } from 'react-icons/ai'
import { FiX } from 'react-icons/fi'
import { api } from 'services/apiClient'
import CustomModal from 'components/molecules/CustomModal'
import { ModalContainer, Product } from 'styles/components/Modal'
import { Button } from 'components/atoms/Button'
import { ellipsis } from 'functions/ellipsis'

type OrderHistorics = {
  product: {
    description: string
    parcelAmount: string
    price: number
  }
  storeId: string
  productId: string
  productQtd: number
}

type OrderProps = {
  id: string
  amount: number
  situation: string
  createdAt: string
  orderHistorics: OrderHistorics[]
}

type Orders = {
  data: OrderProps[]
}
const Pedidos = () => {
  const [orders, setOrders] = useState<OrderProps[]>([])
  const [modalVisible, setModalVisible] = useState(false)
  const [order, setOrder] = useState<OrderProps>({} as OrderProps)
  const [classButton, setClassButton] = useState('')
  const [date, setDate] = useState('')
  const [page, setPage] = useState(1)

  function changePage() {
    setPage(page + 1)
    loadData(orders.length * page)
  }

  function toggleModalOrder(order: OrderProps) {
    setOrder(order)
    setModalVisible(!modalVisible)
  }

  function toggleModalVisible() {
    setModalVisible(!modalVisible)
  }

  function classDefine(order: OrderProps): string {
    const recived = order?.situation === 'Recebido' ? 'recived' : ''
    const confirm = order?.situation === 'Concluído' ? 'confirm' : ''
    const refused = order?.situation === 'Cancelado' ? 'refused' : ''
    const buttonClasses = `statusButton ${recived} ${confirm} ${refused}`

    return buttonClasses
  }

  function percurArray(arr: OrderHistorics[]) {
    let value = 0

    for (let x = 0; x < arr.length; x++) {
      value += arr[0].productQtd
    }

    return value
  }

  function cutStrDate(date: string, limit: string) {
    let newDate = ''

    for (let x = 0; x < date.length; x++) {
      if (date[x] === limit) {
        break
      }
      newDate += date[x]
    }

    return newDate
  }

  function convertDate(date: string) {
    const day = `${date[8]}${date[9]}`
    const month = `${date[5]}${date[6]}`
    const year = `${date[0]}${date[1]}${date[2]}${date[3]}`
    const newDate = `${day}/${month}/${year}`

    return newDate
  }

  async function loadData(off: number) {
    const { data } = await api.get(
      `/orders/store?confirmed=false&offset=${off}&limit=3`
    )
    // const { data: dataConfirmed } = await api.get('/orders/store')
    // api.get('/orders/store?confirmed=true').then(res => console.log(res))

    console.log(data)
    // console.log(dataConfirmed)
    setOrders(data)

    // if(dataConfirmed.length > 0) {
    //   setOrders(arr => [...arr, dataConfirmed])
    // }
  }

  useEffect(() => {
    loadData(0)
  }, [])

  return (
    <>
      <Head>
        <title>Dashboard | Boa de Venda</title>
      </Head>
      <Container>
        <DrawerLateral greenOption={0} />

        <Content>
          <MainArea>
            <header>
              <h1>Pedidos</h1>

              <SearchButton placeholder="Pesquisar pedido" />

              <AiOutlineSearch size={24} />
            </header>

            <OrderHead>
              <section style={{ flex: 0.5 }}>
                <span>Data</span>
              </section>

              <section style={{ flex: 0.75 }}>
                <span>N° do pedido</span>
              </section>

              <section style={{ flex: 0.35 }}>
                <span>Valor</span>
              </section>

              <section className="center" style={{ flex: 0.75 }}>
                <span>Detalhes</span>
              </section>

              <section style={{ flex: 0.75 }}>
                <span>Status</span>
              </section>
            </OrderHead>
            {orders?.map((order: OrderProps) => {
              const oldDate = cutStrDate(order.createdAt, 'T')
              const newDate = convertDate(oldDate)

              const buttonClasses = classDefine(order)

              return (
                <OrderBody key={order.id}>
                  <section style={{ flex: 0.5 }}>
                    <span>{newDate}</span>
                  </section>
                  <section style={{ flex: 0.75 }}>
                    <span>54141af-456qwa</span>
                  </section>
                  <section style={{ flex: 0.35 }}>
                    <span>R$ {order.amount.toFixed(2)}</span>
                  </section>
                  <section className="center" style={{ flex: 0.75 }}>
                    <AiFillEye
                      size={24}
                      onClick={() => {
                        toggleModalOrder(order)
                        setClassButton(buttonClasses)
                        setDate(newDate)
                      }}
                    />
                  </section>
                  <button className={buttonClasses} style={{ flex: 0.75 }}>
                    {order.situation}
                  </button>
                </OrderBody>
              )
            })}

            <footer>
              <Pagination
                onPageChange={changePage}
                totalCountOfRegisters={orders.length * 3}
                currentPage={page}
                registersPerPage={3}
              />
            </footer>
          </MainArea>
        </Content>
        <CustomModal
          modalVisible={modalVisible}
          setModalOpen={toggleModalVisible}
          buttons={false}
        >
          {order.orderHistorics && (
            <ModalContainer>
              <div className="title">
                <div className="information">
                  <h2>Dados do pedido</h2>
                  <span>Nº do pedido: 555-555-555</span>
                </div>
                <div className="close">
                  <FiX size={30} onClick={toggleModalVisible} />
                </div>
              </div>
              <div className="content">
                <div className="leftContainer">
                  {order?.orderHistorics.map((item) => {
                    return (
                      <Product key={item.productId}>
                        <div className="productInformation">
                          <div className="imageArea">
                            <img src="https://a-static.mlcdn.com.br/1500x1500/geladeira-brastemp-frost-free-bre57-443l-220v-branco/madeiramadeira-openapi/311837/d583f95f19ffbab9ee844a469909052a.jpg" />
                          </div>
                          <div className="description">
                            <div>
                              <span>
                                {ellipsis(item.product.description, 100)}
                              </span>
                            </div>
                            <div className="price">
                              <span>{item.productQtd}x</span>
                              <span>R$ {item.product.price.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                        <div className="totalPrice">
                          <span>
                            Subtotal: R${' '}
                            {(item.productQtd * item.product.price).toFixed(2)}
                          </span>
                        </div>
                      </Product>
                    )
                  })}
                </div>
                <div className="rightContainer">
                  <div className="status">
                    <span>Status:</span>
                    <button className={classButton} style={{ flex: 0.75 }}>
                      {order?.situation}
                    </button>
                  </div>
                  <div className="gradient" />
                  <div className="informationOrder">
                    <div className="resume">
                      <span className="title">
                        <strong>Resumo do pedido</strong>
                      </span>
                      <div>
                        <span>Data:</span>
                        <span>{date}</span>
                      </div>
                      <div>
                        <span>Quantidade:</span>
                        {/* <span>{order?.orderHistorics[0]?.productQtd}</span> */}
                        <span>{percurArray(order?.orderHistorics)}</span>
                      </div>
                      <div>
                        <span>Cupons:</span>
                        <span>- R$ 0,00</span>
                      </div>
                      <div>
                        <span>
                          <strong>Total geral:</strong>
                        </span>
                        <span>
                          <strong>R$ 6.594,00</strong>
                        </span>
                      </div>
                    </div>

                    <div className="payment">
                      <span className="title">
                        <strong>Informações de pagamento</strong>
                      </span>
                      <div>
                        <span>Método:</span>
                        <span>Cartão de débito</span>
                      </div>
                      <div>
                        <span>Parcelamento:</span>
                        <span>Não</span>
                      </div>
                      <div>
                        <span>
                          <strong>Total geral:</strong>
                        </span>
                        <span>
                          <strong>R$ 6.594,00</strong>
                        </span>
                      </div>
                    </div>

                    <div className="localization">
                      <span className="title">
                        <strong>Local e contato:</strong>
                      </span>
                      <span>
                        Avenida josé silva 66, Centro, Dom expedito Lopes, PI,
                        64620000, Brasil
                      </span>
                      <span className="phone">(89) 9 8100-0000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttonsContainer">
                <div>
                  <Button title="VOLTAR" border />
                  <Button title="SALVAR" />
                </div>
              </div>
            </ModalContainer>
          )}
        </CustomModal>
      </Container>
    </>
  )
}

export default Pedidos

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx)

  const { data } = await apiClient.get('/stores/me')

  return {
    props: {
      storeId: data.store.id,
      id: data.store.formatedName
    }
  }
})

const SearchButton = styled.input`
  margin-left: auto;
  border: none;
  background: white;
  border-radius: 30px;
  width: 350px;
  height: 42px;
  padding: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

const OrderBody = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid var(--gray-150);
  align-items: center;

  section {
    flex: 1;
    display: flex;
  }

  section.center {
    justify-content: center;
  }

  svg {
    color: var(--color-secondary);
    transition: color 0.2s;
  }

  svg:hover {
    color: var(--color-secondary-darker);
    cursor: pointer;
  }

  span {
    color: var(--gray-700);
    font-weight: 400;
    font-size: 1rem;
    align-items: center;
    display: flex;
  }

  .statusButton {
    width: 100%;
    flex: 1;
    border-radius: 8px;
    background: var(--yellow);
    color: var(--gray-700);
    font-weight: bold;
    border: none;
    height: 38px;

    &.confirm {
      background: var(--confirmation);
      color: white;
    }

    &.refused {
      background: var(--red);
      color: white;
    }

    &.recived {
      background: var(--gray-700);
      color: white;
    }
  }
`

const OrderHead = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--gray-150);

  section {
    flex: 1;
    display: flex;
  }

  section.center {
    justify-content: center;
  }

  span {
    color: var(--gray-700);
    font-weight: 700;
    font-size: 1.25rem;
  }
`

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  padding: var(--font-size-sm);
  padding-left: var(--spacing-xxxs);
`

const MainArea = styled.main`
  background: #fff;
  flex: 1;
  height: 100%;

  border-radius: var(--border-radius-gg);
  padding: 3rem 3rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  header {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;

    svg {
      position: absolute;
      right: 16px;
      cursor: pointer;
    }
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`
