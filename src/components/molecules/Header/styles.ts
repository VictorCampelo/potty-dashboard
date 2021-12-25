import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: var(--spacing-nano) var(--spacing-xxxs);
  background: var(--background);

  border-bottom: var(--border-width-thin) solid var(--yellow-600);

  .logo {
    display: flex;
    align-content: center;
    img {
      max-width: 80%;
    }
  }

  @media (max-width: 426px) {
    display: none;
  }
`
