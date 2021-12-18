import styled from 'styled-components'

type ContainerProps = {
  background: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 222px;
  /* margin: 0 0 1rem 0; */
  .imgContainer {
    ${(props) => 'background: ' + props.background + ';'}
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
  p {
    font-weight: bold;
  }
`
