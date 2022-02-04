import styled from 'styled-components'
import sizes from 'utils/sizes'

export const Page = styled.div`
  width: 100%;
  background: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;

  ${sizes.down('lgMob')} {
    background: white;
  }
`

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

export const TopoPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  .capa {
    /* z-index: 2; */
    /* margin-top: -105px; */
    width: 100%;
  }

  ${sizes.down('lgMob')} {
    .capa {
      margin-top: 0;
      height: 220px;
    }
  }

  .openContainer,
  .iconShare {
    position: absolute;
    background: var(--white);
    display: flex;
    align-items: center;
    padding: 0.75rem;
  }

  .openContainer {
    border-radius: 0.75rem 0 0 0.75rem;
    top: 75%;
    right: 0;
    flex-direction: column;
    .circle {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: var(--color-secondary-darker);
    }
    span {
      font-weight: 600;
      color: var(--color-secondary-darker);
      font-size: 1.25rem;
    }
  }
  .iconShare {
    border-radius: 50%;
    justify-content: center;
    right: 50px;
    top: 85%;

    ${[sizes.down('lgMob')]} {
      top: 45%;
      right: 0;
      border-radius: 50% 0 0 50%;
    }
  }
`

export const HeaderMob = styled.header`
  height: 130px;
  display: flex;
  align-items: center;
  background: white;
  padding: var(--spacing-xxxs) 1.25rem;
  flex-direction: column;

  .menu {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: var(--spacing-xxs);
    .title {
      display: flex;
      align-items: center;
      h1 {
        font-weight: 600;
      }

      span {
        margin-left: var(--spacing-nano);
        font-size: var(--font-size-xs);
      }
    }
  }
  svg {
    margin-right: 1rem;
    flex: none;
  }

  .searchBar {
    width: 100%;
  }
  input {
    flex: 1;
    height: 36px;
    padding: 0 1rem;
    border-radius: 40px;
    border: 1px solid var(--gray-700);
  }
