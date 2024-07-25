import React from 'react';
import "./Main.modules.css";

function Main() {
    return (
        <main className='main'>
            <div className="maintext">
                <h1>Little Lemon</h1>
                <h2>Miami</h2>
                <p>Food Description</p>
                <button className='bookATable'>Book a table</button>
            </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/Jacques_Lameloise_DSCF6580.jpg" alt="Food" />
        </main>
    );
}

export default Main;