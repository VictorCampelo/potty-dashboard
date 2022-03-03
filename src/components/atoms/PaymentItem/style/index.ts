import styled from 'styled-components'

export const Container = styled.label`
  width: 100%;
  display: flex;
  font-weight: 400;
  font-size: 15px;
  line-height: 22.5px;
  position: relative;
  cursor: pointer;

  input {
    width: 1px;
    height: 1px;
  }

  input:checked :after {
    content: '';
    margin-right: 8px;
    top: 2px;
    left: 2px;
    margin-top: 4px;
    display: block;
    width: 10px;
    height: 10px;
    background-color: #363f4e;
    border-radius: 3px;
    position: absolute;
  }

  :before {
    content: '';
    margin-right: 10px;
    margin-top: 4px;
    display: block;
    width: 12px;
    height: 12px;
    border: 1px solid #363f4e;
    border-radius: 3px;
  }
`
