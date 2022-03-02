import { createContext, ReactNode, useState, useEffect } from 'react'

type CartItem = {
  storeId: string
  productId: string
  amount: number
  title: string
  price: number
  enabled?: boolean
  image?: string
}

type CartContextData = {
  items: CartItem[]
  setItems: (items: CartItem[]) => void
}

export const CartContext = createContext({} as CartContextData)

type CartContext = {
  children: ReactNode
}

export function CartProvider({ children }: CartContext) {
  const [items, setItems] = useState<CartItem[]>([])

  function setProducts(products: CartItem[]) {
    setItems(products)
  }

  useEffect(() => {
    const cartItems = localStorage.getItem('ultimo.cart.items')

    if (cartItems) {
      setItems(JSON.parse(cartItems))
    }
  }, [])

  return (
    <CartContext.Provider value={{ items, setItems: setProducts }}>
      {children}
    </CartContext.Provider>
  )
}
