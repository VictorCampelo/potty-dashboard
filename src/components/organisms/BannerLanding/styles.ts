import styled from 'styled-components'

export const Banner = styled.main`
  display: flex;

  background-color: white;

  img {
    width: 60%;
    filter: drop-shadow(0px 0px 20px rgba(54, 63, 78, 0.2));
    border-radius: 0px 0px 57px 0px;
  }

  .texts {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);

    padding: var(--spacing-xs);

    text-align: center;

    button {
      width: 65%;
      height: 50px;
      font-size: var(--font-size-xs);
    }
  }
`
