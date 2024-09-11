import React from 'react';
import DishCount from './DishCount';
import dishesStock from './StockDishes';

function dish ({ image, name, description, price }) {

  const dish = [dish, setDish] = useState(dishesStock)
  
  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} />
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <p>Price: ${dish.price}</p>
      <DishCount />
    </div>
  );
};

export default Dish;