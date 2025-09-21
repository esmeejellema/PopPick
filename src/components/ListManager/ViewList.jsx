import React, { useEffect, useState } from 'react';

const MovieListsPage = () => {
    const [movieLists, setMovieLists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/movielists')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch movie lists');
                return res.json();
            })
            .then(data => {
                setMovieLists(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading lists...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Movie Lists</h1>
            <ul>
                {movieLists.map(list => (
                    <li key={list.id}>
                        <strong>{list.name}</strong>
                        <ul>
                            {list.movies && list.movies.map(movie => (
                                <li key={movie.id}>{movie.title}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieListsPage;
