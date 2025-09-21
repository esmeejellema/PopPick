import React, { useState } from 'react';

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
        <div>
            <input
                type="text"
                placeholder="List Name"
                value={listName}
                onChange={e => setListName(e.target.value)}
                />
            <button type="button" onClick={createListName} className="button">Create</button>

            <hr/>
        </div>
    );
};
export default CreateList;

