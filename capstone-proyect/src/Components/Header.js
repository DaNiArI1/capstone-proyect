import React from 'react';
import Style from "./Header.modules.css";

function Header() {
    return (
        <header className={Style.header}>
            <img src="https://www.ironhack.com/assets/shared/logo.svg" alt="Ironhack logo" />
        </header>
    );
}

export default Header;