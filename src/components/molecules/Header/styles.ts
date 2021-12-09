import styled from 'styled-components'

export const Container = styled.header`
  padding: 1rem 20px;
  background: var(--background);

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--yellow-600);

  div {
    height: 20px;
    width: 80px;
    background: grey;
    cursor: pointer;
  }

  nav {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style-type: none;

    a {
      text-decoration: none;
      cursor: pointer;
      margin-left: 3rem;
      font-size: 1.4rem;
      color: var(--black-800);
      transition: 0.2s color;

      :hover {
        color: var(--gray-600);
      }
    }

    button {
      padding: 8px 24px;

      border-radius: 30px;
      border: none;
      background: var(--color-primary);
      margin-right: 4rem;
      margin-left: 5rem;
      cursor: pointer;

      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 1.5rem;
      transition: 0.2s background;

      color: #ffffff;

      :hover {
        background: var(--color-primary-darker);
      }
    }
  }

  @media (max-width: 426px) {
    display: none;
  }
`
