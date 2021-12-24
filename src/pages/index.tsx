import Head from 'next/head'
import Header from '../components/molecules/HeaderShop'

import styled from 'styled-components'
import Carousel from 'components/atoms/Carousel'
import { Footer } from 'styles/pages/Product'
import {
  AiFillFacebook,
  AiFillPhone,
  AiOutlineWhatsApp,
  AiOutlineSearch,
  AiOutlineRight
} from 'react-icons/ai'

import { Button } from 'components/atoms/Button'
import { api } from 'services/apiClient'
import router from 'next/router'
import { Input } from 'components/molecules/Input'
import { CardServices } from 'components/molecules/CardServices'
import sizes from 'utils/sizes'
import { useContext } from 'react'
import { CartContext } from 'contexts/CartContext'

interface Landing {
  stores: []
}

const Landing = ({ stores }: Landing) => {
  const { items } = useContext(CartContext)

  const total = items.reduce((prev, curr) => {
    return prev + Number(curr.price) * Number(curr.amount)
  }, 0)

  return (
    <Wrapper>
      <Head>
        <title>Home | Boa de Venda</title>
      </Head>

      <Header />

      <Container>
        <Banner>
          <img
            src="/images/logo2.svg"
            alt="banner"
            width={319.19}
            height={185.22}
          />
        </Banner>

        <ContentProduct>
          <div className="search-boxes">
            <Input
              type="text"
              placeholder="Pesquise por produto, serviço, estabelecimento ou cidade"
              icon={<AiOutlineSearch size={25} />}
              search
            />
          </div>

          <CardServices />
          <MoreCategory>
            <p>Ver todas as categorias</p>
            <AiOutlineRight size={25} color="var(--color-primary)" />
          </MoreCategory>
          {stores.length !== 0 && (
            <>
              <div className="carousel-container">
                <div className="carousel-item">
                  <span className="title">Em promoção</span>
                  <Carousel data={stores} isProduct promo />
                </div>

                <div className="carousel-item">
                  <span className="title">Veja as últimas novidades</span>
                  <Carousel data={stores} isProduct />
                </div>
              </div>
              <h1 style={{ alignSelf: 'flex-start' }}>Lojas</h1>
              <div className="carousel-container" style={{ marginTop: '2rem' }}>
                <div className="carousel-item">
                  <span className="title">Eletrônicos e eletrodomésticos</span>

                  <Carousel data={stores} />
                </div>

                <div className="carousel-item">
                  <span className="title">Restaurantes</span>
                  <Carousel data={stores} />
                </div>
              </div>
            </>
          )}
        </ContentProduct>

        <Footer>
          <div>
            <h1>Boa de Venda</h1>
            <span>CNPJ: 26.745.054/0001-70</span>
            <h1>Contato</h1>

            <span>
              <AiFillPhone size={24} color="var(--gray-700)" />
              +55 (86) 9 8178-9622
            </span>

            <span>
              <AiOutlineWhatsApp size={24} color="var(--gray-700)" />
              Whatsapp
            </span>

            <ContainerTerms>
              <a href=""><span>Termos de Uso e Políticas de Privacidade</span></a>
              <span>Copyright ©️ 2021 | Sino – Marketing & Tecnologia</span>
            </ContainerTerms>
          </div>
        </Footer>
      </Container>

      <ContainerCart onClick={() => router.push('/cart')}>
        <div className="cart-container">
          <img src="/images/cartIcon.png" alt="Cart" />
          <div className="product-len">{items.length}</div>
        </div>

        {items.length > 0 && (
          <p>
            {' | '} R$ {total.toFixed(2)}
          </p>
        )}
      </ContainerCart>
    </Wrapper>
  )
}

export const getServerSideProps = async (ctx) => {
  const { data } = await api.get('stores')

  return {
    props: {
      stores: data
    }
  }
}

export const ContainerCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  border: none;
  right: var(--spacing-lg);
  bottom: var(--spacing-lg);
  background: var(--color-primary);
  height: 62px;

  color: var(--white);
  border-radius: var(--border-radius-gg);
  padding: 0 var(--spacing-xxs);
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);

  ${[sizes.down('lgMob')]} {
    right: var(--spacing-xxs);
    bottom: var(--spacing-xs);
  }

  p {
    margin-left: var(--spacing-xxxs);
    color: var(--white);
    font-size: var(--font-size-xxs);
  }

  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;

    img {
      width: 30px;
      height: 30px;
    }
  }

  .product-len {
    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--color-secondary);
    position: absolute;
    padding: 0 var(--spacing-nano);
    top: var(--spacing-nano);
    right: -10px;
    color: var(--white);

    font-size: var(--font-size-xxxxs);
    border-radius: var(--border-radius-sm);
  }
`

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background: var(--gray-100);
`

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`

export const Content = styled.section`
  max-width: 1420px;
  height: 100%;
  width: 100%;

  .search-boxes {
    width: 100%;
    display: flex;
    gap: 2rem;
    margin-top: var(--spacing-xxxs);
    justify-content: center;
  }

  .carousel-container {
    width: 100%;
    margin-top: var(--spacing-lg);
  }

  .carousel-item {
    width: 100%;
    margin-bottom: var(--spacing-md);

    .title {
      font-size: var(--font-size-md);
    }
  }

  .description {
    width: 100%;
    display: flex;
    gap: 3rem;

    img {
      height: 600px;
    }

    .description-text {
      display: flex;
      flex-direction: column;
      justify-content: center;

      height: auto;
      max-width: 550px;

      h1 {
        font-size: var(--font-size-xlg);
      }

      span {
        font-size: var(--font-size-sm);
      }

      h1,
      span {
        margin-bottom: var(--font-size-xlg) !important;
      }
    }
  }
`
export const ContentProduct = styled(Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8rem 0 8rem;

  ${[sizes.down('lgMob')]} {
    padding: 0 var(--font-size-xlg) 0 var(--font-size-xlg);
  }
`

export const Banner = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 250px;

  padding: var(--font-size-md) var(--font-size-xxxxl);
`

export const SelectInput = styled.input`
  background: var(--white);
  border: none;
  height: 48px;
  max-width: 1420px;
  width: 100%;
  border-radius: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 0 var(--font-size-md);
`

export const Select = styled.select`
  background: var(--white);
  border: none;
  height: 60px;
  max-width: 1420px;
  width: 100%;
  border-radius: var(--border-radius-gg);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 0 var(--spacing-xxs);
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`

export const ContainerTerms = styled.div`
  padding-top: var(--spacing-xs);
`

export const MoreCategory = styled.div`
  display: flex;
  margin-top: var(--spacing-xs);
  align-self: flex-end;
  cursor: pointer;

  p {
    color: var(--color-primary);
    font-weight: var(--font-weight-bold);

    :hover {
      text-decoration: underline;
    }
  }
`

export default Landing
