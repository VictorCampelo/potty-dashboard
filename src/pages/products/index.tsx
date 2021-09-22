import Header from "../../components/molecules/Header";
import Link from "next/link";
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
        <div className="descriptionContainer">
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
        </div>

      </Container>
    </Wrapper>
  );
};

export default Products;

export const DescriptionCard = styled.div`
  width: 45%;
  height: 200px;
  border-radius: 30px;
  background: var(--white);
  box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;

  img {
    width: 164px;
    height: 164px;
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
  height: 200px;
  border-radius: 30px;
  background: var(--white);
  box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  .status {
    width: 100%;
    padding: 1.5rem;
    border-radius: 30px;
    box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);

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
