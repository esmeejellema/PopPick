import React from 'react';
import CreateList from "../components/ListManager/CreateList";
import AddMovie from "../components/ListManager/AddMovie";

function Lists() {
    return (
        <div>
            <h1>Lists</h1>
            <CreateList />
            <AddMovie />
            <h1>Click here to view and edit your lists</h1>
        </div>
    );
}

export default Lists;
