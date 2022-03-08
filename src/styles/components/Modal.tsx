import styled from 'styled-components'

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xxxs);
  width: 400px;

  .productInformation {
    display: flex;
    gap: 20px;

    .imageArea {
      width: 125px;
      height: 142px;

      margin: var(--spacing-quarck);

      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
    }

    .description {
      display: flex;
      flex-direction: column;

      .price {
        display: flex;
        gap: var(--spacing-md);
        font-weight: 600;
      }
    }
  }

  .totalPrice {
    font-weight: 600;
  }
`
export const ModalContainer = styled.div`
  /* width: 90%; */
  /* width: 100%; */

  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacing-xxxs);
    .information {
      display: flex;
      gap: var(--spacing-lg);
      align-items: center;

      span {
        color: var(--gray-300);
      }
    }

    .close {
      cursor: pointer;
    }
  }

  .content {
    display: flex;
    gap: var(--spacing-xxs);

    .leftContainer {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-xs);
      padding-right: 10px;
      height: 320px;
      overflow-y: scroll;
      ::-webkit-scrollbar {
        width: 7px;
      }

      ::-webkit-scrollbar-thumb {
        background: var(--gray-300);
        height: 50px;
        border-radius: 5px;
      }
    }
    .rightContainer {
      margin: 0 1rem 0 1rem;
      width: 310px;
      .gradient {
        background: rgb(255, 255, 255);
        background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0) 8%,
          rgba(255, 255, 255, 0.22202384371717432) 24%,
          rgba(255, 255, 255, 0.5329482134650736) 41%,
          rgba(255, 255, 255, 0.7486344879748774) 60%,
          rgba(255, 255, 255, 1) 100%
        );
        height: 30px;
        transform: translateY(25px);
      }
      .status {
        display: flex;
        flex-direction: column;
        width: 50%;
        /* margin-bottom: var(--spacing-xxxs); */
        /* height: 100px; */
        .statusButton {
          width: 100%;
          flex: 1;
          border-radius: 8px;
          background: var(--yellow);
          color: var(--gray-700);
          font-weight: bold;
          border: none;
          height: 38px;
          padding: 0.25rem 0 0.25rem 0;
          &.confirm {
            background: var(--confirmation);
            color: white;
          }

          &.refused {
            background: var(--red);
            color: white;
          }

          &.recived {
            background: var(--gray-700);
            color: white;
          }
        }
      }

      .informationOrder {
        height: 300px;
        overflow-y: scroll;
        padding-right: 10px;
        ::-webkit-scrollbar {
          width: 7px;
        }

        ::-webkit-scrollbar-thumb {
          background: var(--gray-300);
          height: 50px;
          border-radius: 5px;
        }
        .resume,
        .payment,
        .localization {
          margin: 1rem 0 1rem 0;

          .title {
            margin-bottom: 1rem;
          }
          div {
            display: flex;
            justify-content: space-between;
          }
        }

        .localization {
          display: flex;
          flex-direction: column;

          .phone {
            margin-top: var(--spacing-xxxs);
          }
        }
      }
    }
  }
  .buttonsContainer {
    div {
      display: flex;
      width: 50%;
      gap: var(--spacing-xxxs);
      margin: auto;
      margin-top: 2rem;
    }
  }
`
