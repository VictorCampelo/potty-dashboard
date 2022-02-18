import styled from 'styled-components'
import sizes from 'utils/sizes'

export const Container = styled.nav`
  ${[sizes.up('sm')]} {
    display: none;
  }

  width: 100%;
  height: 85px;

  z-index: 1;

  display: flex;
  justify-content: space-around;
  align-items: center;

  padding-top: var(--spacing-xs);
  padding-bottom: var(--spacing-xxs);

  box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
  border-radius: 32px 32px 0px 0px;

  background-color: var(--white);

  .link {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: var(--black-800);

    border-radius: var(--border-radius-circular);

    .icon {
      font-size: var(--font-size-xlg);
    }

    .text {
      font-weight: 500;
      font-size: var(--font-size-xxxs);

      color: var(--black-800);
    }
  }

  .link.active,
  .link.active .text {
    color: var(--color-primary);
  }
`
