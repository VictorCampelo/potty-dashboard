import styled from 'styled-components'
import sizes from 'utils/sizes'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    max-width: 1420px;
    width: 100%;
    height: 80px;

    padding-left: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
  }

  .body {
    max-width: 1420px;
    height: 2950px;

    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`

export const Installments = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  align-items: center;

  svg {
    cursor: pointer;
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.5rem;

    .title {
      color: black !important;
      font-size: 1.5rem !important;
      margin: 0 1rem;
    }
  }

  img {
    width: 328px;
  }

  .list {
    display: flex;
    gap: 1rem;
    padding: 1rem 2rem;
  }
`

export const CardProduct = styled.div`
  width: 100%;
  height: 750px;

  background: #fff;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;

  .image-container {
    width: 700px;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-left: 10px;
    padding-right: 30px;

    .list-images {
      width: 180px;
      height: 60%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      img {
        width: 130px;
        height: 130px;

        border-radius: 5px;

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

      border-radius: 5px;
    }
  }

  .description-container {
    max-width: 550;
    height: 100%;

    padding: 50px;
    padding-top: 85px;

    .title {
    }

    .desc {
      max-width: 315px;
      height: 24px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .price-container {
      max-width: 100%;
      height: 200px;

      margin: 24px 0px;

      display: flex;
      flex-direction: column;
      justify-content: center;

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
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 30px;
          color: #b2b5ba;
        }

        div {
          margin-left: 8px;
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
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-size: 40px;
          line-height: 60px;

          color: var(--color-primary);

          small {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;

            color: #b2b5ba;
          }
        }
      }
    }

    .button-container {
      max-width: 530px;
      margin-top: 1rem;
      height: 54px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      button {
        max-width: 270px;
        height: 54px;
        background: #ffffff;
        border: 2px solid var(--color-primary);
        box-sizing: border-box;
        border-radius: 30px;

        padding: 0 24px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;

        color: var(--color-primary);

        :first-child {
          margin-right: 24px;
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
  margin-top: 24px;

  width: 100%;
  height: auto;

  background: #fff;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 30px;

  padding: 25px 0;

  display: flex;
  flex-direction: column;

  .description-container {
    height: 550px;
    padding: 25px 50px;

    display: flex;
    flex-direction: row;

    .left-container {
      width: 730px;
      height: 100%;

      .image-container {
        width: 700px;
        height: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 30px;

        .list-images {
          width: 180px;
          height: 410px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          img {
            width: 130px;
            height: 130px;

            border-radius: 5px;

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

          border-radius: 5px;
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
        border-radius: 20px;
      }

      h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;

        color: #3c8efc;

        margin-bottom: 24px;
      }

      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        color: #000;
      }
    }
  }

  .rated-container {
    height: 650px;

    header {
      width: 100%;
      height: 70px;

      display: flex;
      align-items: center;

      padding: 0 39px;

      color: #fff;
      background: #6598d9;

      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        margin-right: 15px;

        h1 {
          margin-right: 10px;
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 32px;
          line-height: 48px;

          color: #ffffff;
        }
      }

      h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        color: #ffffff;
      }

      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 36px;
        color: #ffffff;
      }

      .rate {
        margin-right: 32px;
      }
    }

    .container {
      width: 100%;
      height: 550px;

      display: flex;
      flex-direction: row;

      .left-container {
        width: 80%;
        height: auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        padding: 30px 40px;

        overflow-y: auto;

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: #3332;
          border-radius: 20px;
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
  padding: 30px 40px;

  .filter {
    width: 100%;
    height: 100%;

    background: #ffffff;
    border: 1px solid #d8d9dd;
    box-sizing: border-box;
    border-radius: 30px;
    padding: 32px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h1 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;

      color: #3c8efc;

      margin-bottom: 18px;
      margin-top: 18px;
    }

    h4 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;

      color: #6c7079;
    }
  }
`

export const ProductWrapper = styled.div`
  width: 100%;
  min-height: 900px;
  height: auto;

  margin-top: 64px;
  margin-bottom: 74px;

  padding: 0 50px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  gap: 1rem;
`

export const Footer = styled.footer`
  width: 90%;
  height: 320px;
  border-radius: 30px;
  background: var(--white);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 2rem 3rem;
  margin: 1.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${[sizes.down('lgMob')]} {
    width: 100%;
    height: 490px;
    margin-bottom: 0;
    border-radius: 30px 30px 0 0;
    flex-direction: column;
    img {
      margin-top: 1rem;
      width: 100%;
    }
  }
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

  .mapContainer {
    text-align: center;
  }
`
