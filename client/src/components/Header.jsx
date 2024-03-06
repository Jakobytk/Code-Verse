import React from 'react';
import NavBar from  './NavBar';

const Header = ({onPageChange}) => {
    return (
        <header>
            <nav>
                <a href="#" className="logo">CodeVerse</a>
                <div className="dropdown">
                    <button className="dropbtn">Menu</button>
                    <div className="dropdown-content">
                        <NavBar onPageChange={onPageChange} />
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