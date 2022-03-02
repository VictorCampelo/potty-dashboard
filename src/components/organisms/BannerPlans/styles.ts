import styled from 'styled-components'
import sizes from 'utils/sizes'

export const Banner = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-sm);

  ${[sizes.down('md')]} {
    img {
      display: none;
    }
    padding: var(--spacing-xxs);
  }

  .texts {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-weight: 300;
      color: #5d1a82;
    }

    p {
      max-width: 600px;
      color: #000;
    }
  }
`

export const ContainerText = styled.div`
  display: flex;
  width: 100%;
`
