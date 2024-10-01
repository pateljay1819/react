// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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
                <li><Link to="/">Home</Link></li> {/* Use Link here */}
                <li><Link to="/productpage">Product</Link></li> {/* Use Link here and ensure correct path */}
                <li><Link to="/contactpage">Contact Us</Link></li>
                <li><Link to="/loginpage">Login</Link></li>
            </ul>
            <div className="search-cart">
                <input type="text" placeholder="Search..." />
                <Link to="#cart" className="cart-icon">🛒</Link> {/* Changed to Link */}
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
                ☰
            </div>
        </nav>
    );
};

export default Navbar;
