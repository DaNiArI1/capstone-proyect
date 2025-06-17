import React, { useEffect, useState } from 'react';
import DishList from "./DishList";

function DishListContainer() {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        fetch('https://capstone-proyect.herokuapp.com/dishes')
            .then(response => response.json())
            .then(data => setDishes(data))
            .catch(() => setDishes([]));
    }, []);

    return (
        <div>
            <h2>Our dishes</h2>
            <DishList dishes={dishes} />
        </div>
    );
}

export default DishListContainer;
