import { createContext, ReactNode, useState } from "react";

type CartItem = {
  storeId: string;
  productId: string;
  amount: number;
  title: string;
  price: number;
}

type CartContextData = {
  items: CartItem[]
  setItems: (items: CartItem[]) => void;
}

export const CartContext = createContext({} as CartContextData);

type CartContext = {
  children: ReactNode;
}

export function CartProvider({ children }: CartContext) {
  const [items, setItems] =  useState<CartItem[]>([]);

  function setProducts(products: CartItem[]) {
    setItems(products)
  }

  return (
    <CartContext.Provider value={{ items, setItems: setProducts }}>
      {children}
    </CartContext.Provider>
  )
}