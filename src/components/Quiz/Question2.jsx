import React, {useState} from 'react';
import '../../styling/Titles.css';
import '../../styling/Wrapper.css';


function Question2({ onSubmit }) {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const handleSelect = (choice) => {
        setSelectedAnswer(choice)
        onSubmit(choice); // Sends 'short' or 'long' back to Quiz.jsx
    };

    return (
        <div>
            <h2 className="question">Is this a short trip or epic quest?</h2>
            <div className="wrapper-answers">
                <button onClick={() => handleSelect('short')} className={`button-tertiary ${selectedAnswer === 'short' ? 'selected' : ''}`}>
                    Short Trip<br />
                    <span className="subtitle">Less than 1.5 hours</span>
                </button>

                <button onClick={() => handleSelect('long')} className={`button-tertiary ${selectedAnswer === 'long' ? 'selected' : ''}`}>
                    Epic Quest<br />
                    <span className="subtitle">More than 1.5 hours</span>
                </button>
            </div>
        </div>
    );
}

export default Question2;
