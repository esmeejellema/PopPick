import React, { useState } from 'react';
import '../styling/Input.css'
import axios from 'axios';

import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button.jsx";


function Login() {
    // Toggle between login and register mode
    const [isRegister, setIsRegister] = useState(false);

    // Form inputs state
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    // Update form state on input change
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handle login form submit
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:8080/api/auth/login`, {
                username: form.username,
                password: form.password,
            });
            console.log("Login response:", response.data);
            alert("logged in successfully");

            const token = response.data.token;
            localStorage.setItem('token', token);

            const decoded = jwtDecode(token);
            localStorage.setItem("username", decoded.sub);

            console.log(decoded);
            const roles = decoded.roles || [];

            if (roles.includes('ADMIN')) {
                navigate('/admin');
            } else if (roles.includes('QUIZTAKER')) {
                navigate('/profile');
            } else {
                navigate('/profile');
            }
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
        }
    };

    // Handle register form submit
    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            // Role is fixed as QUIZTAKER for signup, sent from frontend or assigned backend-side
            const response = await axios.post(`http://localhost:8080/api/auth/register`, {
                username: form.username,
                email: form.email,
                password: form.password,
                role: 'QUIZTAKER',
            });
            console.log("Registration successful:", response.data);
            alert("Registration successful! You can now log in.");
            setForm({
                username: '',
                email: '',
                password: '',
            });
            setIsRegister(false); // Show login form


        } catch (error) {
            console.error('Registration failed:', error.response?.data || error.message);
        }
    };

    return (
        <div className="auth-container">
            <Button className="button-primary nav-pages-right" text="Back to home" to="/" />
            {isRegister ? (
                <form className="login-form" onSubmit={handleRegister}>
                    <h2 className="form-title">Register</h2>

                    <div className="form-group">
                        <label className="form-label">Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <button type="submit" className="submit-button">Sign Up</button>
                    <p className="switch-text">
                        Already have an account?{' '}
                        <button type="button" className="switch-button" onClick={() => setIsRegister(false)}>
                            Login
                        </button>
                    </p>
                </form>
            ) : (
                <form className="login-form" onSubmit={handleLogin}>
                    <h2 className="form-title">Login</h2>

                    <div className="form-group">
                        <label className="form-label">Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <button type="submit" className="submit-button">Login</button>
                    <p className="switch-text">
                        Don't have an account?{' '}
                        <button type="button" className="switch-button" onClick={() => setIsRegister(true)}>
                            Sign Up
                        </button>
                    </p>
                </form>
            )}
        </div>
    );
}

export default Login;
