import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductPage.css';
import iphoneImage from '../assets/iphone16.jpg';
import iphoneImage1 from '../assets/iphone15.jpg';
import samsungImage from '../assets/samsungS24.jpg';
import samsungImage1 from '../assets/sams24ultra.jpeg';

const productsData = [
    {
        id: 1,
        name: "iPhone 16 Pro Max",
        price: 150000,
        image: iphoneImage,
        description: "The latest iPhone with stunning display, advanced camera features, and A16 Bionic chip for super-fast performance."
    },
    {
        id: 2,
        name: "iPhone 15 Plus",
        price: 72000,
        image: iphoneImage1,
        description: "The latest iPhone with stunning display, advanced camera features, and A16 Bionic chip for super-fast performance."
    },
    {
        id: 3,
        name: 'Samsung S24',
        price: 70000,
        image: samsungImage,
        description: "Samsung's newest flagship phone with a vibrant display, powerful processor, and versatile camera setup."
    },
    {
        id: 4,
        name: 'Samsung S24 Ultra',
        price: 170000,
        image: samsungImage1,
        description: "Samsung's newest flagship phone with a vibrant display, powerful processor, and versatile camera setup."
    },
];

const ProductPage = () => {
    const [cart, setCart] = useState([]);
    const [showDescriptions, setShowDescriptions] = useState(Array(productsData.length).fill(false));
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        let updatedCart;
        
        if (existingProduct) {
            existingProduct.quantity += 1; // Increment quantity if already in cart
            updatedCart = [...cart];
        } else {
            updatedCart = [...cart, { ...product, quantity: 1 }];
        }

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        alert(`${product.name} added to cart!`);
        navigate('/cart');
    };

    const buyNow = (product) => {
        alert(`Purchasing ${product.name} for ₹${product.price.toLocaleString()}`);
    };

    const toggleDescription = (index) => {
        const updatedShowDescriptions = [...showDescriptions];
        updatedShowDescriptions[index] = !updatedShowDescriptions[index];
        setShowDescriptions(updatedShowDescriptions);
    };

    return (
        <div className="homepage">
            <div className="product-list">
                {productsData.map((product, index) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-price">₹{product.price.toLocaleString()}</p>

                        <button className="toggle-button" onClick={() => toggleDescription(index)}>
                            {showDescriptions[index] ? 'Hide Description' : 'Show Description'}
                        </button>

                        {showDescriptions[index] && (
                            <p className="product-description">{product.description}</p>
                        )}

                        <div className="button-group">
                            <button className="add-to-cart-button" onClick={() => addToCart(product)}>
                                Add to Cart
                            </button>
                            <button className="buy-now-button" onClick={() => buyNow(product)}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
