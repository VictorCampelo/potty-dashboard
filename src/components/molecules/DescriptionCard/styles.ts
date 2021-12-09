import styled from 'styled-components'

export const Container = styled.section`
  width: 35vw;
  margin-bottom: 20px;

  background: #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 20px;

  .top {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    section {
      width: 100%;
      height: 200px;
      position: relative;

      #banner {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
      }

      #icon {
        width: min-content;
        position: relative;
        left: 50%;
        bottom: 130px;
        transform: translate(-50%);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
          width: 150px;
          height: 150px;
          border: 4px solid #ffffff;
          border-radius: 447px;
        }

        h1 {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: normal;
          font-size: 24px;

          color: #000000;
        }
      }

      button {
        width: 100px;
        height: 35px;
        background: transparent;

        border: 2px solid var(--color-primary);
        background: var(--white);
        box-sizing: border-box;
        border-radius: 30px;

        font-style: normal;
        font-weight: normal;
        font-size: 1rem;

        color: var(--color-primary);

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: 15px;
        right: 15px;

        .icon {
          margin-left: 4px;
        }
      }
    }
  }

  .bottom {
    margin: 20px 25px;
    margin-top: 170px;

    .voidText {
      display: flex;
      width: 100%;

      margin-top: 3px;

      p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;

        color: #363f4e;
      }
    }

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 1.2rem;

      color: var(--color-secondary-darker);
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
    }
  }
`
