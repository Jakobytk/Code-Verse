import React from 'react';
import NavBar from './NavBar';
import './Header.css'; 

const Header = () => {
    return (
        <header>
            <NavBar />
            <div className="dropdown">
                <button className="dropbtn">&#128070; GitHub</button>
                <div className="dropdown-content">
                    <a href="https://github.com/Jakobytk">Jacob's GitHub</a>
                    <a href="https://github.com/KKBellew">KKBellew's GitHub</a>
                    <a href="https://github.com/KristoferVickers">Kristofer's GitHub</a>
                </div>
            </div>
            <div className="logo">CodeVerse</div>
        </header>
    );
}

export default Header;