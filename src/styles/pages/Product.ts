import styled from 'styled-components'
import sizes from 'utils/sizes'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;

    width: 100%;
    height: 80px;

    max-width: 1440px;
    padding-left: var(--spacing-xxs);
  }

  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    /* height: 2950px;*/
    max-width: 1440px;

    padding: var(--spacing-xxs);
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

export const CardProduct = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;

  width: 100%;
  height: 750px;

  background: var(--white);

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: var(--border-radius-gg);

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
      height: 60%;

      img {
        width: 130px;
        height: 130px;

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
      width: 500px;
      height: 500px;
      object-fit: cover;

      border-radius: var(--border-radius-xxs);
    }
  }

  .description-container {
    max-width: 550;
    height: 100%;

    padding: var(--spacing-md);
    padding-top: var(--spacing-xxl);

    .title {
    }

    .desc {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      max-width: 315px;
      height: 24px;
    }

    .price-container {
      display: flex;
      flex-direction: column;
      justify-content: center;

      max-width: 100%;
      height: 200px;

      margin: var(--spacing-xxs) 0;

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
        }
      }

      .price {
        display: flex;
        align-items: center;
        gap: 1rem;
        div {
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

      max-width: 530px;
      margin-top: var(--spacing-xxxs);
      height: 54px;

      button {
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
      }
    }
  }
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
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
      width: 730px;
      height: 100%;

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
          height: 410px;

          img {
            width: 130px;
            height: 130px;

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
          width: 500px;
          height: 500px;
          object-fit: cover;

          border-radius: var(--border-radius-xxs);
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

export const FilterCard = styled.div`
  width: 100%;
  height: 100%;
  padding: var(--spacing-xs) var(--spacing-sm);

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
  min-height: 900px;
  height: auto;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* align-items: flex-start;  */
  justify-items: center;
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);

  padding: 0 var(--spacing-md);
  gap: 1rem;

  h1 {
    font-weight: 400;
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
