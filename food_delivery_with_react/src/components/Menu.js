import React from 'react';

const Menu = ({ items, addToCart }) => {
  return (
    <div className="menu">
      {items.map((item) => (
        <div key={item.id} className="menu-item">
          <img src={item.image} alt={item.name} className="menu-item-image" />
          <span>{item.name}</span>
          <span>${item.price.toFixed(2)}</span>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
