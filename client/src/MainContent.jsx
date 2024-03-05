import React from 'react';
import './MainContent.css'; // Import the styles for the main content component


const MainContent = () => {
    return (
        <div className="main-content">
            <h1 className="title">CodeVerse</h1>
            <p className="description">Make the jump into the world of unknown code</p>
            <a href="#" className="start-blogging-btn">Start Blogging</a>
        </div>
    );
}

export default MainContent;