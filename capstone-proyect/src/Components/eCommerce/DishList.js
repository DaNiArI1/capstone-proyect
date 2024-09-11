const dishList = dishes.map((dish) => {
    return (
        <div key={dish.id}>
            <h3>{dish.name}</h3>
            <p>Price: ${dish.price}</p>
            <p>{dish.description}</p>
            <img src={dish.image} alt={dish.name} />
        </div>
    );
});

export default dishList;