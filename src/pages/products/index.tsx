import Header from "../../components/molecules/Header";
import Head from "next/head";
import { CategoriesCard, Container, DescriptionCard, FilterCard, FilterCardSecondary, Footer, ProductCard, StatusCard } from "../../styles/pages/Products";
import { CheckboxFilter } from "../../components/atoms/CheckboxFilter";
import { AiFillFacebook, AiFillPhone, AiFillStar, AiOutlineWhatsApp } from "react-icons/ai";

const Products = () => {
  return (
    <>
      <Head>
        <title>Products | Último</title>
      </Head>

      <Header/>
      <Container>
        <section className="descriptionContainer">
          <DescriptionCard >
            <img src="https://img.elo7.com.br/product/zoom/315F8D5/logo-loja-semi-pronta-logomarca.jpg" alt="logo" />

            <p>
              Conheça os mais variados tipos de eletrodomésticos e móveis pelo melhor preço e diversidade da região!
              {' '}<a>ver mais</a>
            </p>


          </DescriptionCard>
          <StatusCard>
            <div className="status">
              <div className="statusDot" />
              <span>
                Aberto agora
              </span>
            </div>
            <div className="text">
              <p>
                Hoje: <br/>
                7h às 12h <br/>
                13h às 18h <br/>
              </p>
            </div>
          </StatusCard>
        </section>

        <section className="productsContainer">
          <div className="categoriesContainer">
            <CategoriesCard>
              <div className="title">
                <span>
                  Categorias da loja:
                </span>
              </div>

              <div className="item">
                <a>
                  Todas as categorias
                </a>
              </div>

              <div className="item">
                <a>
                  Cozinha
                </a>
              </div>

              <div className="item">
                <a>
                  Quartos
                </a>
              </div>

              <div className="item">
                <a className="active">
                  Sala de estar
                </a>
              </div>
            </CategoriesCard>
          </div>

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
                <CheckboxFilter  confirm={false} toggleConfirm={() => {}} >
                  <AiFillStar size={24} color="var(--gold)" />
                  <label>4.0 ou mais</label>
                </CheckboxFilter>

                <CheckboxFilter confirm={true} toggleConfirm={() => {}}>
                  <label>Frete grátis</label>
                </CheckboxFilter>
              </FilterCardSecondary>
            </div>

            <div className="productWrapper">
              <ProductCard>
                <img src="https://brastemp.vtexassets.com/arquivos/ids/213732/Geladeira-BRE80AK-Frontal.jpg?v=637298140570900000" alt="geladeira frost free" />
                <span className="title">Refrigerador Brastemp BRM44HK</span>
                <div className="price">
                  <span>
                    R$ 2.999,00
                  </span>  
                  <small>
                    R$ 4.999,00
                  </small>
                </div>
                <div className="score">
                  <AiFillStar size={18} color="var(--gold)" />
                  <span>
                    5.0 | 5412 Pedidos
                  </span>
                </div>
                <p>
                  Refrigerador Brastemp BRM44HK Frost Free com Gavetão de Legumes Fresh Zone Inox - 375L
                </p>
              </ProductCard>
              <ProductCard>
                <img src="https://brastemp.vtexassets.com/arquivos/ids/213732/Geladeira-BRE80AK-Frontal.jpg?v=637298140570900000" alt="geladeira frost free" />
                <span className="title">Refrigerador Brastemp BRM44HK</span>
                <div className="price">
                  <span>
                    R$ 2.999,00
                  </span>  
                  <small>
                    R$ 4.999,00
                  </small>
                </div>
                <div className="score">
                  <AiFillStar size={18} color="var(--gold)" />
                  <span>
                    5.0 | 5412 Pedidos
                  </span>
                </div>
                <p>
                  Refrigerador Brastemp BRM44HK Frost Free com Gavetão de Legumes Fresh Zone Inox - 375L
                </p>
              </ProductCard>
              <ProductCard>
                <img src="https://brastemp.vtexassets.com/arquivos/ids/213732/Geladeira-BRE80AK-Frontal.jpg?v=637298140570900000" alt="geladeira frost free" />
                <span className="title">Refrigerador Brastemp BRM44HK</span>
                <div className="price">
                  <span>
                    R$ 2.999,00
                  </span>  
                  <small>
                    R$ 4.999,00
                  </small>
                </div>
                <div className="score">
                  <AiFillStar size={18} color="var(--gold)" />
                  <span>
                    5.0 | 5412 Pedidos
                  </span>
                </div>
                <p>
                  Refrigerador Brastemp BRM44HK Frost Free com Gavetão de Legumes Fresh Zone Inox - 375L
                </p>
              </ProductCard>             
              <ProductCard>
                <img src="https://brastemp.vtexassets.com/arquivos/ids/213732/Geladeira-BRE80AK-Frontal.jpg?v=637298140570900000" alt="geladeira frost free" />
                <span className="title">Refrigerador Brastemp BRM44HK</span>
                <div className="price">
                  <span>
                    R$ 2.999,00
                  </span>  
                  <small>
                    R$ 4.999,00
                  </small>
                </div>
                <div className="score">
                  <AiFillStar size={18} color="var(--gold)" />
                  <span>
                    5.0 | 5412 Pedidos
                  </span>
                </div>
                <p>
                  Refrigerador Brastemp BRM44HK Frost Free com Gavetão de Legumes Fresh Zone Inox - 375L
                </p>
              </ProductCard>
              <ProductCard>
                <img src="https://brastemp.vtexassets.com/arquivos/ids/213732/Geladeira-BRE80AK-Frontal.jpg?v=637298140570900000" alt="geladeira frost free" />
                <span className="title">Refrigerador Brastemp BRM44HK</span>
                <div className="price">
                  <span>
                    R$ 2.999,00
                  </span>  
                  <small>
                    R$ 4.999,00
                  </small>
                </div>
                <div className="score">
                  <AiFillStar size={18} color="var(--gold)" />
                  <span>
                    5.0 | 5412 Pedidos
                  </span>
                </div>
                <p>
                  Refrigerador Brastemp BRM44HK Frost Free com Gavetão de Legumes Fresh Zone Inox - 375L
                </p>
              </ProductCard>
              <ProductCard>
                <img src="https://brastemp.vtexassets.com/arquivos/ids/213732/Geladeira-BRE80AK-Frontal.jpg?v=637298140570900000" alt="geladeira frost free" />
                <span className="title">Refrigerador Brastemp BRM44HK</span>
                <div className="price">
                  <span>
                    R$ 2.999,00
                  </span>  
                  <small>
                    R$ 4.999,00
                  </small>
                </div>
                <div className="score">
                  <AiFillStar size={18} color="var(--gold)" />
                  <span>
                    5.0 | 5412 Pedidos
                  </span>
                </div>
                <p>
                  Refrigerador Brastemp BRM44HK Frost Free com Gavetão de Legumes Fresh Zone Inox - 375L
                </p>
              </ProductCard>
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
    </>
  );
};

export default Products;