import React, { useEffect } from 'react'

function DishListContainer() {

    const [ dishes, setDishes ] = useState([])

    useEffect(() => {
        fetch('https://capstone-proyect.herokuapp.com/dishes')
            .then(response => response.json())
            .then(data => setDishes(data))
    }, [dishes])

  return (
    <div>
        <h2>Our dishes</h2>
        <DishList/>
    </div>
  )
}

export default DishListContainer