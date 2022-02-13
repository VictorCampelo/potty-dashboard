import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  margin: var(--spacing-xl) 0;

  h1 {
    text-align: center;
    color: var(--color-secondary-darker);
    margin-bottom: var(--spacing-xxxl);
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--spacing-xxl);
  }
`
