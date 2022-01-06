import { CartContext } from 'contexts/CartContext'
import router from 'next/router'
import { useContext } from 'react'
import styled from 'styled-components'
import sizes from 'utils/sizes'

export const CartButton = () => {
  const { items } = useContext(CartContext)

  const total = items.reduce((prev, curr) => {
    return prev + Number(curr.price) * Number(curr.amount)
  }, 0)

  return (
    <ContainerCart onClick={() => router.push('/cart')}>
      <div className="cart-container">
        <img src="/images/cartIcon.png" alt="Cart" />
        <div className="product-len">{items.length}</div>
      </div>

      {items.length > 0 && (
        <p>
          {' | '} R$ {total.toFixed(2)}
        </p>
      )}
    </ContainerCart>
  )
}

export const ContainerCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  border: none;
  right: var(--spacing-lg);
  bottom: var(--spacing-lg);
  background: var(--color-primary);
  height: 62px;

  color: var(--white);
  border-radius: var(--border-radius-gg);
  padding: 0 var(--spacing-xxs);
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);

  ${[sizes.down('lgMob')]} {
    right: var(--spacing-xxs);
    bottom: var(--spacing-xs);
  }

  p {
    margin-left: var(--spacing-xxxs);
    color: var(--white);
    font-size: var(--font-size-xxs);
  }

  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;

    img {
      width: 30px;
      height: 30px;
    }
  }

  .product-len {
    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--color-secondary);
    position: absolute;
    padding: 0 var(--spacing-nano);
    top: var(--spacing-nano);
    right: -10px;
    color: var(--white);

    font-size: var(--font-size-xxxxs);
    border-radius: var(--border-radius-sm);
  }
`
