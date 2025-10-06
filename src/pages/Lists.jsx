import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ListName from "../components/Lists/ListName.jsx";
import ListMovies from "../components/Lists/ListMovies.jsx";
import ListEditor from "../components/Lists/ListEditor.jsx";
import Button from '../components/Button.jsx';

function Lists() {
    const [movies, setMovies] = useState([]);
    const [existingLists, setExistingLists] = useState([]);

    // Fetch existing lists
    async function fetchLists() {
        try {
            const response = await axios.get('http://localhost:8080/movielists');
            setExistingLists(response.data);
        } catch (error) {
            console.error('Error fetching lists:', error.message);
        }
    }

    // Fetch movies
    async function fetchMovies() {
        try {
            const response = await axios.get('http://localhost:8080/movies');
            setMovies(response.data);
        } catch (error) {
            console.error('Error fetching movies:', error.message);
        }
    }

    useEffect(() => {
        fetchLists();
        fetchMovies();
    }, []);

    // Create a new list
    async function createList(listName) {
        try {
            const response = await axios.post('http://localhost:8080/movielists', { listName });
            alert(`List "${response.data.listName}" created successfully!`);
            fetchLists();
        } catch (error) {
            alert('Error creating list!');
            console.error(error);
        }
    }

    // Add movies to a selected list
    async function addMovies(selectedListId, selectedMovieIds, clearSelectedMovies) {
        if (!selectedListId || selectedMovieIds.length === 0) {
            alert('Select a list and at least one movie');
            return;
        }

        try {
            const response = await axios.put(
                `http://localhost:8080/movielists/${selectedListId}/movies`,
                { movieIds: selectedMovieIds }
            );
            alert(`List "${response.data.listName}" updated with new movies!`);
            clearSelectedMovies([]);
            fetchLists(); // Refresh lists after update
        } catch (error) {
            alert('Could not add movies');
            console.error(error);
        }
    }

    // Delete a list
    async function deleteList(listId) {
        if (!window.confirm('Are you sure you want to delete this list?')) return;

        try {
            await axios.delete(`http://localhost:8080/movielists/${listId}`);
            alert('List deleted!');
            fetchLists();
        } catch (error) {
            alert('Error deleting list!');
            console.error(error);
        }
    }

    return (
        <div>
            {/* Navigation buttons */}
            <Button className="button-primary nav-pages-left" text="Profile" to="/profile" />
            <Button className="button-primary nav-pages-right" text="Log out" to="/" />

            {/* Main container layout */}
            <div className="container-box-lay-out">
                {/* Create List box */}
                <div className="box box-create-list">
                    <ListName onCreateList={createList} />
                </div>

                {/* Add Movies box */}
                <div className="box box-add-movies">
                    <ListMovies
                        movies={movies}
                        existingLists={existingLists}
                        onAddMovies={addMovies}
                    />
                </div>

                {/* Edit List box */}
                <div className="box box-edit-list">
                    <ListEditor
                        existingLists={existingLists}
                        onFetchList={fetchLists}
                        onDelete={deleteList}
                    />
                </div>
            </div>
        </div>
    );
}

export default Lists;
