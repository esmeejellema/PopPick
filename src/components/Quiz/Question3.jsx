import React from 'react';

function Question3({ onSubmit }) {
    const handleSelect = (choice) => {
        onSubmit(choice); // 'old' or 'new'
    };

    return (
        <div className="question3-container">
            <h2>Feeling nostalgic or craving something fresh?</h2>
            <div className="question3-buttons">
                <button onClick={() => handleSelect('old')} className="choice-button">
                    A golden oldie<br />
                    <span className="subtitle">Before 2005</span>
                </button>

                <button onClick={() => handleSelect('new')} className="choice-button">
                    A modern masterpiece<br />
                    <span className="subtitle">Since 2005</span>
                </button>
            </div>
        </div>
    );
}

export default Question3;
