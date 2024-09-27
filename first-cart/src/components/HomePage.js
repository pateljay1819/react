// HomePage.js
import React, { useState } from 'react';
import './HomePage.css'; // Make sure to create this CSS filei
import iphoneImage from '../assets/iphone16.jpg'; // Adjust the path
import samsungImage from '../assets/samsungS24.jpg'; 


const productsData = [
    {
        id: 1,
        name: "Iphone 16 pro max",
        price: 150000,
        image: iphoneImage, // Placeholder image
    },
    {
        id: 2,
        name: 'Samsung S24',
        price: 70000,
        image: samsungImage,
    },
   

];

const HomePage = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} added to cart!`);
    };

    const buyNow = (product) => {
        alert(`Purchasing ${product.name} for $${product.price}`);
        // Implement your purchase logic here
    };

    return (
        <div className="homepage">
            <h1>Welcome to MyStore!</h1>
            <div className="product-list">
                {productsData.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>₹{product.price.toFixed(2)}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                        <button onClick={() => buyNow(product)}>Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
