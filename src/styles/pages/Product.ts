import styled from 'styled-components'

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

export const CardProduct = styled.div`
  width: 100%;
  height: 750px;

  background: #fff;

  box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
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
      height: 100px;

      margin-top: 24px;

      display: flex;
      flex-direction: column;
      justify-content: center;

      .descont {
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

          background: #2dd1ac;
          border-radius: 8px;

          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 27px;

          color: #ffffff;
        }
      }

      h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        line-height: 60px;

        color: #2dd1ac;
      }
    }

    .button-container {
      max-width: 530px;
      height: 54px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      button {
        max-width: 270px;
        height: 54px;
        background: #ffffff;
        border: 2px solid #2dd1ac;
        box-sizing: border-box;
        border-radius: 30px;

        padding: 0 24px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;

        color: #2dd1ac;

        :first-child {
          margin-right: 24px;
        }

        :last-child {
          max-width: 290px;
          color: #ffffff;
          background: #2dd1ac;
        }
      }
    }
  }
`

export const CardDesc = styled.div`
  margin-top: 24px;

  width: 100%;
  height: auto;

  background: #fff;

  box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
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
  height: 900px;

  margin-top: 64px;
  margin-bottom: 74px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  gap: 1rem;
`

export const Footer = styled.footer`
  width: 100%;
  height: 260px;
  border-radius: 30px;
  background: var(--white);
  box-shadow: 0px 0px 8px rgba(54, 63, 78, 0.2);
  padding: 2rem 3rem;
  margin: 1.5rem;
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