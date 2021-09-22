import Header from "../../components/molecules/Header";
import Head from "next/head";
import { Container, Wrapper } from "../../styles/pages/Products";
import styled from 'styled-components';

const Products = () => {
  return (
    <Wrapper>
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

        </section>

      </Container>
    </Wrapper>
  );
};

export default Products;

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
    padding: 1rem 0;
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
  align-items: center;
  margin-left: 2rem;
  padding-left: 1.5rem;

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
