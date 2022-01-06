import styled from 'styled-components'
interface ContainerProps {
  under?: boolean
}
export const Container = styled.header<ContainerProps>`
  .modal {
    padding: 30px 40px;
    ${(props) =>
      props.under && 'padding: var(--spacing-nano) var(--spacing-xxxs);'}
    .modalDescription, .modalAvaliations {
      width: 100%;
      .title {
        display: flex;
        justify-content: space-between;
        padding: var(--spacing-xxxs);
        h2 {
          margin: auto;
        }
      }

      h2 {
        margin: var(--spacing-xxxs) 0 var(--spacing-xxxs) 0;
      }
    }

    .modalAvaliations {
      .star-container {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xxxs);
        .top-container {
          display: flex;
          justify-content: center;
          gap: var(--spacing-xxxs);
          h1 {
            font-size: var(--font-size-display);
            font-weight: var(--font-weight-medium);
          }
          .star {
            display: flex;
            flex-direction: column;
            align-items: center;

            p {
              font-size: var(--font-size-sm);
            }
          }
        }
        .bot-container {
          .stars-container {
            display: flex;
            flex-wrap: wrap;
            padding: 0 var(--spacing-nano);
            div {
              width: 100%;
              display: flex;
              align-items: center;

              p {
                font-size: var(--font-size-md);
              }
            }
          }
        }
      }
    }
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
          border-radius: 16px 20px 20px 16px;
        }
      }
    }
  }
`
