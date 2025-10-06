import {Link} from "react-router-dom";
import Button from '../components/Button.jsx';
import '../styling/Animations.css';
import '../styling/Wrapper.css';
import React from "react";

function Profile() {
    return (
        <div>
            <Button className="button-primary nav-pages-right" text="Log out" to="/"/>
            <div className="wrapper-profile">
        <h2 className="anim-profile-title">Welcome to your profile</h2>
        <div className="button-primary-wrapper">
            <Button className="button-primary anim-button-left" text="Popquiz" to="/quiz"/>
            <Button className="button-primary anim-button-right" text="Lists" to="/lists"/>
        </div>
        </div>
        </div>
    );
}

export default Profile;
