import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: var(--spacing-xxxs) 20px;
  background: var(--background);

  border-bottom: var(--border-width-thin) solid var(--yellow-600);

  @media (max-width: 426px) {
    display: none;
  }
`
