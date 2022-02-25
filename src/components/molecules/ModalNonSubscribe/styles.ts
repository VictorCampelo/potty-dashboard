import styled from 'styled-components'
import sizes from 'utils/sizes'

export const Container = styled.div`
  max-width: 720px;
  position: relative;

  .title {
    color: var(--color-secondary-darker);
    font-weight: 500;
    font-size: 36px;
    ${[sizes.down('md')]} {
      font-size: 30px;
    }
  }

  .paragraph {
    color: var(--black-1000);
    font-size: 24px;
    ${[sizes.down('md')]} {
      font-size: 18px;
    }

    margin: 32px 0;
  }

  .description {
    color: var(--gray-700);
  }

  .buttons {
    width: 100%;
    max-width: 320px;

    display: flex;
    flex-direction: column;
    margin-top: 76px;

    ${[sizes.down('md')]} {
      max-width: none;
      margin-top: 40px;
    }

    .decline {
      font-size: 20px;
      line-height: 48px;
      color: var(--color-primary);
      text-align: center;
    }
  }

  .image {
    ${[sizes.down('md')]} {
      display: none;
    }
    position: absolute;
    width: 300px;
    height: 250px;
    right: 0;
    bottom: 0;
  }
`
