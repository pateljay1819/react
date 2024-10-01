import React, { useState } from 'react';
import './Signup.css'; // Add custom CSS if needed

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        alert('Signup successful!');
    };

    return (
        <div className="signup-container">
            <h2>Create Your Account</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit" className="signup-btn">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
