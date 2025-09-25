import React from 'react';
import './Question2.css';

function Question2({ onSubmit }) {
    const handleSelect = (choice) => {
        onSubmit(choice); // Sends 'short' or 'long' back to Quiz.jsx
    };

    return (
        <div className="question2-container">
            <h2>Is this a short trip or epic quest?</h2>
            <div>
                <button onClick={() => handleSelect('short')} className="choice-button">
                    Short Trip<br />
                    <span className="subtitle">Less than 1.5 hours</span>
                </button>

                <button onClick={() => handleSelect('long')} className="choice-button">
                    Epic Quest<br />
                    <span className="subtitle">More than 1.5 hours</span>
                </button>
            </div>
        </div>
    );
}

export default Question2;
