import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`

export const Container = styled.main`
  display: flex;
  width: 100vw;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: scroll;

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

    margin-top: 1.5rem;

    .products {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding-left: 1.5rem;

      .filterWrapper {
        display: flex;
        flex: 1;
        margin-bottom: 1.5rem;
      }

      .productWrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }
    }

    .categoriesContainer {
      width: 220px;
      height: 100%;
      display: flex;
    }
  }
`