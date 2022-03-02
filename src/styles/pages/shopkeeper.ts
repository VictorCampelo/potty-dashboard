import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  div.cards-area {
    width: 100%;
    height: 100%;
    gap: 1.5rem;

    padding: 20px;

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
      flex: 1;
    }

    .bottom-area {
      display: flex;
      flex-direction: row;
      flex: 1;
    }
  }
`
