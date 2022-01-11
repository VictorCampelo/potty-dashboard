import React from 'react'
import DrawerLateral from '../../../components/molecules/DrawerLateral'
import { Container } from '../../../styles/pages/shopkeeper'
import Head from 'next/head'
import styled from 'styled-components'

import { withSSRAuth } from 'services/withSSRAuth'
import { setupApiClient } from 'services/api'
import { Pagination } from 'components/molecules/Pagination'

const Pedidos = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Boa de Venda</title>
      </Head>
      <Container>
        <DrawerLateral greenOption={0} />

        <Content>
          <MainArea>
            <div>
              <div className="orderby">
                Ordenar por:
                <span>Email</span>
                <span className="enabled">Código</span>
                <span>Data</span>
              </div>
            </div>

            <header>
              <h1>Pedidos</h1>
            </header>

            <OrderHead>
              <section style={{ flex: 2.5, justifyContent: 'flex-start' }}>
                <span>21/12/21</span>
              </section>

              <section>
                <span>Quantidade</span>
              </section>

              <section>
                <span>Preço</span>
              </section>

              <section>
                <span>Status</span>
              </section>
            </OrderHead>

            <OrderBody>
              <section style={{ flex: 2.5, justifyContent: 'flex-start' }}>
                <span>vitorafael.r.c@gmail.com</span>
                <div className="product">
                  <span>Geladeira</span>
                  <small>54141af-456qwa</small>
                </div>
              </section>

              <section>
                <span>1</span>
              </section>

              <section>
                <span>R$2,999,00</span>
              </section>

              <button className="statusButton">Processando</button>
            </OrderBody>

            <OrderBody>
              <section style={{ flex: 2.5, justifyContent: 'flex-start' }}>
                <span>vitorafael.r.c@gmail.com</span>
                <div className="product">
                  <span>Geladeira</span>
                  <small>54141af-456qwa</small>
                </div>
              </section>

              <section>
                <span>1</span>
              </section>

              <section>
                <span>R$2,999,00</span>
              </section>

              <button className="statusButton">Processando</button>
            </OrderBody>

            <OrderHead>
              <section style={{ flex: 2.5, justifyContent: 'flex-start' }}>
                <span>21/12/21</span>
              </section>

              <section>
                <span>Quantidade</span>
              </section>

              <section>
                <span>Preço</span>
              </section>

              <section>
                <span>Status</span>
              </section>
            </OrderHead>

            <OrderBody>
              <section style={{ flex: 2.5, justifyContent: 'flex-start' }}>
                <span>vitorafael.r.c@gmail.com</span>
                <div className="product">
                  <span>Geladeira</span>
                  <small>54141af-456qwa</small>
                </div>
              </section>

              <section>
                <span>1</span>
              </section>

              <section>
                <span>R$2,999,00</span>
              </section>

              <button className="statusButton">Processando</button>
            </OrderBody>

            <footer>
              <Pagination
                onPageChange={() => {}}
                totalCountOfRegisters={500}
                currentPage={1}
                registersPerPage={40}
              />
            </footer>
          </MainArea>
        </Content>
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

const OrderBody = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 0;
  height: 80px;
  border-bottom: 1px solid var(--gray-150);
  align-items: center;

  section {
    flex: 1;
    display: flex;
    justify-content: center;
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

  .product {
    width: 50%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;

    small {
      font-size: 0.7rem;
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
    justify-content: center;
  }

  span {
    color: var(--color-secondary);
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

  .orderby {
    height: 60px;
    width: fit-content;
    margin-left: auto;
    padding: 15px 22px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: var(--border-radius-gg);
    font-size: 1.125rem;
    font-weight: 500;

    span {
      padding: 0 12px;
      color: var(--gray-600);
      border-left: 1px solid var(--gray-200);

      &.enabled {
        color: var(--color-secondary);
      }

      :first-child {
        border-left: none;
      }
    }
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`
