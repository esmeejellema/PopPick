import {Link} from "react-router-dom";
import Button from '../components/Button.jsx';
import '../styling/Animations.css';
import '../styling/Wrapper.css';

function Profile() {
    return (
        <div className="profile-wrapper">
            <h1 className="profile-title-animation">Welcome to your profile</h1>
            <div className="button-primary-wrapper">
            <Button className="button-primary-left" text="Popquiz" to="/quiz"/>
            <Button className="button-primary-right" text="Lists" to="/lists"/>
        </div>
        </div>
    );
}

export default Profile;
