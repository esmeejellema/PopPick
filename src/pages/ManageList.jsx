import React from 'react';
import ListEditor from "../components/ListManager/ListEditor.jsx";
import Button from "../components/Button.jsx";

function ManageList() {
    return(
        <div>
            <Button className="button-tertiary nav-pages-left" text="profile" to="/profile"/>
            <Button className="button-tertiary nav-pages-right" text="Lists" to="/lists"/>
            <ListEditor />
        </div>
    );
}

export default ManageList;