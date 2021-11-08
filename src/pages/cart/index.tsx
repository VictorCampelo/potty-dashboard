import Header from "../../components/molecules/Header";
import Head from "next/head";
import styled from 'styled-components';
import HeaderProducts from "components/molecules/HeaderProducts";
import { IoTrashOutline } from "react-icons/io5";
import Counter from "components/atoms/Counter";
import { AiFillCamera } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Cart = () => {
  return (
    <>
      <Head>
        <title>Cart | Último</title>
      </Head>

      <HeaderProducts/>

      <Container>
        <Content>
          <h1>Meu carrinho</h1>

          <CartContainer>
            <CartHead>
              <section style={{ flex: 5, justifyContent: 'flex-start' }}>
                <span>Produto</span>
              </section>

              <section>
                <span>Quantidade</span>
              </section>

              <section>
                <span>Subtotal</span>
              </section>

              <section style={{flex: 1}} />
            </CartHead>

            <CartProduct>
              <section style={{flex: 5, justifyContent: 'flex-start'}}>
                <div className="imgContainer">
                  <AiFillCamera size={28} color="white" />
                </div>

                <span>
                  Geladeira Brastemp Brm44hk Frost Free Duplex 375l Com Compartimento Extrafrio Fresh Zone Inox - 110v
                </span>
              </section>

              <Counter />

              <section>
                <strong>R$ 2.440,00</strong>
              </section>

              <section style={{flex: 1}}>
                <button className="exclude">
                  <IoTrashOutline size={24} color="var(--red)" />

                  <strong>
                    Excluir
                  </strong>
                </button>
              </section>
            </CartProduct>

            <CartProduct>
              <section style={{flex: 5, justifyContent: 'flex-start'}}>
                <div className="imgContainer">
                  <AiFillCamera size={28} color="white" />
                </div>

                <span>
                  Geladeira Brastemp Brm44hk Frost Free Duplex 375l Com Compartimento Extrafrio Fresh Zone Inox - 110v
                </span>
              </section>

              <Counter />

              <section>
                <strong>R$ 2.440,00</strong>
              </section>

              <section style={{flex: 1}}>
                <button className="exclude">
                  <IoTrashOutline size={24} color="var(--red)" />

                  <strong>
                    Excluir
                  </strong>
                </button>
              </section>
            </CartProduct>
            
            <CartProduct>
              <section style={{flex: 5, justifyContent: 'flex-start'}}>
                <div className="imgContainer">
                  <AiFillCamera size={28} color="white" />
                </div>

                <span>
                  Geladeira Brastemp Brm44hk Frost Free Duplex 375l Com Compartimento Extrafrio Fresh Zone Inox - 110v
                </span>
              </section>

              <Counter />

              <section>
                <strong>R$ 2.440,00</strong>
              </section>

              <section style={{flex: 1}}>
                <button className="exclude">
                  <IoTrashOutline size={24} color="var(--red)" />

                  <strong>
                    Excluir
                  </strong>
                </button>
              </section>
            </CartProduct>
          </CartContainer>

          <CartContainer 
            style={{ 
              flexDirection:'row', 
              alignItems: 'center',
              padding: '2rem',
              justifyContent: 'space-between'
            }}
          >
            <div className="info">
              <span>Total: {" "}</span> 
              <strong>R$ 13.431,12</strong>
              <span>
                {" | "}13 items
              </span>
            </div>
            
            <div className="buttonContainer">
              <button className="empty">
                <IoTrashOutline size={24} color="var(--red)" />
                ESVAZIAR CARRINHO
              </button>

              <button className="finish">
                <BsWhatsapp size={24} color="white" />
                FINALIZAR COMPRA
              </button>
            </div>
          </CartContainer>
        </Content>
      </Container>
    </>
  );
};

export default Cart;

export const Container = styled.main`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0 4rem;
`;

export const Content = styled.section`
  max-width: 1420px;
  height: 100%;
  width: 100%;
  padding-top: 3rem;
`;

export const CartContainer = styled.section`
  background: white;
  width: 100%;
  border-radius: 30px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
  display: flex;
  margin-top: 2rem;
  flex-direction: column;

  .info {
    span, strong {
      font-size: 1.25rem;
    }

    strong {
      color: var(--green-confirmation);
    }

  }

  .buttonContainer {
    display: flex;

    button {
      padding: 0 1rem; 
      display: flex;
      align-items: center;
      margin-left: 1rem;
      border: none;
      background: white;
      border-radius: 50px;
      height: 48px;
      font-weight: bold;

      svg {
        margin-right: 0.5rem;
      }

      &.empty {
        border: 1px solid var(--red);
        color: var(--red);
      }

      &.finish {
        background: var(--green-confirmation);
        color: white;
      }
    }
  }
`;

export const CartHead = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 2rem;

  section {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  span {
    color: var(--blue-primary);
    font-weight: 700;
    font-size: 1.25rem;
  }
`;

export const CartProduct = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 2rem;
  align-items: center;
  border-top: 1px solid var(--gray-100);

  section {
    flex: 1;
    display: flex;
    justify-content: center;

    .exclude {
      display: flex;
      border: none;
      background: white;
      border-radius: 30px;
      padding: 1rem;
      box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);

      strong {
        margin-left: 0.5rem;
        color: var(--red);
      }
    }

    :last-child {
      display: flex;
      justify-content: flex-end;
    }

    .imgContainer {
      width: 90px;
      height: 90px;
      border-radius: 5px;
      background: var(--gray-300);
      margin-right: 1rem;
      padding: 30px;
    }
  }
`;
