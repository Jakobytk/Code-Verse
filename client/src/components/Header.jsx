import React from 'react';
import '/src/App.css';

const Header = () => {
    return (
        <header>
            <nav>
                <a href="#" className="logo">CodeVerse</a>
                <div className="dropdown">
                    <button className="dropbtn">Menu</button>
                    <div className="dropdown-content">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="https://github.com/Jakobytk">Jacob's GitHub</a>
                        <a href="https://github.com/KKBellew">KKBellew's GitHub</a>
                        <a href="https://github.com/KristoferVickers">Kristofer's GitHub</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;