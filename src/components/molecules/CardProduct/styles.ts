import styled from 'styled-components'

export const Container = styled.div`
  .info {
    width: 320px;
    padding: 10px 20px 10px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    background: #f4f4f6;

    border-radius: 8px;
    margin-right: 10px;

    .left-area {
      display: flex;
      align-items: center;

      img {
        width: 45px;
        height: 45px;
      }

      .titles {
        margin-left: 20px;

        display: flex;
        flex-direction: column;

        h2 {
          font-weight: 600;
          font-size: 0.85rem;
          line-height: 20px;

          color: var(--black-800);
        }
        h3 {
          font-family: Poppins;
          font-style: normal;
          font-weight: normal;
          font-size: 0.7rem;
          line-height: 18px;

          /* Neutral Dark */

          color: var(--black-800);
        }
      }
    }

    p {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 0.8rem;
      line-height: 20px;

      text-align: right;
      //letter-spacing: 0.095em;

      color: #6598d9;
    }

    span {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 22px;

      text-align: right;
      //letter-spacing: 0.095em;
    }
  }
`
