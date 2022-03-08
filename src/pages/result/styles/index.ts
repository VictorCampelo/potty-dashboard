import styled from 'styled-components'

export const Container = styled.body`
  background: var(--gray-100);
  max-width: 1300px;
  margin: 0 auto;
  min-height: 100vh;
  box-sizing: border-box;

  .wrap-search-content,
  .wrap-result-text {
    max-width: 1000px;
    margin: 0 auto;
  }
  .wrap-search-content {
    padding: 65px 20px 50px 20px;
    div {
      min-width: 100%;
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

  overflow-x: hidden;
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

    a + a::before {
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
  }
`

export const MainContent = styled.div``
