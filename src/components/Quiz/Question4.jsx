import React, { useState } from 'react';
import '../../styling/Titles.css';
import '../../styling/Wrapper.css';



function Question4({onSubmit}) {
    // If you want only single selection, keep track locally
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const handleSelect = (choice) => {
        setSelectedAnswer(choice)
        onSubmit(choice);
    };

    return (
        <div>
            <h2 className="question">Which streaming service is available to you?</h2>
            <div className="wrapper-answers">
                <button onClick={() => handleSelect('Netflix')} className={`button-tertiary ${selectedAnswer === 'Netflix' ? 'selected' : ''}`}>
                Netflix</button>
                <button onClick={() => handleSelect('HBO Max')} className={`button-tertiary ${selectedAnswer === 'HBO Max' ? 'selected' : ''}`}>
                HBO Max</button>
                <button onClick={()=> handleSelect('Amazon Prime')} className={`button-tertiary ${selectedAnswer === 'Amazon Prime' ? 'selected' : ''}`}>
                Amazon Prime</button>
            </div>
        </div>
    );
}

export default Question4;
