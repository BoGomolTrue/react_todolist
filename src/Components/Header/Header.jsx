import React from 'react';
import "./Header.css"
function Header(props) {
    return (
        <header className="header__container">
            <div className="header__wrapper">
                <div className="icon__container">
                </div>
                <h1 className="header__title">Список задач</h1>
            </div>
        </header>
    );
}

export default Header;