`

export const Drawer = styled.div`
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 66;
  overflow: hidden;
  right: 100%;
  transition: background 2s, right 1s;
  background: transparent;
  position: fixed;

  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 0;
    background: white;
    width: 0;
    overflow: hidden;
    transition: width 0.3s;
    align-items: center;
    list-style: none;
    padding-top: 2rem;

    li {
      width: 60%;
      height: 40px;
      display: flex;
      align-items: center;
      font-weight: 500;
      margin-bottom: 1rem;
    }
  }

  &.active {
    background: rgba(0, 0, 0, 0.4);
    right: 0;
    display: flex;

    .content {
      width: 230px;
    }
  }

  .outside {
    flex: 1;
    height: 100%;
  }

  .close-btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
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
      width: 138px;
      height: 138px;
      border-radius: 100%;
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

      svg {
        width: 24px;
        height: 24px;
      }

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

    .favorite {
      margin-left: 2rem;
      margin-bottom: 1rem;
      cursor: pointer;
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

  ${sizes.down('lgMob')} {
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    width: 100%;
    max-width: 100vw;
    .top {
      img {
        width: 90px;
        height: 90px;
      }

      h1 {
        font-size: 1.5rem;
        line-height: 2.3rem;
      }

      p {
        font-size: 1rem;
        max-width: 100% !important;
      }
    }

    .stars {
      svg {
        width: 1.25rem !important;
        height: 1.25rem !important;
      }

      h2 {
        font-size: 0.865rem !important;
        margin-left: 0.5rem !important;
      }
    }
  }
`

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  h3 {
    margin-left: 1rem;
  }
  .carousel-container {
    max-width: 100vw;
    .carousel-item {
      overflow: hidden;
    }
  }
`

export const Container = styled.main`
  margin-top: 30px;
  display: flex;
  width: 92%;
  flex-direction: column;

  ${[sizes.down('lgMob')]} {
    width: 100%;
  }
  .descriptionContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .productsContainer {
    width: 100%;
    display: flex;

    .products {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-content: space-between;

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
        justify-content: flex-start;

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

        .emptyProducts {
          width: 100%;
          height: 450px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--spacing-xxxs) 0;
          gap: var(--spacing-xxxs);

          .img {
            ${[sizes.down('mdMob')]} {
              img {
                width: 300px;
              }
            }
          }
          .title {
            padding: 0 var(--spacing-xs);
            text-align: center;
            width: 80%;
            h1 {
              font-weight: 600;
              font-size: var(--font-size-lg);
            }
          }
        }
      }
    }
  }

  footer {
    margin: auto;
    margin-bottom: var(--spacing-xs);
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  border-radius: var(--border-radius-gg);
  background: var(--white);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: var(--spacing-xs) var(--spacing-md);
  margin: var(--spacing-xxs) 0;

  ${[sizes.down('lgMob')]} {
    width: 100%;
    margin-bottom: 0;
    border-radius: var(--border-radius-gg) var(--border-radius-gg) 0 0;
    flex-direction: column;

    img {
      margin-top: var(--spacing-xxxs);
      width: 100%;
    }
  }
  h1 {
    margin-bottom: var(--spacing-xxxs);
  }

  span,
  a {
    display: flex;
    align-items: center;
    margin-bottom: var(--spacing-nano);

    svg {
      margin-right: var(--spacing-nano);
    }
  }

  .mapContainer {
    text-align: center;

    img {
      height: 100%;
      width: 100%;
    }
  }
`

type ButtonProps = {
  position: string
}
export const Button = styled.div<ButtonProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  box-shadow: 0 0 1rem var(--gray-600);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: var(--white);
  top: 28%;
  ${(props) => props.position === 'left' && 'left: 10px;'}
  ${(props) => props.position === 'right' && 'right: 10px;'}
`

export const ProductCard = styled.div`
  cursor: pointer;
  width: 350px;
  height: 460px;
  border-radius: 30px;
  background: var(--white);
  box-shadow: 0px 0px 8px rgba(54, 63, 78, 0.2);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  ${[sizes.down('lg')]} {
    width: 230px;
  }
  :hover {
    cursor: pointer;
  }

  img {
    width: 80%;
    height: 250px;
    width: 100%;
    resize: cover;
    border-radius: 15px;
    background-size: cover;
  }

  .title {
    text-align: left;
    width: 100%;
    margin: 0.5rem 0;
    span {
      font-size: 1.125rem;
      font-weight: 600;
    }
  }

  .price {
    display: flex;
    flex-direction: column;
    width: 100%;

    span {
      font-size: 1.75rem;
      color: var(--color-primary);
      font-weight: 600;
      margin-right: 0.5rem;
    }

    small {
      margin-top: 0.5rem;
      font-weight: 600;
      text-decoration: line-through;
      color: var(--gray-200);
      font-size: 1rem;
    }
  }

  .score {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: var(--gray-600);

    svg {
      margin-right: 0.5rem;
    }
  }

  p {
    width: 100%;
    color: var(--black-800);
    hyphens: auto;
    margin-top: 0.5rem;
    font-size: 0.875rem;
  }

  ${sizes.down('lgMob')} {
    width: 165px;
    height: 270px;
    border-radius: 10px;
    padding: 10px;

    .title {
      font-size: 0.8rem !important;
    }

    span {
      font-size: 1.25rem !important;
    }

    p {
      display: none;
    }

    .score {
      span {
        font-size: 0.6rem !important;
      }
    }
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
    color: var(--color-secondary);

    :hover {
      color: var(--color-secondary-darker);
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
      background: var(--color-secondary-darker);
      margin-right: 0.5rem;
    }

    span {
      color: var(--color-secondary-darker);
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
        background: var(--color-secondary);
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
    background: var(--color-primary);
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
        color: var(--color-primary);
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
      color: var(--color-secondary);
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
      color: var(--color-secondary);
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
