import styled from 'styled-components'
import sizes from 'utils/sizes'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #fffdf9;

  display: flex;

  div.cards-area {
    width: 100%;
    height: 100%;

    padding: 20px 20px;

    padding-left: 7vw;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 1rem;

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
