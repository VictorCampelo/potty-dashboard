import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  flex-direction: column;

  .descriptionContainer {
    width: 100%;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;

    margin-top: 10rem;
  }

  .productsContainer {
    width: 100%;
    padding: 0 2rem;
    display: flex;

    margin-top: 2rem;
  }
`