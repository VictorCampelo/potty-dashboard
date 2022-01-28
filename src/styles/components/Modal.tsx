import styled from 'styled-components'

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xxxs);
  width: 400px;
  .productInformation {
    /* height: 130px; */
    width: 100%;
    display: flex;
    .description {
      display: flex;
      flex-wrap: wrap;
      .price {
        display: flex;
        gap: var(--spacing-md);
      }
    }
    .imageArea {
      width: 60%;
      margin: var(--spacing-quarck);
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
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
      .status {
        display: flex;
        flex-direction: column;
        width: 50%;
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
