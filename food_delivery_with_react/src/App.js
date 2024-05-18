import React, { useState } from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import burger from './media/burger.webp';
import pizza from './media/pizza.webp'; // Importing another image for demonstration
import salad from './media/biryani.webp'; // Importing another image for demonstration

const App = () => {
  const [menuItems] = useState([
    { id: 1, name: 'Burger', price: 5.99, image: burger },
    { id: 2, name: 'Pizza', price: 8.99, image: pizza },
    { id: 3, name: 'Biryani', price: 4.99, image: salad },
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCartItems.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      } else {
        return [...prevCartItems, { ...item, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (item) => {
    setCartItems((prevCartItems) => 
      prevCartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decreaseQuantity = (item) => {
    setCartItems((prevCartItems) => 
      prevCartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 1) }
          : cartItem
      )
    );
  };

  const removeFromCart = (item) => {
    setCartItems((prevCartItems) => 
      prevCartItems.filter(cartItem => cartItem.id !== item.id)
    );
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Shyam's Food Delivery App</h1>
        <div className="cart-container">
          <div className="cart-icon" onClick={toggleCartVisibility}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})</span>
          </div>
          {isCartVisible && <Cart cartItems={cartItems} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} />}
        </div>
      </header>
      <main>
        <Menu items={menuItems} addToCart={addToCart} />
      </main>
    </div>
  );
};

export default App;
