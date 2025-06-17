import React from 'react';
import Dish from './Dish';
import dishesData from './StockDishes.json';

function DishList({ dishes = dishesData }) {
  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <Dish key={dish.id} {...dish} />
      ))}
    </div>
  );
}

export default DishList;
