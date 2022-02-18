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

import { api } from 'services/apiClient'
import { Input } from 'components/molecules/SearchInput'
import { CardServices } from 'components/molecules/CardServices'
import MapBdv from 'components/molecules/MapBdv'
import sizes from 'utils/sizes'
import { CartButton } from 'components/atoms/CartButton'
import useMedia from 'use-media'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { Drawer } from 'styles/pages/Store'
import { IoIosClose } from 'react-icons/io'
import router from 'next/router'

interface Landing {
  stores: []
}

const Landing = ({ stores }: Landing) => {
  const widthScreen = useMedia({ minWidth: '426px' })
  const [drawerActive, setDrawerActive] = useState(false)
  return (
    <Wrapper>
      <Head>
        <title>Home | Boa de Venda</title>
      </Head>

      <Header />

      <Container>
        {!widthScreen && (
          <HeaderMob>
            <GiHamburgerMenu
              onClick={() => setDrawerActive(true)}
              size={24}
              color="black"
            />

            <Drawer className={drawerActive && 'active'}>
              <ul className="content">
                <div
                  className="close-btn"
                  onClick={() => setDrawerActive(false)}
                >
                  <IoIosClose size={30} color={'#363F4E'} />
                </div>
                <li onClick={() => router.push('/login')}>Fazer Login</li>
                <li onClick={() => router.push('/cadastro')}>Fazer Cadastro</li>
                <li onClick={() => router.push('/')}>Fazer logoff</li>
              </ul>
              <div className="outside" onClick={() => setDrawerActive(false)} />
            </Drawer>
          </HeaderMob>
        )}
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
              <a href="">
                <span>Termos de Uso e Políticas de Privacidade</span>
              </a>
              <span>Copyright ©️ 2021 | Sino – Marketing & Tecnologia</span>
            </ContainerTerms>
          </div>
          <MapBdv />
        </Footer>
      </Container>

      <CartButton />
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

  ${[sizes.down('lgMob')]} {
    height: 150px;
    img {
      width: 171.19px;
      height: 99.34px;
    }
  }
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
export const HeaderMob = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  padding: 0 1.25rem;

  svg {
    margin-right: 1rem;
    flex: none;
  }

  input {
    flex: 1;
    height: 36px;
    padding: 0 1rem;
    border-radius: 40px;
    border: 1px solid var(--gray-700);
  }
`

export default Landing
