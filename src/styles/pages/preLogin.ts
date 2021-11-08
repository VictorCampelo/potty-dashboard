import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;

  form {
    width: 530px;
    background: var(--white);
    border-radius: 30px;
    box-shadow: 0px 0px 18px -4px #cccccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 3rem 2rem 3rem;
    overflow-x: hidden;

    .title {
      width: 100%;
      margin-bottom: 1rem;

      h1 {
        font-size: 1.875rem;
        font-weight: 600;
      }

      p {
        font-size: 0.875rem;
        text-align: justify;
        color: var(--gray-300);
        margin-top: 0.5rem;
      }
    }

    .inputContainer {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 1rem;
    }

    .buttonContainer {
      margin-top: 2rem;
    }

    .divisorContainer {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      margin-top: 1.5rem;
    }

    .divisor {
      width: 25%;
      height: 1px;
      border-bottom: 1px solid black;
      margin: 0 0.5rem;
    }

    .social {
      width: 45%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.5rem;

      svg {
        filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));
      }
    }

    .register {
      font-size: 1rem;
      margin-top: 1.5rem;

      a {
        font-weight: 600;
      }
    }

    .inputRow {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
  }
`