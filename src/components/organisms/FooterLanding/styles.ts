import styled from 'styled-components'
import sizes from 'utils/sizes'

export const Register = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  width: 100%;

  padding: var(--spacing-lg);

  background-color: var(--color-secondary-darker);

  h1 {
    font-size: var(--font-size-lg);
    color: var(--white);
  }

  p {
    color: var(--white);
  }

  button {
    width: 250px;
    height: 50px;

    margin: auto;

    text-transform: uppercase;

    font-weight: normal;
    font-size: var(--font-size-xxs);
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  background: var(--white);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: var(--spacing-xs) var(--spacing-md);

  h1 {
    margin-bottom: var(--spacing-xxxs);
  }

  span {
    display: flex;
    align-items: center;
    margin-bottom: var(--spacing-nano);

    svg {
      margin-right: var(--spacing-nano);
    }
  }

  .map-bdv {
    width: 60%;
    height: 400px;
    border-radius: 36px;
  }

  ${[sizes.down('md')]} {
    width: 100%;
    margin-bottom: 0;
    border-radius: var(--border-radius-gg) var(--border-radius-gg) 0 0;
    flex-direction: column;

    .map-bdv {
      width: 100%;
      height: 250px;
      margin-top: var(--spacing-xxs);
    }
  }
`

export const ContainerTerms = styled.div`
  padding-top: var(--spacing-xs);
`
