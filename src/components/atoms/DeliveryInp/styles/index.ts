import styled from 'styled-components'

export const Container = styled.label`
  display: flex;
  position: relative;
  cursor: pointer;

  input:checked ::after {
    position: absolute;
    content: '';
    display: block;
    left: 2px;
    top: 2px;
    width: 10px;
    height: 10px;
    border-radius: 2.5px;
    background-color: #363f4e;
    margin-top: 5px;
    margin-right: 5px;
  }

  :before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 2.5px;
    border: 1px solid #363f4e;
    margin-top: 5px;
    margin-right: 6px;
  }

  input {
    width: 1px;
    height: 1px;
  }
`
