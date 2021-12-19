import styled from 'styled-components'
import sizes from '../../../utils/sizes'

export const Container = styled.header`
  //width: 100%;
  z-index: 5;
  padding: 1rem 20px;
  /* background: rgba(0, 0, 0, 0.1); */

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--gray-300);
  .logo {
    display: flex;
    align-content: center;
  }

  nav {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style-type: none;

    .authContainer {
      display: flex;
      align-items: center;
      margin-left: 4rem;
      .register {
        color: var(--color-primary);
      }

      button {
        padding: 8px 2rem;

        border-radius: 30px;
        border: none;
        background: var(--color-primary);
        margin-right: 4rem;
        margin-left: 1rem;
        cursor: pointer;

        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 1.5rem;
        transition: 0.2s background;

        color: #ffffff;

        display: flex;
        justify-content: center;
        align-items: center;

        :hover {
          background: var(--color-primary-darker);
        }
      }
    }
    a {
      text-decoration: none;
      cursor: pointer;
      margin-left: 2rem;
      font-size: 1.2rem;
      /* color: var(--white); */
      transition: 0.2s background;
      padding: 5px;
      border-radius: 10px;
      border: none;

      :hover {
        padding: 5px;
        background: var(--yellow);
      }
    }
  }

  ${[sizes.down('lgMob')]} {
    display: none;
  }
`
