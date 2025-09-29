import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import '../styling/Titles.css';
import '../styling/Wrapper.css';

function Home() {
    return(
        <div className="home-wrapper">
            <div className="button-primary-wrapper">
            <Button className="button-primary" text="Login" to="/login" />
            <Button className="button-primary" text="Register" to="/register" />
            </div>
            <h1 className="header">PopPick</h1>
            <Button className="button-primary" text="profile gateway" to="/profile" />
        </div>
    );
}

export default Home;
