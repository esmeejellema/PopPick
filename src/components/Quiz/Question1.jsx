import { useState } from 'react';
import '../../styling/Titles.css';
import '../../styling/Wrapper.css';


const Genres = [
    "Action", "Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Fantasy", "Thriller",
    "Documentary", "Mystery", "Animation", "Adventure", "Crime", "Family", "Musical",
    "Biography", "War", "No preference"
];

function Question1() {
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

    return (
        <div>
            <h2 className="question">What kind of genre are you in the mood for?</h2>
            <div className="wrapper-answers-container">
                {Genres.map((genre) => {
                    const isSelected = selectedGenres.includes(genre);
                    return (
                        <button
                            key={genre}
                            onClick={() => toggleGenre(genre)}
                            className={`button-tertiary ${isSelected ? 'selected' : ''}`}
                        >
                            {genre}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default Question1;
