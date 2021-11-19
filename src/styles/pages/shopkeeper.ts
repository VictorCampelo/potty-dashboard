import styled from 'styled-components'
import sizes from 'utils/sizes'

export const Container = styled.div`
  padding: 20px 20px;
  width: 100%;
  height: 100vh;
  background: #fffdf9;

  display: flex;

  div.cards-area {
    width: 100%;

    padding-left: 5vw;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

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
