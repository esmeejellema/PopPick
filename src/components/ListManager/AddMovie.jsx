import React, { useEffect, useState } from 'react';
import '../../styling/Grid.css'
import Button from '../Button.jsx';
import '../../styling/Button.css';
import '../../styling/Wrapper.css';
import './ListEditor.jsx';

//1. state declarations
const AddMovie = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovieIds, setSelectedMovieIds] = useState([]);
    const [selectedListId, setSelectedListId] = useState([]);
    const [existingLists, setExistingLists] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedList, setSelectedList] = useState(null);

    // 2. fetch existing lists
    useEffect(() => {
        fetch(`http://localhost:8080/movielists`)
            .then((res) => res.json())
            .then(data => setExistingLists(data))//store lists in state
            .catch((err) => console.error("Error fetching lists:", err));
    }, []);


    // 3. fetch movies
    useEffect(() => {
        fetch(`http://localhost:8080/movies`)
            .then((res) => res.json())
            .then(data => {setMovies(data);})//store movies in state
            .catch((err) => console.error("Error fetching movies:", err));
    }, []);

    // 4. helper functions
    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const handleSelect = (list) => {
        setSelectedList(list);//its to identify the item you pick from existing lists.
        setSelectedListId(list.id);//id that was set in table from lists.
        setIsOpen(false);
    };


    const addMoviesToList = () => {
        if (!selectedListId || selectedMovieIds.length === 0) {
            alert("Select a list and at least one movie");
            return;
        }

        fetch(`http://localhost:8080/movielists/${selectedListId}/movies`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(selectedMovieIds),//contains ID's of movies you want to add to that list.
        })
            .then(res => {
                if (!res.ok) throw new Error('Failed to update list');
                return res.json();
            })
            .then(data => {
                alert(`List "${data.selectedListId}" updated with new movies!`);
                setSelectedMovieIds([]);
            })
            .catch(err => console.error('Error updating list:', err));
    };

    const toggleMovieSelection = (id) => {
        setSelectedMovieIds(prev =>
            prev.includes(id)
                ? prev.filter(movieId => movieId !== id)
                : [...prev, id]
        );
    }

    return (
        <div>
            <div className="list-selection-wrapper">
            <button className="button-secondary" onClick={toggleDropdown}>
                {selectedList ? selectedList.listName: 'Select a list'}
            </button>
            {isOpen && (
                <ul className="list-selection">
                    {existingLists.map((list) => (
                        <li key={list.id}
                            onClick={() => handleSelect(list)}
                        >
                            {list.listName}
                        </li>
                    ))}
                </ul>
            )}
            </div>
            <div className="scroll-container">
                <ul className="grid-list-movies">
                    {movies.map((movie) => (
                        <li key={movie.id} className={selectedMovieIds.includes(movie.id) ? 'selected' : ''}
                            onClick={() => toggleMovieSelection(movie.id)}
                        >
                            <input
                                type="checkbox"
                                checked={selectedMovieIds.includes(movie.id)}
                                onChange={() => toggleMovieSelection(movie.id)}
                            />
                            {movie.title}
                        </li>
                    ))}
                </ul>
                </div>
            <button className="button-secondary" onClick={addMoviesToList}>Add Selected Movies</button>
        </div>
    );
}

export default AddMovie;

