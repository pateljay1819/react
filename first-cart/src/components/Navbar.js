// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Make sure to create this CSS file

const Navbar = ({ cartCount }) => { // Accept cartCount as a prop
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">MyStore</div>
            <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/productpage">Product</Link></li>
                <li><Link to="/contactpage">Contact Us</Link></li>
                <li><Link to="/loginpage">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/Counter">Counter</Link></li>
            </ul>
            <div className="search-cart">
                <input type="text" placeholder="Search..." />
                <Link to="/cart" className="cart-icon">
                    🛒
                    {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                </Link>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
                ☰
            </div>
        </nav>
    );
};

export default Navbar;
