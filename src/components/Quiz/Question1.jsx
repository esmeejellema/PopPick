import { useState } from 'react';
import './Question1.css';

const Genres = [
    "Action", "Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Fantasy", "Thriller",
    "Documentary", "Mystery", "Animation", "Adventure", "Crime", "Family", "Musical",
    "Biography", "War", "No preference"
];

function Question1({ onSubmit }) {
    const [selectedGenres, setSelectedGenres] = useState([]);

    const toggleGenre = (genre) => {
        if (genre === "No preference") {
            setSelectedGenres(["No preference"]);
            return;
        }

        let updatedGenres = selectedGenres.filter(g => g !== "No preference");

        if (updatedGenres.includes(genre)) {
            updatedGenres = updatedGenres.filter(g => g !== genre);
        } else {
            updatedGenres.push(genre);
        }

        setSelectedGenres(updatedGenres);
    };

    const handleContinue = () => {
        if (selectedGenres.length === 0) {
            alert("Please select at least one genre.");
            return;
        }
        onSubmit(selectedGenres);
    };

    return (
        <div>
            <h2>What kind of genre are you in the mood for?</h2>
            <div className="genre-list">
                {Genres.map((genre) => {
                    const isSelected = selectedGenres.includes(genre);
                    return (
                        <button
                            key={genre}
                            onClick={() => toggleGenre(genre)}
                            className={`genre-button ${isSelected ? 'selected' : ''}`}
                        >
                            {genre}
                        </button>
                    );
                })}
            </div>
            <button
                onClick={handleContinue}
                className="continue-button"
            >
                Continue
            </button>
        </div>
    );
}

export default Question1;
