import React from 'react';
import '../../styling/Titles.css';
import '../../styling/Wrapper.css';


function Question3({ onSubmit }) {
    const [selectedAnswer, setSelectedAnswer] = React.useState('');
    const handleSelect = (choice) => {
        setSelectedAnswer(choice)
        onSubmit(choice);
    };

    return (
        <div>
            <h2 className="question">Feeling nostalgic or craving something fresh?</h2>
            <div className="wrapper-answers">
                <button onClick={() => handleSelect('old')} className={`button-tertiary ${selectedAnswer === 'old' ? 'selected' : ''}`}>
                    A golden oldie<br />
                    <span className="subtitle">Before 2005</span>
                </button>

                <button onClick={() => handleSelect('new')} className={`button-tertiary ${selectedAnswer === 'new' ? 'selected' : ''}`}>
                    A modern masterpiece<br />
                    <span className="subtitle">Since 2005</span>
                </button>
            </div>
        </div>
    );
}

export default Question3;
