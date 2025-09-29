import React, { useState, useEffect } from 'react';
import './ListEditor.css';

const ListEditor = () => {
    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedListId, setExpandedListId] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/movielists')
            .then(res => res.json())
            .then(data => {
                setLists(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const toggleList = (id) => {
        setExpandedListId(prevId => (prevId === id ? null : id));
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="list-editor-container">
            <h1>Manage Lists</h1>
            <ul className="dropdown">
                {lists.map(list => (
                    <li key={list.id} className="list-item">
                        <div className="list-header" onClick={() => toggleList(list.id)}>
                            <strong>{list.listName}</strong>
                        </div>

                        {expandedListId === list.id && (
                            <div className="list-body">
                                <h4>Movies in this list:</h4>
                                {list.movies.length === 0 ? (
                                    <p>No movies in this list.</p>
                                ) : (
                                    <ul className="movie-list">
                                        {list.movies.map(movie => (
                                            <li key={movie.id}>{movie.title}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListEditor;
