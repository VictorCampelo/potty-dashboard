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

        margin-right: 28px
      }
    }
  }
`;
