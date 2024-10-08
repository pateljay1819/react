import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import bgImage from '../assets/bgimage.jpg';

const HomePage = () => {
    useEffect(() => {
        console.log("HomePage component mounted");
        return () => {
            console.log("HomePage component unmounted");
        };
    }, []);

    return (
        <div className="homepage">
            <header className="hero">
                <div className="hero-content">
                    <h1>Welcome to MyStore!</h1>
                    <p>Your one-stop shop for the latest gadgets.</p>
                    <Link to="/productpage" className="shop-now-button">Shop Now</Link>
                    <img src={bgImage} alt='Background' />
                </div>
            </header>
        </div>
    );
};

export default HomePage;
