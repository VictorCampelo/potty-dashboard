import { CartContext } from 'contexts/CartContext'
import { useContext } from 'react'
import styled from 'styled-components'

interface Counter {
  id: string;
}

const Counter = ({ id }: Counter) => {
  const { items, setItems } = useContext(CartContext)

  return (
    <Container>
      <Button
        className={items.find(it => it.productId == id).amount == 1 && 'inactive'}
        onClick={() => {
          if (items.find(it => it.productId == id).amount > 1) setItems(items.map(it => {
            if(it.productId == id)
              return {
                ...it,
                amount: it.amount - 1
              }
            else return it
          }))
        }}
      >
        -
      </Button>
      {items.find(it => it.productId == id).amount}
      <Button
        onClick={() => {
          setItems(items.map(it => {
            if(it.productId == id)
              return {
                ...it,
                amount: it.amount + 1
              }
            else return it
          }))
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
