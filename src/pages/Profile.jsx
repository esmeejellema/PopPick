import {Link} from "react-router-dom";
import Button from '../components/Button.jsx';
import '../styling/Animations.css';
import '../styling/Wrapper.css';
import React from "react";

function Profile() {
    return (
        <div>
            <Button className="button-tertiary nav-pages-right" text="Log out" to="/"/>
            <div className="profile-wrapper">
        <h1 className="profile-title-animation">Welcome to your profile</h1>
        <div className="button-primary-wrapper">
            <Button className="button-primary-left" text="Popquiz" to="/quiz"/>
            <Button className="button-primary-right" text="Lists" to="/lists"/>
        </div>
        </div>
        </div>
    );
}

export default Profile;
