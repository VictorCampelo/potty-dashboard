import styled from 'styled-components'

export const Container = styled.body`
  background: var(--gray-100);
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  box-sizing: border-box;

  button {
    border: none;
    background-color: transparent;
    font-size: 24px;
    font-weight: 400;
    text-align: left;
  }

  .wrap-search-content,
  .wrap-result-text {
    max-width: 1000px;
    margin: 0 auto;
  }
  .wrap-search-content {
    padding: 65px 20px 50px 20px;
    div {
      min-width: 100%;
      height: 60px;
    }
  }

  .wrap-result-text {
    padding: 0 20px 60px 20px;

    h3 {
      font-size: 32px;
      font-weight: 500;
    }
  }
`

export const WrapMainContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 9fr;
  padding: 0 20px;
`

export const LeftSideContainer = styled.div`
  padding: 0 40px;

  h3 {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
    color: var(--color-secondary-darker);
  }

  .wrap-order,
  .wrap-filter {
    padding: 25px;
    width: 269px;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 30px;
    border-radius: 30px;
  }

  .wrap-order-icons {
    width: 200px;
    padding: 25px;
    height: 73px;
    display: flex;
    background-color: var(--white);
    justify-content: space-around;
    margin-bottom: 30px;
    border-radius: 30px;

    svg {
      font-size: 2rem;
    }
  }

  .wrap-order {
    height: 286px;
    max-width: 270px;
    padding: 23px 32px;

    a {
      text-decoration: none;
      font-size: 24px;
      font-weight: 400;
    }

    button + button::before {
      content: '';
      display: block;
      width: 100%;
      background: linear-gradient(
        90deg,
        rgba(108, 112, 121, 0),
        rgba(108, 112, 121, 0.26),
        rgba(108, 112, 121, 0)
      );
      height: 1px;
      margin-bottom: 15px;
    }
  }

  .wrap-filter {
    height: 150px;
    padding: 23px 32px;
    font-size: 24px;
    font-weight: 400;
    position: relative;

    div + div::before {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      margin-bottom: 15px;
      background: linear-gradient(
        90deg,
        rgba(108, 112, 121, 0),
        rgba(108, 112, 121, 0.26),
        rgba(108, 112, 121, 0)
      );
    }

    .wrap-input {
      position: relative;

      label span {
        margin-left: 20px;
      }

      label::after {
        content: '';
        width: 16px;
        height: 16px;
        border: 1px solid black;
        display: block;
        border-radius: 4px;
        position: absolute;
        left: -10px;
        bottom: 9px;
      }

      input:checked:before {
        content: '';
        width: 14px;
        height: 14px;
        background-color: black;
        display: block;
        border-radius: 4px;
        position: absolute;
        left: -8px;
        bottom: 11px;
      }

      input {
        width: 0px;
        height: 0px;
      }
    }
  }
`

export const MainContent = styled.div`
  h3 {
    font-size: 32px;
    font-weight: 500;
  }
`
