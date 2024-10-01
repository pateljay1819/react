// Cart.js
import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
    const styles = {
        cart: {
            maxWidth: '600px',
            margin: '20px auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
        header: {
            textAlign: 'center',
            color: '#333',
        },
        emptyMessage: {
            textAlign: 'center',
            color: '#777',
        },
        list: {
            listStyleType: 'none',
            padding: '0',
        },
        listItem: {
            display: 'flex',
            alignItems: 'center',
            margin: '15px 0',
            padding: '10px',
            borderBottom: '1px solid #eaeaea',
        },
        productImage: {
            width: '60px',
            height: '60px',
            objectFit: 'cover',
            marginRight: '15px',
        },
        productName: {
            margin: '0',
            fontSize: '1.2em',
            color: '#333',
        },
        productPrice: {
            margin: '5px 0 0',
            color: '#555',
        },
        link: {
            display: 'block',
            textAlign: 'center',
            marginTop: '20px',
            padding: '10px 15px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            transition: 'background-color 0.3s',
        },
        linkHover: {
            backgroundColor: '#0056b3',
        },
    };

    return (
        <div style={styles.cart}>
            <h1 style={styles.header}>Your Cart</h1>
            {cart.length === 0 ? (
                <p style={styles.emptyMessage}>Your cart is empty!</p>
            ) : (
                <ul style={styles.list}>
                    {cart.map((product, index) => (
                        <li key={index} style={styles.listItem}>
                            <img
                                src={product.image}
                                alt={product.name}
                                style={styles.productImage}
                            />
                            <div>
                                <h2 style={styles.productName}>{product.name}</h2>
                                <p style={styles.productPrice}>
                                    Price: ₹{product.price.toLocaleString()}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <Link
                to="/"
                style={styles.link}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.linkHover.backgroundColor)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.link.backgroundColor)}
            >
                Go back to Home
            </Link>
        </div>
    );
};

export default Cart;
