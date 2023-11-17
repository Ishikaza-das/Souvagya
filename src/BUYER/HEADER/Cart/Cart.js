import React, { useState } from 'react'
// import Mans from "../Navbar/"

const Cart = () => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((mans) => mans.id !== productId);
    setCart(updatedCart);
  };
  return (
    <div>
      <h1>Cart</h1>
      <button onClick={() => setCart([])}>Clear Cart</button>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <>
            <li key={item.id}>{item.name}</li>
            <li >{item.price}</li>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart