import Head from 'next/head'
import Header from '../components/molecules/HeaderShop'

import styled from 'styled-components'
import Carousel from 'components/atoms/Carousel'
import { Footer } from 'styles/pages/Product'
import {
  AiFillFacebook,
  AiFillPhone,
  AiOutlineWhatsApp,
  AiOutlineSearch
} from 'react-icons/ai'

import { Button } from 'components/atoms/Button'
import { api } from 'services/apiClient'
import router from 'next/router'
import { Input } from 'components/molecules/Input'
import { CardServices } from 'components/molecules/CardServices'

interface Landing {
  stores: []
}

const Landing = ({ stores }: Landing) => {
  return (
    <Wrapper>
      <Head>
        <title>Landing | Último</title>
      </Head>

      <Header />

      <Container>
        <Banner>
          {/* <SelectInput type="text" /> */}
          <img
            src="/images/logo2.svg"
            alt="banner"
            width={319.19}
            height={185.22}
          />
        </Banner>

        <Content
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingLeft: '8rem',
            paddingRight: '8rem'
          }}
        >
          <div className="search-boxes">
            <Input
              type="text"
              placeholder="Pesquise por produto, serviço, estabelecimento ou cidade"
              icon={<AiOutlineSearch size={25} />}
              search
            />
          </div>

          <CardServices />

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
        </Content>

        {/* <Content style={{ maxWidth: '100%', paddingLeft: 0 }}>
          <section className="description">
            <img src="/images/people.png" alt="People" />

            <div className="description-text">
              <h1>Divulgue facilmente seus produtos e serviços </h1>
              <span>
                O Piauí Delivery é a forma mais rápida do seu negócio ser visto
                no mundo digital. A plataforma funciona como um catálogo online
                de todos os estabelecimentos no Piauí que trabalham com
                entregas.
              </span>

              <div className="button-container">
                <Button
                  onClick={() => {
                    router.push('/cadastro/lojista')
                  }}
                  title="Cadastrar loja"
                />
              </div>
            </div>
          </section>
        </Content> */}

        <Footer>
          <div>
            <h1>Contato</h1>

            <span>
              <AiFillPhone size={24} color="var(--gray-700)" />
              (89) 99444-5552
            </span>

            <span>
              <AiOutlineWhatsApp size={24} color="var(--gray-700)" />
              Whatsapp
            </span>

            <a href="facebook.com">
              <AiFillFacebook size={24} color="var(--gray-700)" />
              Facebook
            </a>
          </div>
          <div className="mapContainer">
            <img src="/images/map.png" />
          </div>
        </Footer>
      </Container>
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
  width: 100%;
  /* height: 100%; */
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

export const Content = styled.section`
  max-width: 1420px;
  height: 100%;
  width: 100%;
  /* padding: 3rem 3rem; */

  .search-boxes {
    width: 100%;
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
    justify-content: center;
  }

  .carousel-container {
    width: 100%;
    margin-top: 4rem;
  }

  .carousel-item {
    width: 100%;
    margin-bottom: 3rem;

    .title {
      font-size: 1.5rem;
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
      height: auto;
      max-width: 550px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        font-size: 2rem;
      }

      span {
        font-size: 1.25rem;
      }

      h1,
      span {
        margin-bottom: 2rem !important;
      }
    }
  }
`

export const Banner = styled.section`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  padding: 1.5rem 4rem;
  /* background: var(--color-primary); */
`

export const SelectInput = styled.input`
  background: white;
  border: none;
  height: 48px;
  max-width: 1420px;
  width: 100%;
  border-radius: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 0 1.5rem;
`

export const Select = styled.select`
  background: white;
  border: none;
  height: 60px;
  max-width: 1420px;
  width: 100%;
  border-radius: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 0 1.5rem;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`

export default Landing
