import { useState } from 'react'
import styled from 'styled-components'

const Counter = () => {
  const [value, setValue] = useState(1)

  return (
    <Container>
      <Button
        className={value == 1 && 'inactive'}
        onClick={() => {
          if (value > 1) setValue((old) => old - 1)
        }}
      >
        -
      </Button>
      {value}
      <Button
        onClick={() => {
          setValue((old) => old + 1)
        }}
      >
        +
      </Button>
    </Container>
  )
}

export default Counter

export const Container = styled.section`
  width: 80px;
  height: 64px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between !important;
  align-items: center;
  padding: 1rem;
`

export const Button = styled.button`
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
  color: var(--green-confirmation);
  font-weight: 600;
  background: white;
  font-size: 1.5rem;

  &.inactive {
    color: var(--black-500);
  }
`
