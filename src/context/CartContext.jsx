import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [count,setCount] = useState(51)
    return <CartContext.Provider value={{count,setCount}}>{children}</CartContext.Provider>
}