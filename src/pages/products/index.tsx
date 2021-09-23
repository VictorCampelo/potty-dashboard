import Header from "../../components/molecules/Header";
import Head from "next/head";
import { Container, Wrapper } from "../../styles/pages/Products";
import styled from 'styled-components';
import { CheckboxFilter } from "../../components/atoms/CheckboxFilter";
import { AiFillStar } from "react-icons/ai";

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
              
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Products;

export const ProductCard = styled.div`
  width: 320px;
  height: 460px;
  border-radius: 30px;
  background: var(--white);
  box-shadow: 0px 0px 8px rgba(54, 63, 78, 0.2);
  padding: 1.5rem 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 80%;
    height: 180px;
    resize: cover;
  }

  .title {
    font-size: 1.125rem;
    margin: 0.5rem 0;
    font-weight: 600;
  }

  .price {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-end;

    span {
      font-size: 1.75rem;
      color: var(--green-confirmation);
      font-weight: 600;
      margin-right: 0.5rem;
    }
    
    small {
      font-weight: 600;
      text-decoration: line-through;
      color: var(--gray-200);
      padding-bottom: 0.25rem;
    }
  }

  .score {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: var(--gray-600);
    margin-top: 0.5rem;

    svg {
      margin-right: 0.5rem;
    }
  }

  p {
    width: 100%;
    text-align: justify;
    color: var(--black-800);
    margin-top: 0.5rem;
    font-size: 0.875rem;
  }
`;

export const DescriptionCard = styled.div`
  width: 45%;
  height: 180px;
  border-radius: 30px;
  background: var(--white);
  box-shadow: 0px 0px 8px rgba(54, 63, 78, 0.2);
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-right: 2rem;
  }

  p {
    color: var(--gray-800);
  }

  a {
    display: inline;
    color: var(--blue-primary);
    
    :hover {
      color: var(--blue-dark);
    }
  }
`

export const StatusCard = styled.div`
  height: 180px;
  border-radius: 30px;
  background: var(--white);
  box-shadow: 0px 0px 8px rgba(54, 63, 78, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  
  .status {
    width: 100%;
    padding: 1rem 1.5rem;
    border-radius: 30px;
    box-shadow: 0px 0px 8px rgba(54, 63, 78, 0.2);
    display: flex;
    align-items: center;
    
    .statusDot {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--green-primary-dark);
      margin-right: 0.5rem;
    }

    span {
      color: var(--green-primary-dark);
      font-weight: bold;
      font-size: 1.125rem;
    }
  }

  .text {
    width: 100%;
    height: 100%;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;

    p {
      line-height: 2rem;
      font-weight: bold;
    }
  }
`

export const CategoriesCard = styled.div`
  width: 220px;
  height: auto;
  border-radius: 30px;
  background: var(--white);
  box-shadow: 0px 0px 8px rgba(54, 63, 78, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    width: 100%;
    background: var(--green-confirmation);
    padding: 1rem 1.5rem;

    span {
      font-weight: bold;
      color: var(--white);
    }
  }
  
  .item {
    width: calc(100% - 1.5rem);
    padding: 1rem 0.5rem;
    border-bottom: 1px solid var(--gray-100);
    
    :hover {
      cursor: pointer;
      
      a {
        color: var(--gray-700);
      }
    }

    a {
      font-weight: bold;
      color: var(--gray-600);
      text-decoration: none;
      
      &.active {
        color: var(--green-confirmation);
      }
    }
  }
`;

export const FilterCard = styled.div`
  height: 80px;
  border-radius: 30px;
  background: var(--white);
  box-shadow: 0px 0px 8px rgba(54, 63, 78, 0.2);
  overflow: hidden;
  display: flex;
  flex: 4;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  
  .orderBy {
    font-weight: 600;
    font-size: 1.125rem;
    margin-right: 1rem;
  }
  
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    height: 60%;
    padding: 0 1rem;
    border-right: 1px solid var(--gray-100);
    
    :hover {
      .item:not(.active) {
        color: var(--gray-800);
      }
    }

    &:last-child {
      border: none;
    }
  }

  
  .item {
    font-weight: bold;
    font-size: 1.125rem;
    color: var(--gray-600);

    &.active {
      color: var(--blue-primary);
    }
    
  }
`;

export const FilterCardSecondary = styled.div`
  height: 80px;
  border-radius: 30px;
  background: var(--white);
  box-shadow: 0px 0px 8px rgba(54, 63, 78, 0.2);
  overflow: hidden;
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
  margin-left: 1.5rem;
  padding: 0 1.5rem;
  gap: 1rem;
`