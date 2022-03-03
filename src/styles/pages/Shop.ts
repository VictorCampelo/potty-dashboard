import { Button } from 'components/atoms/Button'
import styled from 'styled-components'

export const ConfigButton = styled(Button)`
  /* margin-top: var(--spacing-xxs); */
  /* padding-top: var(--spacing-xxxs);
  padding-bottom: var(--spacing-xxxs); */
  padding: var(--spacing-xxxs) var(--spacing-xxxs);
`

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;
  background: #fffdf9;
  div.cards-area {
    display: flex;
    margin: auto;
    /* max-width: 100%; */
    width: 100%;

    padding: var(--spacing-xxs) var(--spacing-xxs);
    /* padding-left: var(--spacing-huge); */

    .left-area {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      height: 95vh;
      margin-right: var(--spacing-xxs);

      .buttonContainer {
        width: 100%;
        display: flex;
        gap: var(--spacing-xxxs);
        margin-top: var(--spacing-xxxs);
      }
      /* .config-button {
        width: 23vw;
        height: 6vh;
        margin-top: var(--spacing-xxs);

        background: var(--color-primary);
        border-radius: var(--border-radius-gg);
        border: none;

        font-style: var(--font-style-normal);
        font-weight: var(--font-weight-medium);
        font-size: var(--font-size-xxs);

        color: var(--white);
      } */
    }

    .right-area {
      display: flex;
      flex-direction: column;
      height: 95vh;
      width: 50%;

      section + section {
        margin-top: var(--spacing-xxs);
      }
    }
  }
`

export const ModalContainer = styled.div`
  align-items: center;

  width: 600px;
  height: 450px;
  /* max-width: 800px; */

  /* styles of multselect categories */

  .exit-container {
    display: flex;
    justify-content: space-between;

    width: 100%;
    margin-bottom: 30px;

    h1 {
      font-family: var(--font-family-primary);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-medium);
      font-size: var(--font-size-md);
      line-height: 36px;

      color: var(--color-secondary-darker);
    }

    svg {
      cursor: pointer;
    }
  }

  div.payment-options {
    label {
      margin: 12px 0;
    }
  }

  .timeTables-container {
    display: flex;
    flex-direction: row;

    .left-container {
      width: 300px;
      margin-right: 72px;
    }

    .dates {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      width: 350px;
      margin-bottom: var(--spacing-xxs);

      > * {
        &:last-child {
          margin-left: var(--spacing-xs);
        }
      }

      p {
        width: 71px;
        font-family: var(--font-family-primary);
        font-style: var(--font-style-normal);
        font-weight: var(--font-weight-medium);
        font-size: var(--font-size-xxs);
        line-height: 22px;

        color: var(--black-800);

        margin-right: var(--spacing-xxs);
      }
    }
  }

  .wrap-opts {
    height: 47px;

    :last-child {
      color: red;
      font-weight: 600;
    }

    :first-child::before {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: linear-gradient(
        90deg,
        rgba(108, 112, 121, 0.01),
        #6c7079,
        rgba(108, 112, 121, 0.01)
      );
    }

    a {
      text-decoration: none;
      font-weight: 400;
      line-height: 47px;
      font-size: 15px;
    }

    ::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: linear-gradient(
        90deg,
        rgba(108, 112, 121, 0.01),
        #6c7079,
        rgba(108, 112, 121, 0.01)
      );
    }
  }

  .categories-container {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    height: 300px;

    /* width: 500px; */
    margin-bottom: var(--spacing-xs);

    .rmsc {
      width: 100%;
      margin-bottom: 20px;
    }

    .wrapper-categories-selecteds {
      display: flex;
      flex-wrap: wrap;
      width: 500px;
      margin: 0 auto;
      justify-content: space-around;
      margin-top: 50px;
    }
  }

  .category-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    width: auto;
    max-width: 500px;
    height: auto;
  }

  .desc-container {
    width: 100%;
    height: 50vh;

    padding: var(--spacing-quarck) var(--spacing-xxs);

    overflow-x: hidden;
    overflow-y: auto;
    .top {
      width: 500px;
      position: relative;

      section {
        position: relative;

        #banner {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: var(--border-radius-sm);
        }

        #imageBtn {
          display: flex;
          align-items: center;
          justify-content: center;

          position: absolute;
          right: var(--spacing-nano);
          bottom: var(--spacing-xxxs);

          width: 41px;
          height: 41px;

          background-color: var(--color-primary);

          border-radius: 100%;
          border: var(--border-width-thick) solid var(--white);

          label {
            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;
          }
        }
      }

      #icon {
        position: absolute;
        left: 50%;
        bottom: -90px;
        transform: translate(-50%);
      }
    }

    .bottom {
      display: flex;
      flex-direction: column;

      margin-top: 70px;
      width: 500px;
      height: auto;

      gap: 1rem;
    }
  }

  .inputRow {
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    margin-bottom: var(--spacing-xxs);
    > * {
      &:first-child {
        margin-right: var(--spacing-xxs);
      }
    }
  }

  .last-inputRow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > * {
      &:first-child {
        margin-right: var(--spacing-xxs);
      }
    }
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    /* margin-top: var(--spacing-md); */
    margin-top: 20px;

    Button {
      width: 132px;
    }
  }

  .contact-container {
    width: 600px;

    > * {
      &:first-child {
        margin-bottom: var(--spacing-xxs);
      }
    }

    .top-inputs {
      display: flex;

      justify-content: space-between;
      > * {
        &:first-child {
          margin-right: var(--spacing-xxs);
        }
      }
    }

    .bottom-inputs {
      display: flex;

      justify-content: space-between;
      > * {
        &:first-child {
          margin-right: var(--spacing-xxs);
        }
      }
    }
  }
`
