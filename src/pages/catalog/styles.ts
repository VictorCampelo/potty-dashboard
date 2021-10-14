import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 20px;
  width: 100%;
  height: 100vh;
  background: #fffdf9;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .list-container {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    margin-left: 110px;

    background: #ffffff;

    box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
    border-radius: 30px;

    .header {
      width: 100%;
      height: 110px;

      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;

      border-radius: 30px 30px 0 0;
      padding: 20px;

      .addBtn {
        width: 123px;
        height: 2.5rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-top: 0.5rem;
        margin-right: 40px;

        background: var(--blue-primary);
        border-radius: 8px;
        border: none;

        padding: 0 11px 0 11px;

        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 22px;
        color: var(--white);
      }

      .addBtn:hover {
        background: var(--blue-dark);
      }

      .input-container {
        width: 313px;

        margin-right: 28px;
      }
    }
  }

  .products-container {
    padding: 20px 70px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    height: 100%;
  }

  .categories-container {
    padding: 20px 85px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    height: 100%;
  }
`;

export const ModalContainer = styled.div`
  width: auto;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .exit-container {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    h1 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;

      color: #01ac8a;
    }

    svg {
      cursor: pointer;
    }
  }

  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 45px;
    text-align: center;

    color: #363f4e;

    margin-bottom: 70px;
  }

  .category-container {
    width: 500px;
    height: 130px;

    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .category-btn-container {
    button {
      margin-top: 20px;
      width: 132px;
      height: 54px;
      background: transparent;

      border: 2px solid #2dd1ac;
      box-sizing: border-box;
      border-radius: 30px;

      font-style: normal;
      font-weight: normal;
      font-size: 1rem;

      color: #2dd1ac;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .btn-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 410px;
    height: 55px;

    button {
      width: 196px;
      height: 54px;

      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      text-align: center;

      color: #ffffff;

      border-radius: 30px;
      border: none;
      outline: none;
    }

    .exclude-btn {
      background: #ff4d4b;
    }

    .cancel-btn {
      background: #2dd1ac;
    }
  }

  .icon {
    width: 198px;
    height: 198px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 100%;

    border: 10px solid #ff4d4b;
  }

  .desc {
    margin-top: 105px;

    width: auto;
    max-width: 317px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 45px;
    text-align: center;

    color: #363f4e;
  }

  .btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 55px;

    button {
      width: 196px;
      height: 54px;

      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      text-align: center;

      color: #ffffff;

      border-radius: 30px;
      border: none;
      outline: none;
    }

    .continue-btn {
      background: #2dd1ac;
    }
  }
`;
