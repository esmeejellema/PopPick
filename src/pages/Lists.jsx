import React from 'react';
import CreateList from "../components/ListManager/CreateList";
import AddMovie from "../components/ListManager/AddMovie";
import Button from '../components/Button.jsx';
import './ManageList.jsx';
import './ListLayOut.css';

function Lists() {
    return (
        <div className="list-page">
            <h1>Lists</h1>
            <Button className="button-tertiary nav-pages-left" text="profile" to="/profile"/>
            <Button className="button-tertiary nav-pages-right" text="View and Edit Lists" to="/manageList"/>
            <CreateList />
            <AddMovie />
        </div>
    );
}

export default Lists;
