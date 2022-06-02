import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import styles from '../styles/Cart.module.css';

const Cart = () => {
  const {count, setCount} = useContext(CartContext)
  return (
    <div className={styles.cart}>
        Cart
        <button onClick={()=>setCount(count+1)}>Add To Cart</button>
    </div>
  )
}

export default Cart