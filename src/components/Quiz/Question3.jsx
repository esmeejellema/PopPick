import { useState } from 'react';
import '../../styling/Titles.css';
import '../../styling/Wrapper.css';


function Question3({ previousAnswer, onSelect }) {
    const [isSelected, setSelectedAnswer] = useState(previousAnswer || '');

    const handleSelect = (choice) => {
        setSelectedAnswer(choice);
        onSelect(choice);
        return choice;
    };

    return (
        <div>
            <h2 className="question">Feeling nostalgic or craving something fresh?</h2>
            <div className="wrapper-answers">
                <button onClick={() => handleSelect('classic')} className={`button-tertiary ${isSelected === 'classic' ? 'selected' : ''}`}>
                    A golden oldie<br />
                    <span className="subtitle">Before 2005</span>
                </button>

                <button onClick={() => handleSelect('recent')} className={`button-tertiary ${isSelected === 'recent' ? 'selected' : ''}`}>
                    A modern masterpiece<br />
                    <span className="subtitle">Since 2005</span>
                </button>
            </div>
        </div>
    );
}

export default Question3;
