import { CartContext } from 'contexts/CartContext'
import router from 'next/router'
import { useContext } from 'react'
import styled from 'styled-components'
import sizes from 'utils/sizes'

interface CartButtonProps {
  isFromProduct?: boolean
}

export const CartButton = ({ isFromProduct = false }: CartButtonProps) => {
  const { items } = useContext(CartContext)

  const total = items.reduce((prev, curr) => {
    return prev + Number(curr.price) * Number(curr.amount)
  }, 0)

  return (
    <ContainerCart
      onClick={() => router.push('/cart')}
      isFromProduct={isFromProduct}
    >
      <div className="cart-container">
        <img src="/images/cartIcon.png" alt="Cart" />
        {!isFromProduct && <div className="product-len">{items.length}</div>}
      </div>

      {items.length > 0 && (
        <p>
          {' | '} R$ {total.toFixed(2)}
        </p>
      )}
    </ContainerCart>
  )
}

interface ContainerCartProps {
  isFromProduct?: boolean
}

export const ContainerCart = styled.button<ContainerCartProps>`
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
  ${(props) => props.isFromProduct && 'position: static;'}
  ${(props) => props.isFromProduct && 'border-radius:50%;'}
  ${(props) => props.isFromProduct && 'padding: 0 var(--spacing-xxxs);'}
  ${(props) => props.isFromProduct && 'background: var(--black-800);'}


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
