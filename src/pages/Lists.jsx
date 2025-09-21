import React from 'react';
import CreateList from "../components/ListManager/CreateList";
import AddMovie from "../components/ListManager/AddMovie";
import './Lists.css';
import ManageList from "./ManageList.jsx";
import Button from "../components/Button.jsx";

function Lists() {
    return (
        <div>
            <h1>Lists</h1>
            <CreateList />
            <AddMovie />
            <Button text="My Lists" to="/manage" />
        </div>
    );
}

export default Lists;
