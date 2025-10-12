import React from 'react';

// Components
import Button from '../components/Button';

// Styling
import '../styling/Titles.css';
import '../styling/Wrapper.css';

function Home() {
    return(
        <div className="wrapper-home">
            <div className="button-primary-wrapper">
            <Button className="button-4" text="Login" to="/login" />
            </div>
            <h1 className="header">PopPick</h1>
        </div>
    );
}

export default Home;
