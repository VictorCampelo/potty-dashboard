import styled from 'styled-components'
import sizes from 'utils/sizes'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background: var(--gray-100);

  ${[sizes.down('lgMob')]} {
    /* position: relative; */
    display: flex;
    flex-direction: column;
  }
`

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: var(--spacing-nano) var(--spacing-lg);
  display: flex;
  flex-direction: column;

  ${[sizes.down('lgMob')]} {
    padding: 0;
  }
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    width: 100%;
    height: 80px;

    /* max-width: 1440px; */
    /* padding-left: var(--spacing-xxs);   */

    ${[sizes.down('lgMob')]} {
      width: 50%;
    }
  }
`

export const Installments = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: var(--spacing-xs);

  background: var(--white);
  border-radius: var(--border-radius-gg);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  align-items: center;

  svg {
    cursor: pointer;
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-nano) var(--spacing-nano);

    .title {
      color: var(--black-1000) !important;
      font-size: var(--spacing-xxs) !important;
      margin: 0 var(--spacing-xxxs);
    }
  }

  img {
    width: 328px;
  }

  .list {
    display: flex;
    gap: 1rem;
    padding: var(--spacing-xxxs) var(--spacing-xs);
  }
`

export const MenuBottom = styled.div`
  /* position: absolute; */
  width: 100vw;
  position: fixed;
  bottom: 0;
  .price {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: var(--spacing-nano);
    background: var(--white);
    padding: var(--spacing-nano) var(--spacing-xxs);
    box-shadow: inset 0px 3px 14px -7px var(--gray-200);

    .values {
      width: 100%;
    }

    h1 {
      font-family: var(--font-family-primary);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-medium);
      font-size: var(--font-size-xlg) !important;
      line-height: 60px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 60px;

      color: var(--gray-600);

      small {
        font-family: var(--font-family-primary);
        font-style: var(--font-style-normal);
        font-weight: var(--font-weight-medium);
        font-size: var(--font-size-sm);

        color: var(--gray-300);

        /* color: #b2b5ba; */
      }
    }
  }
