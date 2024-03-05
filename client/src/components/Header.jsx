import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/new-post">New Post</a>
        <a href="/profile">Profile</a>
        <a href="/login">Login</a>
      </nav>
      <div className="logo">CodeVerse</div>
    </header>
  );
};

export default Header;