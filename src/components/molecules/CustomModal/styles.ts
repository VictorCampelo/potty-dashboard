import styled from 'styled-components'

export const Container = styled.header`
  .modal {
    padding: 30px 40px;

    .modalAuth {
      .google,
      .facebook,
      .email {
        border-radius: 20px;
        padding: 1px 1rem 1px 1px;
        color: var(--white);
        margin-bottom: 1rem;
        display: flex;
        gap: 10px;
        align-items: center;

        div {
          background: var(--white);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .google {
        background: var(--blue-primary);
      }

      .facebook {
        background: #3b5998;
      }

      .email {
        border: 2px solid var(--black-800);
        color: var(--black-800);
        padding: 0 1rem 0 0;

        div {
          border: 5px solid var(--black-800);
        }
      }
    }
  }
`