`

export const CardProduct = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;

  width: 100%;
  height: 548px;

  background: var(--white); 

  ${[sizes.down('lgMob')]} {
    background: var(--gray-100);
  }
  box-shadow: rgba(99, 99, 99, 0  .2) 0px 2px 8px 0px;
  border-radius: var(--border-radius-gg);

  ${[sizes.down('lgMob')]} {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0%;
  }
  .image-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 650px;
    height: 460px;

    padding-left: var(--spacing-nano);
    padding-right: var(--spacing-xs);

    ${[sizes.down('lgMob')]} {
      width: 100%;
      background: var(--white);
      padding: 0;
      justify-content: flex-end;
    }

    .actions {
      width: 20%;
      display: flex;
      flex-direction: column;
      
      .top {
        width: 100%;
        height: 125px;
        display: flex;
        justify-content: center;
        .share {
          /* display: flex; */
          /* align-items: center; */
          /* box-shadow: 0 0 1rem var(--gray-200); */
          top: 0; 
          /* padding: 0.5rem 0; */
          /* padding-left: 1rem; */
          /* border-radius: 20px 0 0 20px; */
          margin-top: var(--spacing-nano);
          /* width: 75%; */
          /* height: 35%; */
          /* justify-content: center; */
          right: 0;
        }

      }

      .mid {
        width: 100%;
        height: 125px;
        display: flex;
        justify-content: center;
        align-content: flex-start;
      }

      .bot {
        display: flex;
        align-content: flex-end;
        justify-content: flex-start;
        .progress {
          background: var(--gray-300);
          border-radius: 5px;
          padding: var(--spacing-quarck) var(--spacing-nano);
          p{
            color: var(--white);
          }
        }

      }
    }
    .list-images {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      width: 180px;
      /* height: 500px; */
      ${[sizes.down('lgMob')]} {
        display: none;
      }
      img {
        width: 126px;
        height: 126px;

        border-radius: var(--border-radius-xxs);

        :hover {
          cursor: pointer;
          transform: scale(102%);
        }
        :active {
          transform: scale(105%);
        }
      }
    }

    img {
      width: 460px;
      height: 460px;
      object-fit: cover;

      border-radius: var(--border-radius-xxs);

      ${[sizes.down('lgMob')]} {
        width: 250px;
        height: 250px;
      }
      ${[sizes.down('smMob')]} {
        width: 200px;
      }
    }
    }
  }

  .description-container {
    max-width: 550;
    height: 100%;
    padding: var(--spacing-md);
    /* padding-top: var(--spacing-xxl); */

    ${[sizes.down('lgMob')]} {
      padding: var(--spacing-lg) 0; 
      margin-bottom: 2rem;

      .title, .desc, .discount, a {
        margin-left: var(--spacing-xxs);
      }

    }
 
    .desc {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      
      max-width: 315px;
      height: 24px;
      
      .separate {
        display: none;
      }

      ${[sizes.down('lgMob')]} {
        justify-content: flex-start;
        gap: var(--spacing-quarck);
        .avaliations {
          display: none;
        }
        .separate {
          display: block;
        }
      }
    }

    .price-container {
      display: flex;
      flex-direction: column;
      justify-content: center;

      max-width: 100%;
      height: 200px;

      margin: var(--spacing-xxs) 0;

      ${[sizes.down('lgMob')]} {
        margin: 0;
      }
      ${[sizes.down('smMob')]} {
        height: 220px;
      }
      .installments {
        position: relative;
      }

      a {
        color: var(--color-primary);
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
        text-decoration: underline;
        font-weight: bold;
        ${[sizes.down('lgMob')]} {
          font-size: var(--font-size-md);

        }
      }

      .discount {
        display: flex;
        flex-direction: row;
        align-items: center;

        h4 {
          text-decoration: line-through;
          font-family: var(--font-family-primary);
          font-style: var(--font-style-normal);
          font-weight: var(--font-weight-medium);
          font-size: var(--font-size-sm);
          line-height: 30px;
          color: var(--gray-300);
        }

        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          background: var(--color-primary);
          border-radius: 8px;
          width: 50px;
          height: 28px;

          border-radius: var(--border-radius-sm);
          margin-left: var(--spacing-nano);

          font-family: var(--font-family-primary);
          font-style: var(--font-style-normal);
          font-weight: var(--font-weight-medium);
          font-size: var(--font-size-xxxs);
          line-height: 27px;

          color: var(--white);

          ${[sizes.down('lgMob')]} {
            background: var(--color-secondary);
          }
        }
      }

      .price {
        display: flex;
        align-items: center;
        gap: 1rem;

        ${[sizes.down('lgMob')]} {
          margin-top: var(--spacing-nano);
          /* background: var(--white); */
          padding: var(--spacing-xxs);
          /* box-shadow: inset 0px 3px 14px -7px var(--gray-200); */
          
          .values {
            width: 100%;
          }
        }
        .parcel {
          width: 50px;
          height: 28px;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          background: var(--color-primary);
          border-radius: 8px;

          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 27px;

          color: #ffffff;

          ${[sizes.down('lgMob')]} {
            display: none;
          }
        }
        h1 {
          font-family: var(--font-family-primary);
          font-style: var(--font-style-normal);
          font-weight: var(--font-weight-medium);
          font-size: var(--font-size-xxl);
          line-height: 60px;
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-size: 40px;
          line-height: 60px;

          color: var(--color-primary);
          ${[sizes.down('smMob')]} {
            font-size: var(--font-size-xlg);
          }
          small {
            font-family: var(--font-family-primary);
            font-style: var(--font-style-normal);
            font-weight: var(--font-weight-medium);
            font-size: var(--font-size-sm);

            color: var(--gray-300);

            /* color: #b2b5ba; */
          }
        }
      }
    }

    .button-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: var(--spacing-xxxs);
      max-width: 530px;
      margin-top: var(--spacing-xxxs);
      height: 54px;
      ${[sizes.down('lgMob')]} {
        flex-wrap: wrap;
        justify-content: center;
        gap: var(--spacing-xxxs);
        padding: var(--spacing-xxs) var(--spacing-xxxl); 
        height: 150px;
      }
      ${[sizes.down('mdMob')]} {
        padding: var(--spacing-xxs) var(--spacing-md);
        height: 170px;
        /* margin-top: var(--spacing-xxs); */
      }
      ${[sizes.down('smMob')]} {
        padding: 0 var(--spacing-md) var(--spacing-xxs) var(--spacing-md);
        gap: 0;
      }
      /* button {
        max-width: 270px;
        height: 54px;
        background: var(--white);
        border: var(--border-width-thin) solid var(--color-primary);
        box-sizing: border-box;
        border-radius: var(--border-radius-gg);

        padding: 0 var(--spacing-xxs);

        font-family: var(--font-family-primary);
        font-style: var(--font-style-normal);
        font-weight: var(--font-weight-medium);
        font-size: var(--font-size-xs);

        color: var(--color-primary);

        :first-child {
          margin-right: var(--spacing-xxs);
        }

        :last-child {
          max-width: 290px;
          color: #ffffff;
          background: var(--color-primary);
        }
      } */
    }
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--white);
  border: 1px solid var(--white);
  border-radius: 50%;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`

