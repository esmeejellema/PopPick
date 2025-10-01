import { useState } from 'react';
import '../../styling/Titles.css';
import '../../styling/Wrapper.css';


const Genres = [
    "Action", "Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Fantasy", "Thriller",
    "Documentary", "Mystery", "Animation", "Adventure", "Crime", "Family", "Musical",
    "Biography", "War"
];

function Question1({ previousAnswer, onSelect }) {
    const [isSelected, setSelectedGenre] = useState(previousAnswer || '');

    const handleSelect = (genre) => {
            setSelectedGenre(genre);
            onSelect(genre);
        };

    return (
        <div>
            <h2 className="question">What kind of genre are you in the mood for?</h2>
            <div className="wrapper-answers-container">
                {Genres.map((genre) => (
                    <button
                        key={genre}
                        onClick={() => handleSelect(genre)}
                        className={`button-tertiary ${isSelected === genre ? 'selected' : ''}`}
                        >
                        {genre}
                    </button>
                    ))}
            </div>
        </div>
    );
}

export default Question1;
