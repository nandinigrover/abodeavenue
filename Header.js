import React from 'react';

function Header({ toggleFavoritesTab }) {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo.png" alt="Abode Avenue Logo" />
        <h1>Abode Avenue</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="#favorites" onClick={(e) => {
            e.preventDefault();
            toggleFavoritesTab();
          }}>Favorites</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;



