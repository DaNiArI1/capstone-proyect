import React, { useState } from 'react'
import dishesStock from './StockDishes'

function DishCount() {

   const [count, setCount] = useState(0)

   function increase() {
    if (count < dishesStock.stock) {
      setCount(count + 1)
    }
    else {
      alert('You can only order up to 10 dishes')
    }
    }

   function decrease() {
    if (count > 0)
      setCount(count - 1)
    else
      alert('You must order at least 1 dish')
    }

    function reset() {
      setCount(0)
    }

  return (
    <div>
        <button onClick={increase}>+</button>
        <span>{count}</span>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default DishCount