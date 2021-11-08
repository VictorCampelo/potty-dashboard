import HeaderShop from '../../components/molecules/HeaderShop'
import Head from 'next/head'

import { CheckboxFilter } from '../../components/atoms/CheckboxFilter'
import {
  AiFillFacebook,
  AiFillPhone,
  AiFillStar,
  AiOutlineWhatsApp,
  AiOutlineSearch,
  AiOutlineExpand,
  AiOutlineStar
} from 'react-icons/ai'
import {
  CategoriesCard,
  Container,
  DescriptionCard,
  DescriptionShop,
  FilterCard,
  FilterCardSecondary,
  Footer,
  InfoSerch,
  Page,
  ProductCard,
  StatusCard,
  TopoPage,
  FilterCardTertiary,
  HorizonCard
} from '../../styles/pages/Store'
import { useState } from 'react'
import router from 'next/router'

const Products = () => {
  const [buttonOn, setButtonOn] = useState(true)

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
    }
  ]

  function handleOpenProduct(id) {
    router.push(`store/product/${id}`)
  }

  return (
    <Page>
      <Head>
        <title>Loja | Último</title>
      </Head>

      <TopoPage>
        <img src="./images/capa.png" alt="capa" />
        <HeaderShop />
      </TopoPage>

      <InfoSerch>
        <div className="input">
          <AiOutlineSearch id="search" />
          <input placeholder="Pesquisar na loja" />
        </div>
        <div className="body">
          <DescriptionShop>
            <div className="top">
              <img src="./images/logoLoja.svg" alt="perfil" />
              <div className="title">
                <h1>ELETRO DEL</h1>
                <div className="stars">
                  <AiFillStar id="star" />
                  <AiFillStar id="star" />
                  <AiFillStar id="star" />
                  <AiFillStar id="star" />
                  <AiFillStar id="star" />
                  <h2>(1598)</h2>
                </div>
              </div>
            </div>
            <p>
              Conheça os mais variados tipos de eletrodomésticos e móveis pelo
              melhor preço e diversidade da região! Além disso, temos a entrega
              mais eficiente de toda a micro-região de Picos. Escolha seus
              produtos e entre...
            </p>
          </DescriptionShop>

          <StatusCard>
            <div className="status">
              <span>Detalhes</span>
            </div>
            <div className="body">
              <div className="info-produto">
                <div className="left-part">
                  <img src="./images/caixa.svg" alt="icon" />
                  <h2>Quantidade de Produtos:</h2>
                </div>
                <span>452</span>
              </div>
              <div className="info-produto">
                <div className="left-part">
                  <img src="./images/sacola.svg" alt="icon" />
                  <h2>Quantidade de vendas:</h2>
                </div>
                <span>263</span>
              </div>
              <div className="info-produto">
                <div className="left-part">
                  <img src="./images/loja.svg" alt="icon" />
                  <h2>Loja cadastrada no site há:</h2>
                </div>
                <span>1 ano</span>
              </div>
              <div className="info-produto">
                <div className="left-part">
                  <img src="./images/estrela.svg" alt="icon" />
                  <h2>Quantidade de avaliações:</h2>
                </div>
                <span>2568</span>
              </div>
            </div>
          </StatusCard>

          <StatusCard>
            <div className="status">
              <div className="statusDot" />
              <span>Aberto agora</span>
            </div>
            <div className="text">
              <p>
                Hoje: <br />
                7h às 12h <br />
                13h às 18h <br />
              </p>
            </div>
          </StatusCard>
        </div>
      </InfoSerch>

      <Container>
        <section className="productsContainer">
          <div className="products">
            <div className="filterWrapper">
              <FilterCard>
                <span className="orderBy">Ordenar por: </span>

                <button>
                  <span className="item active">Melhor resultado</span>
                </button>

                <button>
                  <span className="item">Mais pedidos</span>
                </button>

                <button>
                  <span className="item">Mais recente</span>
                </button>

                <button>
                  <span className="item">Preço</span>
                </button>
              </FilterCard>

              <FilterCardSecondary>
                <CheckboxFilter confirm={false} toggleConfirm={() => {}}>
                  <AiFillStar size={24} color="var(--gold)" />
                  <label>4.0 ou mais</label>
                </CheckboxFilter>

                <CheckboxFilter confirm={true} toggleConfirm={() => {}}>
                  <label>Frete grátis</label>
                </CheckboxFilter>
              </FilterCardSecondary>

              <FilterCardTertiary>
                <button id="button-left" onClick={() => setButtonOn(true)}>
                  <img
                    src={
                      buttonOn
                        ? './images/quadro.svg'
                        : './images/quadroOff.svg'
                    }
                    alt="button"
                  />
                </button>
                <hr />
                <button id="button-right" onClick={() => setButtonOn(false)}>
                  <img
                    src={
                      buttonOn ? './images/stack.svg' : './images/stackOn.svg'
                    }
                    alt="button"
                  />
                </button>
              </FilterCardTertiary>
            </div>

            <div className="bottom">
              <div className="categoriesContainer">
                <CategoriesCard>
                  <div className="title">
                    <span>Categorias da loja:</span>
                  </div>

                  <div className="item">
                    <a>Todas as categorias</a>
                  </div>

                  <div className="item">
                    <a>Cozinha</a>
                  </div>

                  <div className="item">
                    <a>Quartos</a>
                  </div>

                  <div className="item">
                    <a className="active">Sala de estar</a>
                  </div>

                  <div className="item">
                    <a>Escritório</a>
                  </div>
                </CategoriesCard>
              </div>

              <div className="productWrapper">
                {buttonOn ? (
                  <>
                    {fakeProducts.map((e) => {
                      return (
                        <ProductCard
                          key={e.id}
                          onClick={() => handleOpenProduct(1)}
                        >
                          <img
                            src="https://brastemp.vtexassets.com/arquivos/ids/213732/Geladeira-BRE80AK-Frontal.jpg?v=637298140570900000"
                            alt="geladeira frost free"
                          />
                          <span className="title">
                            Refrigerador Brastemp BRM44HK
                          </span>
                          <div className="price">
                            <span>R$ 2.999,00</span>
                            <small>R$ 4.999,00</small>
                          </div>
                          <div className="score">
                            <AiFillStar size={18} color="var(--gold)" />
                            <span>5.0 | 5412 Pedidos</span>
                          </div>
                          <p>
                            Refrigerador Brastemp BRM44HK Frost Free com Gavetão
                            de Legumes Fresh Zone Inox - 375L
                          </p>
                        </ProductCard>
                      )
                    })}
                  </>
                ) : (
                  <div className="horizon">
                    {fakeProducts.map((e) => {
                      return (
                        <HorizonCard
                          key={e.id}
                          onClick={() => handleOpenProduct(1)}
                        >
                          <img
                            src="https://brastemp.vtexassets.com/arquivos/ids/213732/Geladeira-BRE80AK-Frontal.jpg?v=637298140570900000"
                            alt="geladeira frost free"
                          />
                          <div className="infos">
                            <span className="title">
                              Refrigerador Brastemp BRM44HK
                            </span>
                            <div className="score">
                              <AiFillStar size={18} color="var(--gold)" />
                              <span>5.0 | 5412 Pedidos</span>
                            </div>

                            <div className="price">
                              <span>R$ 2.999,00</span>
                              <small>R$ 4.999,00</small>
                            </div>

                            <p>
                              Refrigerador Brastemp BRM44HK Frost Free com
                              Gavetão de Legumes Fresh Zone Inox - 375L
                            </p>
                          </div>
                        </HorizonCard>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

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
      </Container>
    </Page>
  )
}

export default Products
