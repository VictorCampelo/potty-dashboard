import styled from 'styled-components'

export const Page = styled.div`
  width: 100%;
  background: #fefdf9;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

export const TopoPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  img {
    z-index: 2;
    margin-top: -86px;
    width: 100%;
  }
`
export const InfoSerch = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  //margin-left: 4%;
  background: #ffffff;

  box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
  border-radius: 30px;

  margin-top: 40px;
  padding: 30px 20px;

  div.input {
    width: 100%;
    border: 2px solid #363f4e;
    box-sizing: border-box;

    box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
    border-radius: 30px;
    display: flex;
    align-items: center;
    padding: 5px 10px;

    #search {
      width: 23px;
      height: 23px;
      margin: 0px 20px;
      cursor: pointer;

      transform: rotateY(180deg);
    }

    input {
      border: none;
      border-left: 1px solid #d8d9dd;
      outline: none;
      width: 100%;

      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 27px;

      //color: #D8D9DD;
      color: #363f4e;
      padding: 5px 10px;
    }
  }

  div.body {
    margin-top: 20px;

    display: flex;
    align-items: center;

    display: flex;
    justify-content: space-between;
  }
`

export const DescriptionShop = styled.div`
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
  border-radius: 30px;
  .top {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
    }
    h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 54px;

      text-align: justify;

      color: #363f4e;
    }
    .stars {
      display: flex;

      #star {
        color: #ffe249;
        box-sizing: border-box;
        width: 22px;
        height: 22px;
      }

      h2 {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;

        color: #6c7079;
        margin-left: 15px;
      }
    }
  }

  p {
    margin-top: 20px;

    max-width: 500px;
    max-height: 150px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    text-align: justify;

    color: #363f4e;
  }
`

export const Container = styled.main`
  margin-top: 30px;
  display: flex;

  width: 92%;
  //margin-left: 2%;
  //justify-content: center;
  //align-items: center;
  flex-direction: column;

  .descriptionContainer {
    width: 100%;
    //padding: 0 2rem;
    display: flex;
    justify-content: space-between;

    //margin-top: 10rem;
  }

  .productsContainer {
    width: 100%;
    //padding: 0 2rem;
    display: flex;

    //margin-top: 1.5rem;

    .products {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-content: space-between;
      //padding-left: 1.5rem;

      .filterWrapper {
        display: flex;
        flex: 1;
        margin-bottom: 1.5rem;
      }

      .productWrapper {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding-bottom: 32px;

        .horizon {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      }

      .bottom {
        display: flex;

        .categoriesContainer {
          width: 220px;
          height: fit-content;
          display: flex;
          margin-right: 20px;
        }
      }
    }
  }
`

export const Footer = styled.footer`
  width: 100%;
  height: 260px;
  border-radius: 30px;
  background: var(--white);
  box-shadow: 0px 0px 8px rgba(54, 63, 78, 0.2);
  padding: 2rem 3rem;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 1rem;
  }

  span,
  a {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    svg {
      margin-right: 0.5rem;
    }
  }
`

export const ProductCard = styled.div`
  cursor: pointer;
  width: 320px;
  height: 460px;
  border-radius: 30px;
  background: var(--white);
  box-shadow: 0px 0px 8px rgba(54, 63, 78, 0.2);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  :hover {
    cursor: pointer;
  }

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
`

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
  //height: 180px;
  border-radius: 30px;
  background: var(--white);
  box-shadow: 0px 0px 8px rgba(54, 63, 78, 0.2);
  //overflow: hidden;
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
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;

    p {
      line-height: 2rem;
      font-weight: bold;
    }
  }

  .body {
    width: 100%;
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;

    .info-produto {
      width: 100%;
      display: flex;
      align-items: center;

      justify-content: space-between;
      .left-part {
        display: flex;
        align-items: center;
        img {
          width: 24px;
          height: 24px;
        }

        h2 {
          font-family: Poppins;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;

          color: #000000;
          margin: 0 25px 0px 10px;
        }
      }
      span {
        padding: 0px 2px;
        background: #3c8efc;
        border-radius: 4px;

        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;

        color: #ffffff;
      }
    }

    div.info-produto + .info-produto {
      margin-top: 10px;
    }
  }
`

export const CategoriesCard = styled.div`
  width: 220px;
  height: fit-content;
  border-radius: 30px;
  background: var(--white);
  box-shadow: 0px 0px 8px rgba(54, 63, 78, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

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
`

export const FilterCard = styled.div`
  height: 80px;
  border-radius: 30px;
  background: var(--white);
  box-shadow: 0px 0px 8px rgba(54, 63, 78, 0.2);
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
`

export const FilterCardSecondary = styled.div`
  height: 80px;
  border-radius: 30px;
  background: var(--white);
  box-shadow: 0px 0px 8px rgba(54, 63, 78, 0.2);
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
  margin-left: 1.5rem;
  padding: 0 1.5rem;
  gap: 1rem;
`

export const FilterCardTertiary = styled.div`
  width: fit-content;
  height: 80px;
  border-radius: 30px;
  background: var(--white);
  box-shadow: 0px 0px 8px rgba(54, 63, 78, 0.2);
  display: flex;

  justify-content: center;
  align-items: center;
  margin-left: 1.5rem;
  //padding: 0 1.5rem;

  button {
    width: 80px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;

    img {
      width: 30px;
      height: 30px;
    }

    :hover {
      opacity: 0.8;
      background: #e8e9ea;
    }
  }

  hr {
    height: 80%;
    border-radius: 100%;
    color: #e8e9ea;
  }
  button#button-left {
    border-radius: 30px 0px 0px 30px;
  }

  button#button-right {
    border-radius: 0px 30px 30px 0px;
  }
`

export const HorizonCard = styled.div`
  cursor: pointer;
  width: 100%;

  border-radius: 30px;
  background: var(--white);
  box-shadow: 0px 0px 8px rgba(54, 63, 78, 0.2);
  padding: 2rem 1.5rem;
  display: flex;
  //align-items: center;

  img {
    width: 200px;
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
`