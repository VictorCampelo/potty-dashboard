import styled from 'styled-components'

export const Container = styled.header`
  padding: 1rem 20px;
  background: rgba(0, 0, 0, 0.45);

  display: flex;
  justify-content: space-between;
  align-items: center;

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
      width: 10rem;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      font-size: 1.4rem;
      color: white;
      transition: 0.2s color;

      :hover {
        font-weight: bolder;
      }
    }

    button {
      padding: 8px 24px;

      border-radius: 30px;
      border: none;
      background: var(--green-confirmation);
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
        background: var(--green-confirmation-darker);
      }
    }
  }
`
