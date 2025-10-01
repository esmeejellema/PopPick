import React, { useState } from 'react';
import '../../styling/Input.css';
import '../../styling/Wrapper.css';
import '../../styling/Button.css';

const CreateList = () => {
    const [listName, setListName] = useState('');

    const createListName = () => {
        if (!listName) {
            alert('Please enter a list name');
        }
    const payload = { listName: listName };

        fetch(`http://localhost:8080/movielists`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => {
                if (!response.ok || response.status === null) {
                    throw new Error('Failed to create list');
                }
                return response.json();
            })
            .then(data => {
                alert(`List "${data.listName}" created successfully!`);
                setListName('');
            })
            .catch(error => {
                console.error('error creating list', error);
            });

    };

    return (
        <div className="wrapper-lists">
            <button type="button" onClick={createListName} className="button-secondary">Create</button>
            <input className="input-field"
                type="text"
                placeholder="list name..."
                value={listName}
                onChange={e => setListName(e.target.value)}
                />
        </div>
    );
}
export default CreateList;

