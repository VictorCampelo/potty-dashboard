import styled from "styled-components";

export const Container = styled.section`
  width: 35vw;

  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
  border-radius: 20px;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 20px;

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 1.2rem;

      text-align: center;

      color: #01ac8a;
    }

    button {
      width: 100px;
      height: 35px;
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

      .icon {
        margin-left: 4px;
      }
    }
  }

  .bottom {
    margin: 20px 25px;

    div#Contact {
      display: flex;
      flex-direction: column;

      .contact-info {
        display: flex;
        margin-bottom: 5px;

        h2 {
          margin-left: 10px;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 18px;

          color: #363f4e;
        }
      }
    }

    div#timetable {
      display: flex;
      flex-direction: column;

      .horario {
        display: flex;

        h2 {
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 28px;

          color: #363f4e;
        }
      }
    }

    div#category {
      display: flex;
      align-items: center;
      h2 {
        margin-left: 10px;
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        line-height: 28px;

        color: #363f4e;
      }
    }

    div#local {
      display: flex;
      align-items: center;

      h2 {
        margin-left: 10px;
        font-style: normal;
        font-weight: normal;
        font-size: 0.8rem;

        color: #363f4e;
      }
    }
  }
`;
