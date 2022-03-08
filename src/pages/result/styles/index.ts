import styled from 'styled-components'

export const Container = styled.body`
  background: var(--gray-100);
  max-width: 1300px;
  margin: 0 auto;
  border: 1px solid black;
  min-height: 100vh;

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
`

export const LeftSideContainer = styled.div`
  border: 1px solid black;
`

export const MainContent = styled.div`
  border: 1px solid black;
`
