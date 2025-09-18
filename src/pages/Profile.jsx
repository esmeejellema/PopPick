import {Link} from "react-router-dom";
import './Profile.css';
import Button from '../components/Button.jsx';

function Profile() {
    return (
        <div className="profile-wrapper">
            <h1 className="profile-title">Welcome to your profile</h1>
            <div className="profile-button">
            <Button className="button-left" text="Popquiz" to="/quiz"/>
            <Button className="button-right" text="Lists" to="/lists"/>
        </div>
        </div>
    );
}

export default Profile;
