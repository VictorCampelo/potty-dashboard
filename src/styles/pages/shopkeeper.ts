import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  div.cards-area {
    width: 100%;
    height: 100%;

    padding: 20px;
    padding-left: 7rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    #imagem-grafico {
      width: 500px;
      height: 150px;
    }
    .top-area {
      display: flex;
      flex-direction: row;
    }

    .bottom-area {
      display: flex;
      flex-direction: row;
    }
  }
`
