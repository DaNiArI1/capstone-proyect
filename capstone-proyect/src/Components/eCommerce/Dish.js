import React from 'react';
import DishCount from './DishCount';

/**
 * Displays a single dish information card.
 */
function Dish({ image, id, stock, name, description, price }) {
  return (
    <div className="dish-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <DishCount stock={stock} />
    </div>
  );
}

export default Dish;
