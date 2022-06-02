import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Cart from './Cart'

const Product = () => {
  const {isUser} = useContext(AuthContext);
  return (
    <div>
        Product
        <Cart />
        <h1>{isUser ? "Enjoy Shopping":"Please Login"}</h1>
    </div>
  )
}

export default Product