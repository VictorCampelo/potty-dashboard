import { Button } from 'components/atoms/Button'
import styled from 'styled-components'

export const ConfigButton = styled(Button)`
  margin-top: 20px;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #fffdf9;

  display: flex;

  div.cards-area {
    max-width: 100%;
    width: auto;

    padding: 20px 20px;

    padding-left: 7rem;

    display: flex;

    .left-area {
      display: flex;
      flex-direction: column;
      align-items: center;

      height: 95vh;

      margin-right: 20px;

      .config-button {
        width: 23vw;
        height: 6vh;
        margin-top: 20px;

        background: var(--color-primary);
        border-radius: 30px;
        border: none;

        font-style: normal;
        font-weight: 600;
        font-size: 1rem;

        color: #ffffff;
      }
    }

    .right-area {
      display: flex;
      flex-direction: column;
      height: 95vh;

      section + section {
        margin-top: 20px;
      }
    }
  }
`

export const ModalContainer = styled.div`
  width: auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .exit-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    h1 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;

      color: var(--color-secondary-darker);
    }

    svg {
      cursor: pointer;
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
      width: 350px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      margin-bottom: 20px;

      > * {
        &:last-child {
          margin-left: 32px;
        }
      }

      p {
        width: 71px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 22px;

        color: #363f4e;

        margin-right: 27px;
      }
    }
  }

  .categories-container {
    width: 500px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 30px;
  }

  .category-container {
    width: auto;
    max-width: 500px;
    height: auto;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .inputRow {
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    margin-bottom: 24px;
    > * {
      &:first-child {
        margin-right: 24px;
      }
    }
  }

  .last-inputRow {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    > * {
      &:first-child {
        margin-right: 24px;
      }
    }
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 48px;
    width: 100%;

    Button {
      width: 132px;
    }
  }

  .contact-container {
    width: 600px;

    > * {
      &:first-child {
        margin-bottom: 24px;
      }
    }

    .top-inputs {
      display: flex;

      justify-content: space-between;
      > * {
        &:first-child {
          margin-right: 24px;
        }
      }
    }

    .bottom-inputs {
      display: flex;

      justify-content: space-between;
      > * {
        &:first-child {
          margin-right: 24px;
        }
      }
    }
  }
`
