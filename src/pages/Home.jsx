import React from 'react';
import Button from '../components/Button';
import '../styling/Titles.css';
import '../styling/Wrapper.css';

function Home() {
    return(
        <div className="wrapper-home">
            <div className="button-primary-wrapper">
            <Button className="button-primary" text="Login" to="/login" />
            </div>
            <h1 className="header">PopPick</h1>
            <Button className="button-primary" text="profile gateway" to="/profile" />
        </div>
    );
}

export default Home;
