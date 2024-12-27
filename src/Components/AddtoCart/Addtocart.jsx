import React, { useState } from 'react';
import './Addtocart.css'

const AddToCartPage = () => {
  const products = [
    { 
      id: 1, 
      name: 'Smartphone', 
      price: 699 
    },
    { 
      id: 2, 
      name: 'Laptop', 
      price: 999 
    },
    { 
      id: 3, 
      name: 'Headphones', 
      price: 199 
    },
    { 
      id: 4, 
      name: 'Smartwatch', 
      price: 249 
    },
    { 
      id: 5, 
      name: 'Tablet', 
      price: 399 
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const product = prevCart.find((item) => item.id === product.id);
      if (product) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="add-to-cart-page">
      
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>) 
        : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <span>{item.quantity} x ${item.price}</span>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <h3>
              Total: $
              {cart.reduce((total, item) => total + item.quantity * item.price, 0)}
            </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default AddToCartPage;

