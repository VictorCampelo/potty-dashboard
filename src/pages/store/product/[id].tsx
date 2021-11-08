import { Input } from '../../../components/molecules/Input'
import Head from 'next/head'
import { FaSearch } from 'react-icons/fa'
import {
  Container,
  CardProduct,
  CardDesc,
  ProductWrapper,
  Footer,
  FilterCard
} from '../../../styles/pages/Product'
import Header from '../../../components/molecules/Header/index'
import React, { useState } from 'react'
import ReactStars from 'react-stars'
import CatalogTabs from '../../../components/molecules/CatalogTabs'
import CardFeedback from '../../../components/molecules/CardFeedback'
import { ProductCard } from '../../../styles/pages/Store'
import {
  AiFillFacebook,
  AiFillPhone,
  AiFillStar,
  AiOutlineWhatsApp
} from 'react-icons/ai'
import router from 'next/router'
import { CheckboxFilter } from '../../../components/atoms/CheckboxFilter'
import HeaderShop from 'components/molecules/HeaderShop'

const fakeFeedBack = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
  {
    id: 6
  }
]

const fakeProducts = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
  {
    id: 6
  },
  {
    id: 7
  },
  {
    id: 8
  }
]

const images = [
  {
    title: 'Foto 1',
    original:
      'https://a-static.mlcdn.com.br/1500x1500/geladeira-brastemp-frost-free-bre57-443l-220v-branco/madeiramadeira-openapi/311837/d583f95f19ffbab9ee844a469909052a.jpg',
    thumbnail:
      'https://a-static.mlcdn.com.br/200x200/geladeira-brastemp-frost-free-bre57-443l-220v-branco/madeiramadeira-openapi/311837/d583f95f19ffbab9ee844a469909052a.jpg'
  },
  {
    title: 'Foto 2',
    original:
      'https://a-static.mlcdn.com.br/1500x1500/geladeira-brastemp-frost-free-bre57-443l-220v-branco/madeiramadeira-openapi/311837/16cfcfb8ab328d6ce5e19bd1deb5e651.jpg',
    thumbnail:
      'https://a-static.mlcdn.com.br/200x200/geladeira-brastemp-frost-free-bre57-443l-220v-branco/madeiramadeira-openapi/311837/16cfcfb8ab328d6ce5e19bd1deb5e651.jpg'
  },
  {
    title: 'Foto 3',
    original:
      'https://a-static.mlcdn.com.br/1500x1500/geladeira-brastemp-frost-free-bre57-443l-220v-branco/madeiramadeira-openapi/311837/e82ef77fcefc0aff7ce228350d02e838.jpg',
    thumbnail:
      'https://a-static.mlcdn.com.br/200x200/geladeira-brastemp-frost-free-bre57-443l-220v-branco/madeiramadeira-openapi/311837/e82ef77fcefc0aff7ce228350d02e838.jpg'
  }
]

const ProductShow = () => {
  const [imagePreview, setImagePreview] = useState(images[0].original)
  const [imagePreviewDesc, setImagePreviewDesc] = useState(images[0].original)
  const [toggleState, setToggleState] = useState(1)

  function handleOpenProduct(id) {
    router.push(`/product/${id}`)
  }

  return (
    <>
      <Head>
        <title>Produto | Último</title>
      </Head>

      <HeaderShop />
      <Container>
        <header className="header">
          <Input icon={<FaSearch />} placeholder="Pesquisar na loja" />
        </header>
        <main className="body">
          <CardProduct>
            <div className="image-container">
              <div className="list-images">
                {images.map((data) => {
                  return (
                    <>
                      <img
                        onClick={(e) => setImagePreview(data.original)}
                        src={data.thumbnail}
                        alt={data.title}
                      />
                    </>
                  )
                })}
              </div>
              <img src={imagePreview} alt="Foto do produto" />
            </div>
            <div className="description-container">
              <h1 className="title">
                Geladeira Brastemp Brm44hk Frost Free Duplex 375l Com
                Compartimento Extrafrio Fresh Zone Inox - 110v
              </h1>
              <div className="desc">
                <ReactStars count={1} size={23} value={1} edit={false} />
                <p>5.0</p>
                <p>2265 avaliações</p>
                <p>5368 pedidos</p>
              </div>

              <div className="price-container">
                <div className="descont">
                  <h4>R$ 3.999,00</h4>
                  <div>-25%</div>
                </div>
                <h1>R$ 2.999,00</h1>
              </div>
              <div className="button-container">
                <button>COMPRAR AGORA</button>
                <button>ADICIONAR AO CARRINHO</button>
              </div>
            </div>
          </CardProduct>
          <CardDesc>
            <CatalogTabs
              tab1="Descrição"
              tab2="Avaliação"
              setToggleState={setToggleState}
              toggleState={toggleState}
              content1={
                <>
                  <div className="description-container">
                    <div className="left-container">
                      <div className="image-container">
                        <div className="list-images">
                          {images.map((data) => {
                            return (
                              <>
                                <img
                                  onClick={(e) =>
                                    setImagePreviewDesc(data.original)
                                  }
                                  src={data.thumbnail}
                                  alt={data.title}
                                />
                              </>
                            )
                          })}
                        </div>
                        <img src={imagePreviewDesc} alt="Foto do produto" />
                      </div>
                    </div>
                    <div className="right-container">
                      <h1>Capacidade de 334 litros e prateleiras removíveis</h1>
                      <p>
                        Geladeira/Refrigerador Brastemp Frost Free Inverse -
                        Branca 443L com Turbo Ice BRE57 ABANA
                        <br />
                        <br /> A Geladeira Brastemp Inverse Frost Free BRE57 443
                        litros tem refrigerador em cima e freezer embaixo,
                        deixando os alimentos mais utilizados sempre à mão. Com
                        a função Turbo Ice, faça gelo mais rápido sempre que
                        precisar. O modelo conta com Twist Ice, um exclusivo
                        sistema que permite abastecer as formas de gelo de um
                        jeito inteligente, evitando molhar o chão da cozinha,
                        além de desenformar o gelo facilmente e armazená-lo em
                        um recipiente portátil e prático, e Espaço Adapt,
                        prateleiras com múltiplas combinações possíveis para
                        armazenar itens de diversos tamanhos na porta de sua
                        geladeira.
                      </p>
                    </div>
                  </div>
                </>
              }
              content2={
                <>
                  <div className="rated-container">
                    <header>
                      <h1 className="rate">Avaliações de Clientes</h1>
                      <div>
                        <h1>5.0</h1>
                        <ReactStars
                          count={5}
                          size={50}
                          value={5}
                          edit={false}
                        />
                      </div>
                      <p>(2265 avaliações)</p>
                    </header>
                    <div className="container">
                      <div className="left-container">
                        {fakeFeedBack.map((e) => {
                          return (
                            <CardFeedback
                              key={e.id}
                              name="Henrique Soares"
                              quantStar={5} //max stars is 5
                              text="Entrega extremamente rápida, entregador educado e gentil, produto exatamente como o descrito. Parabéns! Com certeza voltarei a comprar!"
                              time="30/09/2021"
                              width={850}
                            />
                          )
                        })}
                      </div>
                      <div className="right-container">
                        <FilterCard>
                          <div className="filter">
                            <h1>Ordenar</h1>
                            <h4>Recente</h4>
                            <h4>Melhor avaliação</h4>
                            <h4>Pior avaliação</h4>
                            <h1>Filtros</h1>
                            <div>
                              <CheckboxFilter
                                confirm={false}
                                toggleConfirm={() => {}}
                              >
                                <ReactStars
                                  color1="#e9e9e9"
                                  count={5}
                                  size={24}
                                  value={5}
                                  edit={false}
                                />
                              </CheckboxFilter>
                              <CheckboxFilter
                                confirm={false}
                                toggleConfirm={() => {}}
                              >
                                <ReactStars
                                  color1="#e9e9e9"
                                  count={5}
                                  size={24}
                                  value={4}
                                  edit={false}
                                />
                              </CheckboxFilter>
                              <CheckboxFilter
                                confirm={false}
                                toggleConfirm={() => {}}
                              >
                                <ReactStars
                                  color1="#e9e9e9"
                                  count={5}
                                  size={24}
                                  value={3}
                                  edit={false}
                                />
                              </CheckboxFilter>
                              <CheckboxFilter
                                confirm={false}
                                toggleConfirm={() => {}}
                              >
                                <ReactStars
                                  color1="#e9e9e9"
                                  count={5}
                                  size={24}
                                  value={2}
                                  edit={false}
                                />
                              </CheckboxFilter>
                              <CheckboxFilter
                                confirm={false}
                                toggleConfirm={() => {}}
                              >
                                <ReactStars
                                  color1="#e9e9e9"
                                  count={5}
                                  size={24}
                                  value={1}
                                  edit={false}
                                />
                              </CheckboxFilter>
                            </div>
                          </div>
                        </FilterCard>
                      </div>
                    </div>
                  </div>
                </>
              }
            />
          </CardDesc>
          <ProductWrapper>
            {fakeProducts.map((e) => {
              return (
                <ProductCard key={e.id} onClick={(e) => handleOpenProduct(e)}>
                  <img
                    src="https://brastemp.vtexassets.com/arquivos/ids/213732/Geladeira-BRE80AK-Frontal.jpg?v=637298140570900000"
                    alt="geladeira frost free"
                  />
                  <span className="title">Refrigerador Brastemp BRM44HK</span>
                  <div className="price">
                    <span>R$ 2.999,00</span>
                    <small>R$ 4.999,00</small>
                  </div>
                  <div className="score">
                    <AiFillStar size={18} color="var(--gold)" />
                    <span>5.0 | 5412 Pedidos</span>
                  </div>
                  <p>
                    Refrigerador Brastemp BRM44HK Frost Free com Gavetão de
                    Legumes Fresh Zone Inox - 375L
                  </p>
                </ProductCard>
              )
            })}
          </ProductWrapper>
          <Footer>
            <h1>Contato</h1>
            <span>
              <AiFillPhone size={24} color="var(--gray-700)" />
              (89) 8854-2341
            </span>

            <span>
              <AiOutlineWhatsApp size={24} color="var(--gray-700)" />
              (89) 8854-2341
            </span>

            <a href="facebook.com">
              <AiFillFacebook size={24} color="var(--gray-700)" />
              Facebook
            </a>
          </Footer>
        </main>
      </Container>
    </>
  )
}

export default ProductShow