export const CardDesc = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;
  background: var(--white);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: var(--border-radius-gg);

  margin-top: var(--spacing-xxs);
  padding: var(--spacing-xxs) 0;

  .description-container {
    display: flex;
    flex-direction: row;

    height: 550px;
    padding: var(--spacing-xxs) var(--spacing-md);

    .left-container {
      width: 600px;
      height: 100%;
      display: flex;
      .image-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        width: 700px;
        height: 100%;

        padding-left: var(--spacing-nano);
        padding-right: var(--spacing-xs);

        .list-images {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;

          width: 180px;
          height: 500px;
          ${[sizes.down('lgMob')]} {
            display: none;
          }
          img {
            width: 126px;
            height: 126px;

            border-radius: var(--border-radius-xxs);

            :hover {
              cursor: pointer;
              transform: scale(102%);
            }
            :active {
              transform: scale(105%);
            }
          }
        }

        img {
          width: 380px;
          height: 380px;
          object-fit: cover;
          border-radius: var(--border-radius-xxs);
          ${[sizes.down('lgMob')]} {
            width: 250px;
            height: 250px;
          }
        }
      }
    }

    .right-container {
      width: 100%;
      height: 100%;

      overflow-y: auto;

      ::-webkit-scrollbar {
        width: 6px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #3332;
        border-radius: var(--border-radius-lg);
      }

      h1 {
        font-family: var(--font-family-primary);
        font-style: var(--font-style-normal);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-md);
        line-height: 36px;

        color: var(--color-secondary-darker);

        margin-bottom: var(--spacing-xxs);
      }

      p {
        font-family: var(--font-family-primary);
        font-style: var(--font-style-normal);
        font-weight: var(--font-weight-light);
        font-size: var(--font-size-xxs);
        line-height: 24px;

        color: var(--black-1000);
      }
    }
  }

  .rated-container {
    height: 650px;

    header {
      display: flex;
      align-items: center;

      width: 100%;
      height: 70px;
      padding: 0 var(--spacing-sm);
      color: #fff;
      background: var(--color-secondary);

      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        margin-right: var(--spacing-xxxs);

        h1 {
          margin-right: var(--spacing-nano);

          font-family: var(--font-family-primary);
          font-style: var(--font-style-normal);
          font-weight: var(--font-weight-light);
          font-size: var(--font-size-xlg);
          line-height: 48px;

          color: var(--white);
        }
      }

      h1 {
        font-family: var(--font-family-primary);
        font-style: var(--font-style-normal);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-md);
        line-height: 36px;
        color: var(--white);
      }

      p {
        font-family: var(--font-family-primary);
        font-style: var(--font-style-normal);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-md);
        line-height: 36px;
        color: var(--white);
      }

      .rate {
        margin-right: var(--spacing-xs);
      }
    }

    .container {
      display: flex;
      flex-direction: row;

      width: 100%;
      height: 550px;

      .left-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        width: 80%;
        height: auto;

        padding: var(--spacing-xs) var(--spacing-sm);

        overflow-y: auto;

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: #3332;
          border-radius: var(--border-radius-lg);
        }
      }

      .right-container {
        width: 40%;
        height: auto;
      }
    }
  }
`
export const Divisor = styled.div`
  width: 100%;
  height: 4px;
  background: var(--gray-200);
`

export const CardDescMobile = styled.div`
  width: 100%;
  padding: var(--spacing-xxs);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  margin-top: 220px;

  .description-container,
  .rated-container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xxxs);
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .rated-container {
    .star-container {
      display: flex;
      justify-content: space-between;
      .left-container {
        padding-left: var(--spacing-xxs);
        .star {
          gap: var(--spacing-xxxs);
          display: flex;
          align-items: center;
          h1 {
            font-size: var(--font-size-xxxl);
            font-weight: var(--font-weight-medium);
          }
        }
      }
      .right-container {
        .stars-container {
          div {
            display: flex;
            align-items: center;
            p {
              margin-left: var(--spacing-nano);
            }
          }
        }
      }
    }
  }
`

export const FilterCard = styled.div`
  width: 100%;
  height: 100%;
  padding: var(--spacing-xxxs) var(--spacing-sm);

  .filter {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 100%;
    height: 100%;

    background: var(---white);
    border: var(--border-width-hairline) solid #d8d9dd;
    box-sizing: border-box;
    border-radius: var(--border-radius-gg);
    padding: var(--spacing-xs);

    .stars-container {
      width: 100%;

      div {
        display: flex;
        align-items: center;

        .percentil {
          border: 1px solid var(--gray-200);
          border-radius: 10px;
          margin-left: var(--spacing-lg);
          width: 66px;
          p {
            margin: auto;
          }
        }
      }
    }
    h1 {
      font-family: var(--font-family-primary);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-regular);
      font-size: var(--font-size-md);
      line-height: 36px;

      color: var(--color-secondary-darker);

      margin-bottom: var(--spacing-xxxs);
      margin-top: var(--spacing-xxxs);
    }

    h4 {
      font-family: var(--font-family-primary);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-medium);
      font-size: var(--font-size-xs);
      line-height: 27px;

      color: #6c7079;
    }
  }
`

export const ProductWrapper = styled.div`
  max-width: 100%;
  min-height: 450px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  margin-top: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);

  padding: 0 var(--spacing-md);
  /* gap: 1rem; */

  ${[sizes.down('lgMob')]} {
    padding: 0;
    gap: 0;

    .carousel-container {
      margin-left: 1rem;
      max-width: 100% !important;
    }

    h1 {
      margin: 0;
    }
  }
  .carousel-container {
    max-width: 100%;
    padding: 0 var(--spacing-lg);
    .carousel-item {
      max-width: 100%;
    }
  }
  h1 {
    font-weight: 400;
    font-size: var(--font-size-lg);
    margin-left: var(--spacing-xs);
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 90%;
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
  }
`
