import React, { useState } from 'react';
import './Quiz.css';
import Question1 from '../components/Quiz/Question1';
import Question2 from '../components/Quiz/Question2';
import Question3 from '../components/Quiz/Question3';
import Question4 from '../components/Quiz/Question4';
import Recommendation from '../components/Quiz/Recommendation';

function Quiz() {
    const [step, setStep] = useState(1);
    const [filteredResults] = useState([]);
    const [answers, setAnswers] = useState({});

    const goToNextStep = () => setStep((prev) => prev + 1);

    const handleAnswerSubmit = async (questionId, answerPayLoad) => {
        const updatedAnswers = {...answers, [questionId]: answerPayLoad};
        setAnswers(updatedAnswers); //merge with existing answers.
        // const response = await fetch();//send to backend, no connection yet
        //
        // const data = await response.json();
        // setFilteredResults(data.filteredResults);

        goToNextStep();
    };
    return (
        <div>
            {step === 1 && (
                <Question1
                    onSubmit={(answer) => handleAnswerSubmit('q1', answer)}
                />
            )}

            {step === 2 && (
                <Question2
                    onSubmit={(answer) => handleAnswerSubmit('q2', answer)}
                    filteredResults={filteredResults}
                />
            )}

            {step === 3 && (
                <Question3
                    onSubmit={(answer) => handleAnswerSubmit('q3', answer)}
                    filteredResults={filteredResults}
                />
            )}

            {step === 4 && (
                <Question4
                    onSubmit={(answer) => handleAnswerSubmit('q4', answer)}
                    filteredResults={filteredResults}
                />
            )}

            {step === 5 && (
                <Recommendation results={filteredResults} />
            )}
        </div>
    )};

    export default Quiz;