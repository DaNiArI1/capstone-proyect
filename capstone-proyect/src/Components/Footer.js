import React from 'react';
import "./Footer.modules.css";

function Footer() {
    return (
        <footer className='footer'>
            <div>
                <p>&copy; 2022 Your Company. All rights reserved.</p>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;