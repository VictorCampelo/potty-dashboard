import styled from 'styled-components'

interface ContainerTypes {
  width?: string
}

export const Container = styled.section<ContainerTypes>`
  max-width: ${(props) => (props.width ? `${props.width}px` : `100vw`)};
  width: 100%;
  max-height: 100vh;
  height: 100%;

  margin-right: 20px;

  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
  border-radius: 30px;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 36px;

    /* identical to box height */
    text-align: center;

    color: #363f4e;
  }

  select {
    width: 6.2rem;
    border: 1px solid #d8d9dd;
    box-sizing: border-box;
    border-radius: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 0.85rem;
    color: #363f4e;
    outline: none;
  }

  .product {
    width: 100%;
    height: 100%;
    max-height: 38vh;

    margin-top: 24px;
    padding: 0px 20px;

    overflow-y: auto;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

    scrollbar-width: thin;
    scrollbar-color: #c4c4c4 transparent;

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #c4c4c4;
      border-radius: 20px;
    }
  }
`
