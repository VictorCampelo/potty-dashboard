import styled from 'styled-components'

interface PropsContainer {
  color: string
}

export const Container = styled.div<PropsContainer>`
  width: 100%;

  margin: var(--spacing-xl) 0;

  h1 {
    text-align: center;
    color: ${(props) => props.color};
    margin-bottom: var(--spacing-xxxl);
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--spacing-xxl);
  }
`
