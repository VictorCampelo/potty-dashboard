import React, { useEffect, useState } from 'react'
import DrawerLateral from 'components/molecules/DrawerLateral'
import { Container } from 'styles/pages/shopkeeper'
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
import formatToBrl from 'utils/formatToBrl'
import moment from 'moment'
import { MultiSelect } from 'components/molecules/Select'

type File = {
  id: string
  name: string
  filename: string
  url: string
}
type OrderHistoric = {
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
  results: any[]
  situation: string
  createdAt: string
  orderNumber: string
}

interface OrderProps extends OrdersListProps {
  customerAddress: string
  orderHistorics: OrderHistoric[]
}

const Pedidos = () => {
  const [ordersList, setOrdersList] = useState<OrdersListProps[]>([])
  const [modalVisible, setModalVisible] = useState(false)
  const [order, setOrder] = useState<OrderProps>({} as OrderProps)
  const [productStatusOption, setProductStatusOption] = useState<any>(null)
  const [date, setDate] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [totalOrders, setTotalOrders] = useState(0)
  const [page, setPage] = useState(1)

  const productStatusOptions = [
    { label: 'Recebido', value: 'recived' },
    { label: 'Concluído', value: 'confirm' },
    { label: 'Cancelado', value: 'refused' }
  ]

  function toggleModalOrder(order: OrderProps) {
    setIsLoading(true)
    getOrder(order.id)
    setModalVisible(!modalVisible)
  }

  async function getOrder(id: string) {
    try {
      const { data } = await api.get(`/orders/store/order?id=${id}`)
      setOrder(data)
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  function toggleModalVisible() {
    setModalVisible(!modalVisible)
  }

  function formatTextEachPosition(text: string, format: string, position = 3) {
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
    const received = situation === 'Recebido' ? 'recived' : ''
    const confirm = situation === 'Concluído' ? 'confirm' : ''
    const refused = situation === 'Cancelado' ? 'refused' : ''
    const buttonClasses = `statusButton ${received} ${confirm} ${refused}`

    return buttonClasses
  }

  function getQuantityAndPrice(orders: OrderHistoric[]) {
    let productQtd = 0
    let price = 0

    orders.forEach((order) => {
      productQtd += order.productQtd
      price += order.product.price * order.productQtd
    })

    return { productQtd, price }
  }

  async function loadData(off: number) {
    try {
      const { data } = await api.get(
        `/orders/store?confirmed=false&offset=${off}&limit=8`
      )
      setOrdersList(data.results)
      setTotalOrders(data.totalOrders)
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  function handleSubmit() {
    if (productStatusOption.value !== order.situation) {
      // update
    }
  }

  useEffect(() => {
    loadData(0)
  }, [])

  useEffect(() => {
    loadData(ordersList.length * (page - 1))
  }, [page])

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

              {ordersList.length && (
                <>
                  <SearchButton placeholder="Pesquisar pedido" />
                  <AiOutlineSearch size={24} />
                </>
              )}
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
                {!ordersList.length ? (
                  <EmptyContainer>
                    <div>
                      <img src="/images/emptyCategories.svg" />
                      <p>Ainda não há pedidos para serem exibidos</p>
                    </div>
                  </EmptyContainer>
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
                      const createdAt = moment(order.createdAt).format(
                        'DD/MM/YYYY'
                      )

                      const buttonClasses = classDefine(order?.situation)

                      return (
                        <OrderBody key={order.id}>
                          <section style={{ flex: 0.5 }}>
                            <span>{createdAt}</span>
                          </section>
                          <section style={{ flex: 0.75 }}>
                            <span>
                              {formatTextEachPosition(
                                order.orderNumber,
                                ' ',
                                3
                              )}
                            </span>
                          </section>
                          <section style={{ flex: 0.35 }}>
                            <span>{formatToBrl(order.amount)}</span>
                          </section>
                          <section className="center" style={{ flex: 0.75 }}>
                            <AiFillEye
                              size={24}
                              onClick={() => {
                                setProductStatusOption({
                                  label: order.situation,
                                  value: order.situation
                                })
                                toggleModalOrder(order)
                                setDate(createdAt)
                              }}
                            />
                          </section>
                          <button
                            className={buttonClasses}
                            style={{ flex: 0.75 }}
                          >
                            {order.situation}
                          </button>
                        </OrderBody>
                      )
                    })}
                  </>
                )}
              </>
            )}
            {ordersList.length && (
              <footer>
                <Pagination
                  onPageChange={setPage}
                  totalCountOfRegisters={totalOrders}
                  currentPage={page}
                  registersPerPage={8}
                />
              </footer>
            )}
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
                    Nº do pedido:{' '}
                    {formatTextEachPosition(order.orderNumber, '-')}
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
                            <img
                              src={
                                item?.product?.files[0]?.url ||
                                '/images/capa.png'
                              }
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
                              <span>{formatToBrl(item.product.price)}</span>
                            </div>
                          </div>
                        </div>
                        <div className="totalPrice">
                          <span>
                            Subtotal:{' '}
                            {formatToBrl(item.productQtd * item.product.price)}
                          </span>
                        </div>
                      </Product>
                    )
                  })}
                </div>
                <div className="rightContainer">
                  <div className="status">
                    <MultiSelect
                      name="Status:"
                      options={productStatusOptions}
                      selectedValue={productStatusOption}
                      setSelectedValue={setProductStatusOption}
                      placeholder="Selecione um status"
                      loading={false}
                    />
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
                        <span>
                          {
                            getQuantityAndPrice(order?.orderHistorics)
                              .productQtd
                          }
                        </span>
                      </div>
                      <div>
                        <span>Cupons:</span>
                        <span>- {formatToBrl(0)}</span>
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
                          <strong>
                            {formatToBrl(
                              getQuantityAndPrice(order?.orderHistorics).price
                            )}
                          </strong>
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
                  <Button title="SALVAR" onClick={handleSubmit} />
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
  }

  .confirm {
    background: var(--confirmation) !important;
    color: white !important;
  }

  .refused {
    background: var(--red) !important;
    color: white !important;
  }

  .recived {
    background: var(--gray-700) !important;
    color: white !important;
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
const EmptyContainer = styled.div`
  width: 100%;
  padding: 2rem 0 2rem 0;
  display: flex;
  justify-content: center;
  align-content: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    img {
      width: 60%;
      height: 60%;
    }
    p {
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`
