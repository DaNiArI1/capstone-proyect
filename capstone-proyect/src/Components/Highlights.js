import React from 'react';
import "./Highlights.modules.css";

function Highlights() {

    const highlights = [
        {
            title: 'Highlight 1',
            description: 'Description for Highlight 1',
            image: 'https://www.barcelonaculinaryhub.com/sites/bch.com/files/images/avant-garde-food-bch-min.jpg'
        },
        {
            title: 'Highlight 2',
            description: 'Descrption for Higlight 2',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvho_ADOOMFJjWpcnZTqyRGH2XEJWWByTyYw&s'
        },
        {
            title: 'Highlight 3',
            description: 'Description for Highlight 3',
            image: 'https://media.scoolinary.app/blog/images/2022/05/Paco-Roncero-P3550420.jpg'
        }
    ];

    return (
        <div className='highlight'>
            <h2>Specials</h2>
            <button className='orderOnline'>Order online</button>
            <ul>
                {highlights.map((highlight, index) => (
                    <li key={index}>
                        <h3>{highlight.title}</h3>
                        <p>{highlight.description}</p>
                        <img src={highlight.image} alt={highlight.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Highlights;