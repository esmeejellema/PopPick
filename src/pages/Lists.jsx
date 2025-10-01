import React from 'react';
import CreateList from "../components/ListManager/CreateList";
import AddMovie from "../components/ListManager/AddMovie";
import Button from '../components/Button.jsx';
import './ManageList.jsx';

function Lists() {
    return (
        <div>
            <h1>Lists</h1>
            <Button className="button-tertiary back-to-profile" text="profile" to="/profile"/>
            <CreateList />
            <AddMovie />
            <Button className="button-primary" text="View and Edit Lists" to="/manageList"/>
        </div>
    );
}

export default Lists;
