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
import { PulseLoader } from 'react-spinners'

type File = {
  id: string
  name: string
  filename: string
  url: string
}
type OrderHistorics = {
  product: {
    title: string
    description: string
    parcelAmount: string
    price: number
    discount: number
    files: File[]
  }
  storeId: string
  productId: string
  productQtd: number
  paymentMethod: string
}

type OrdersListProps = {
  id: string
  amount: number
  situation: string
  createdAt: string
  orderNumber: string
}

interface OrderProps extends OrdersListProps {
  customerAddress: string
  orderHistorics: OrderHistorics[]
}
const Pedidos = () => {
  const [ordersList, setOrdersList] = useState<OrdersListProps[]>([])
  const [modalVisible, setModalVisible] = useState(false)
  const [order, setOrder] = useState<OrderProps>({} as OrderProps)
  const [classButton, setClassButton] = useState('')
  const [date, setDate] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [totalOrders, setTotalOrders] = useState(0)
  const [page, setPage] = useState(1)

  function changePage() {
    setPage(page + 1)
    loadData(ordersList.length * page)
  }

  function toggleModalOrder(order: OrderProps) {
    setIsLoading(true)
    getOrder(order.id)
    setModalVisible(!modalVisible)
  }

  async function getOrder(id: string) {
    try {
      const { data } = await api.get(`/orders/store/order?id=${id}`)
      console.log(data)
      setOrder(data)
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }

  function toggleModalVisible() {
    setModalVisible(!modalVisible)
  }

  //recebe um texto: string, e inclui um format: string a cada position: number
  function formatText(text: string, format: string, position = 3) {
    const len = text.length

    let jump = position
    let newText = ''
    for (let x = 0; x < len; x++) {
      if (x == jump) {
        newText += format
        jump += jump
      }

      newText += text[x]
    }

    return newText
  }

  function classDefine(situation: string): string {
    const recived = situation === 'Recebido' ? 'recived' : ''
    const confirm = situation === 'Concluído' ? 'confirm' : ''
    const refused = situation === 'Cancelado' ? 'refused' : ''
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
    try {
      const { data } = await api.get(
        `/orders/store?confirmed=false&offset=${off}&limit=3`
      )

      console.log(data)
      setOrdersList(data.results)
      setTotalOrders(data.totalOrders)
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
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

            {isLoading ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  height: '100%',
                  alignItems: 'center'
                }}
              >
                <PulseLoader />
              </div>
            ) : (
              <>
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
                {ordersList?.map((order: OrderProps) => {
                  const oldDate = cutStrDate(order.createdAt, 'T')
                  const newDate = convertDate(oldDate)

                  const buttonClasses = classDefine(order?.situation)

                  return (
                    <OrderBody key={order.id}>
                      <section style={{ flex: 0.5 }}>
                        <span>{newDate}</span>
                      </section>
                      <section style={{ flex: 0.75 }}>
                        <span>{formatText(order.orderNumber, ' ', 3)}</span>
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
              </>
            )}
            <footer>
              <Pagination
                onPageChange={changePage}
                totalCountOfRegisters={totalOrders}
                currentPage={page}
                registersPerPage={3}
              />
            </footer>
          </MainArea>
        </Content>

        <CustomModal
          modalVisible={modalVisible && !isLoading}
          setModalOpen={toggleModalVisible}
          buttons={false}
        >
          {order.orderHistorics && (
            <ModalContainer>
              <div className="title">
                <div className="information">
                  <h2>Dados do pedido</h2>
                  <span>
                    Nº do pedido: {formatText(order.orderNumber, '-')}
                  </span>
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
                            {/* <img src="https://a-static.mlcdn.com.br/1500x1500/geladeira-brastemp-frost-free-bre57-443l-220v-branco/madeiramadeira-openapi/311837/d583f95f19ffbab9ee844a469909052a.jpg" /> */}
                            <img
                              src={item.product.files[0].url}
                              alt="Imagem do produto"
                            />
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
                        <span>{order?.orderHistorics[0].paymentMethod}</span>
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
                      <span>{order.customerAddress}</span>
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
