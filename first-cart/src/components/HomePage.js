import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import bgImage from '../assets/bgimage.jpg';



const HomePage = () => {
    return (
        <div className="homepage">
            <header className="hero">
                <div className="hero-content">
                    <h1>Welcome to MyStore!</h1>
                    <p>Your one-stop shop for the latest gadgets.</p>
                    <Link to="/productpage" className="shop-now-button">Shop Now</Link>
                    <img src={bgImage} alt='bg' />
                </div>
            </header>
            {/* Removed the product section */}
        </div>
    );
};

export default HomePage;
