import React, { useState } from 'react'

function DishCount({ stock }) {

   const [count, setCount] = useState(0)

   function increase() {
    if (count < stock) {
      setCount(count + 1)
    } else {
      alert(`You can only order up to ${stock} dishes`)
    }
   }

   function decrease() {
    if (count > 0) {
      setCount(count - 1)
    } else {
      alert('You must order at least 1 dish')
    }
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

export default DishCount;
