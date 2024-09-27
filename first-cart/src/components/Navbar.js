// Navbar.js
import React, { useState } from 'react';
import './Navbar.css'; // Make sure to create this CSS file

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">MyStore</div>
            <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="search-cart">
                <input type="text" placeholder="Search..." />
                <a href="#cart" className="cart-icon">🛒</a>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
                ☰
            </div>
        </nav>
    );
};

export default Navbar;
