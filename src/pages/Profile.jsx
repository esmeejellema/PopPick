import {useNavigate} from "react-router-dom";
import Button from '../components/Button.jsx';
import '../styling/Animations.css';
import '../styling/Wrapper.css';
import React from "react";
import '../api/api.js';


function Profile() {

    const username = localStorage.getItem("username");

    const navigate = useNavigate();
    const handleLogout = () => {
        console.log("Logout clicked");
        localStorage.removeItem('token');  // JWT-token verwijderen
        localStorage.removeItem("username");
        alert("logged out successfully.");
        navigate('/');  // Terug naar home
    };
    return (
        <div>
            <Button className="button-primary nav-pages-right" text="Log out" onClick={handleLogout} />
            <div className="wrapper-profile">
        <h2 className="anim-profile-title">Welcome to your profile {username}! </h2>
                <div className="button-primary-wrapper">
            <Button className="button-primary anim-button-left" text="Popquiz" to="/quiz"/>
            <Button className="button-primary anim-button-right" text="Lists" to="/lists"/>
        </div>
        </div>
        </div>
    );
}

export default Profile;
