import React from 'react';
import "./Main.modules.css";

function Main() {
    return (
        <main className='main'>
            <div className="maintext">
                <h1>Little Lemon</h1>
                <h2>Miami</h2>
                <p>Main Component: The dish features a round piece of beef, topped with a layer of caviar. A green herb-infused cream is piped on top, garnished with a small leaf.</p>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/Jacques_Lameloise_DSCF6580.jpg" alt="Food" />
            <button className='bookATable'>Book a table</button>
        </main>
    );
}

export default Main;