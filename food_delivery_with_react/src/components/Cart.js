import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  return (
    <div className="cart">
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <div className="cart-item">
              <span>{item.name}</span>
              <div className="quantity-control">
                <button onClick={() => decreaseQuantity(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item)}>+</button>
              </div>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <button className="remove-button" onClick={() => removeFromCart(item)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
