import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './Home.css';

function Home() {
    return(
        <div className="home-wrapper">
            <div className="home-button">
            <Button text="Login" to="/login" />
            <Button text="Register" to="/register" />
            </div>
            <h1 className="title">PopPick</h1>
            <Button text="profile gateway" to="/profile" />
        </div>
    );
}

export default Home;
