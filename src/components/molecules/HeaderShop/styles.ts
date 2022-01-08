import { filterProps } from 'recharts/types/util/types'
import styled from 'styled-components'
import sizes from '../../../utils/sizes'

interface ContainerProps {
  isMain: boolean
}

export const Container = styled.header<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-nano) var(--spacing-xxxs);

  ${(props) => props.isMain === false && 'background: rgba(0,0,0,0.4);'}
  ${(props) => props.isMain === false && 'color: var(--white);'}

  z-index: 5;

  .logo {
    display: flex;
    align-content: center;
    ${(props) => props.isMain == false && 'display: none;'}
    img {
      max-width: 80%;
    }
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 80%;

    ${(props) => props.isMain === false && 'width: 100%;'}
    list-style-type: none;

    .authContainer {
      display: flex;
      align-items: center;
      margin-left: var(--spacing-lg);

      .register {
        color: var(--color-primary);
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;

        background: var(--color-primary);

        margin-right: var(--spacing-lg);
        margin-left: var(--spacing-xxxs);
        padding: var(--spacing-nano) var(--spacing-xs);

        border-radius: var(--border-radius-gg);
        border: none;
        cursor: pointer;

        font-family: var(--font-family-primary);
        font-style: var(--font-style-normal);
        font-weight: var(--font-style-normal);
        font-size: var(--spacing-xxs);
        transition: 0.2s background;

        color: var(--white);

        :hover {
          background: var(--color-primary-darker);
        }
      }
    }
    a {
      text-decoration: none;
      cursor: pointer;
      margin-left: var(--spacing-xs);
      font-size: var(--font-size-sm);
      transition: 0.2s background;
      padding: var(--spacing-quarck);
      border-radius: var(--border-radius-sm);
      border: none;

      :hover {
        padding: var(--spacing-quarck);
        background: var(--gray-200);
      }
    }
  }

  ${[sizes.down('lgMob')]} {
    display: none;
  }
`
