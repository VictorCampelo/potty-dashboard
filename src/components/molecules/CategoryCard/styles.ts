import styled from 'styled-components'

export const Container = styled.div`
  .card-container {
    /* width: 154px; */
    height: 32px;
    padding-left: 10px;
    width: fit-content;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border: 1px solid #363f4e;
    border-radius: 30px;

    margin-right: 10px;
    margin-bottom: 10px;

    .icon {
      width: 20px;
      height: 20px;

      display: flex;
      align-items: center;

      margin: 6px;
      margin-left: 9px;
    }

    .label {
      /* display: flex;
      align-items: center; */

      width: 100%;
      text-align: center;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;

      color: #363f4e;
    }

    .close-btn {
      width: 28px;
      height: 30px;

      display: flex;
      align-items: center;

      margin-right: 2px;

      cursor: pointer;

      .wrap {
        width: 2px;
        height: 100%;

        background: linear-gradient(
          0deg,
          rgba(108, 112, 121, 0) 0%,
          rgba(108, 112, 121, 0.26) 50%,
          rgba(108, 112, 121, 0) 100%
        );
      }
    }
  }
`
