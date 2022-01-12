import React from 'react'
import DrawerLateral from '../../../components/molecules/DrawerLateral'
import { Container } from '../../../styles/pages/shopkeeper'
import Head from 'next/head'
import styled from 'styled-components'

import { withSSRAuth } from 'services/withSSRAuth'
import { setupApiClient } from 'services/api'
import { Pagination } from 'components/molecules/Pagination'
import { AiFillEye, AiOutlineSearch } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'

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

            <OrderBody>
              <section style={{ flex: 0.5 }}>
                <span>21/12/21</span>
              </section>

              <section style={{ flex: 0.75 }}>
                <span>54141af-456qwa</span>
              </section>

              <section style={{ flex: 0.35 }}>
                <span>R$2,999,00</span>
              </section>

              <section className="center" style={{ flex: 0.75 }}>
                <AiFillEye size={24} />
              </section>

              <button className="statusButton" style={{ flex: 0.75 }}>
                Processando
              </button>
            </OrderBody>

            <OrderBody>
              <section style={{ flex: 0.5 }}>
                <span>21/12/21</span>
              </section>

              <section style={{ flex: 0.75 }}>
                <span>54141af-456qwa</span>
              </section>

              <section style={{ flex: 0.35 }}>
                <span>R$2,999,00</span>
              </section>

              <section className="center" style={{ flex: 0.75 }}>
                <AiFillEye size={24} />
              </section>

              <button className="statusButton recived" style={{ flex: 0.75 }}>
                Recebido
              </button>
            </OrderBody>

            <OrderBody>
              <section style={{ flex: 0.5 }}>
                <span>21/12/21</span>
              </section>

              <section style={{ flex: 0.75 }}>
                <span>54141af-456qwa</span>
              </section>

              <section style={{ flex: 0.35 }}>
                <span>R$2,999,00</span>
              </section>

              <section className="center" style={{ flex: 0.75 }}>
                <AiFillEye size={24} />
              </section>

              <button className="statusButton" style={{ flex: 0.75 }}>
                Processando
              </button>
            </OrderBody>

            <OrderBody>
              <section style={{ flex: 0.5 }}>
                <span>21/12/21</span>
              </section>

              <section style={{ flex: 0.75 }}>
                <span>54141af-456qwa</span>
              </section>

              <section style={{ flex: 0.35 }}>
                <span>R$2,999,00</span>
              </section>

              <section className="center" style={{ flex: 0.75 }}>
                <AiFillEye size={24} />
              </section>

              <button className="statusButton confirm" style={{ flex: 0.75 }}>
                Confirmado
              </button>
            </OrderBody>

            <OrderBody>
              <section style={{ flex: 0.5 }}>
                <span>21/12/21</span>
              </section>

              <section style={{ flex: 0.75 }}>
                <span>54141af-456qwa</span>
              </section>

              <section style={{ flex: 0.35 }}>
                <span>R$2,999,00</span>
              </section>

              <section className="center" style={{ flex: 0.75 }}>
                <AiFillEye size={24} />
              </section>

              <button className="statusButton refused" style={{ flex: 0.75 }}>
                Cancelado
              </button>
            </OrderBody>

            <OrderBody>
              <section style={{ flex: 0.5 }}>
                <span>21/12/21</span>
              </section>

              <section style={{ flex: 0.75 }}>
                <span>54141af-456qwa</span>
              </section>

              <section style={{ flex: 0.35 }}>
                <span>R$2,999,00</span>
              </section>

              <section className="center" style={{ flex: 0.75 }}>
                <AiFillEye size={24} />
              </section>

              <button className="statusButton confirm" style={{ flex: 0.75 }}>
                Confirmado
              </button>
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
