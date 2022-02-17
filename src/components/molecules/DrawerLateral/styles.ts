import styled from 'styled-components'
import sizes from 'utils/sizes'

export const Container = styled.header`
  position: flex;
  height: 100%;
  padding: var(--font-size-sm);
  z-index: 1;

  ${[sizes.down('sm')]} {
    display: none;
  }

  .showNames {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 13vw;
    height: 100%;

    border-radius: var(--border-radius-gg);
    background: var(--white);

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      width: 100%;
      height: 70%;

      .option {
        display: flex;
        align-items: center;

        width: 70%;
        cursor: pointer;

        svg {
          width: 1.2rem;
          height: 1.2rem;
          margin-bottom: var(--spacing-quarck);
        }

        a {
          font-family: var(--font-family-primary);
          font-style: var(--font-style-normal);
          font-weight: var(--font-weight-regular);
          font-size: var(--font-size-xs);

          margin-left: var(--spacing-nano);
          color: var(--black-800);
        }

        .red-option {
          font-family: var(--font-family-primary);
          font-style: var(--font-style-normal);
          font-weight: var(--font-weight-regular);
          font-size: var(--font-size-xxs);

          margin-left: var(--spacing-nano);

          color: var(--red);
        }
      }
    }
  }

  .noShowNames {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 70px;
    height: 100%;

    border-radius: var(--border-radius-gg);
    background: var(--white);

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: all 0.3s ease-in-out;

    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      width: 100%;
      height: 70%;

      .option {
        display: flex;
        align-items: center;
        cursor: pointer;

        svg {
          width: 1.2rem;
          height: 1.2rem;
          margin-bottom: var(--spacing-quarck);
        }

        a {
          overflow: hidden;
          height: 0;
          width: 0;
          opacity: 0;
          transition: all 0.3s ease-in-out;
          margin-left: 0px;
        }

        .red-option {
          margin-left: 0px;
          overflow: hidden;
          height: 0;
          width: 0;
          opacity: 0;
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
`

type ResizeProps = {
  active: boolean
}

export const ResizeContainer = styled.div<ResizeProps>`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  height: 49px;

  .resbtn {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    border-radius: 50px 0 0 50px;
    background: var(--color-primary);
    cursor: pointer;

    svg {
      transition: transform 0.5s;

      &.active {
        transform: rotate(180deg);
      }
    }
  }
`
