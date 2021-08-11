import styled from 'styled-components';

export const Container = styled.main`
  width: auto;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;

  form {
    width: 550px;
    background: var(--white);
    border-radius: 30px;
    box-shadow: 0px 0px 18px -4px #CCCCCC;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
    /* margin-top: 4rem; */

    .title {
      width: 100%;
      margin-bottom: 1.5rem;
      
      h1 {
        font-size: 1.875rem;
        font-weight: 600;
      }
    }

    .inputContainer {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 1.5rem
    }

    .buttonContainer {
      margin-top: 3rem;
    }

    .divisorContainer {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;
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
        text-decoration: underline;
      }
    }
  }
`