import React, { useState } from 'react';
import {useEffect} from "react";
import '../styling/Animations.css';
import './QuizLayOut.css';
import Question1 from '../components/Quiz/Question1';
import Question2 from '../components/Quiz/Question2';
import Question3 from '../components/Quiz/Question3';
import Question4 from '../components/Quiz/Question4';
import Recommendation from '../components/Quiz/Recommendation';

function Quiz() {
    const [step, setStep] = useState(1);
    const [filteredResults, setFilteredResults] = useState([]);
    const [answers, setAnswers] = useState({});

    const goToNextStep = () => {
        if (step < 5) {
            setStep((prev) => prev + 1);
        }
    };

    const goToPreviousStep = () => {
        if (step > 1) {
            setStep((prev) => prev - 1);
        }
    };

    const handleAnswerSubmit = (questionId, answerPayLoad) => {
        setAnswers(prev => ({ ...prev, [questionId]: answerPayLoad }));
        goToNextStep();
    };
        // Fetch gefilterde films zodra we bij stap 5 zijn
        useEffect(() => {
            if (step === 5) {
                fetchFilteredMovies();
            }
        }, [step]);

        const fetchFilteredMovies = async () => {
            try {
                const response = await fetch(`http://localhost:8080/quiz`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(answers),
                });

                if (!response.ok) throw new Error('Netwerkfout bij ophalen data');

                const data = await response.json();
                setFilteredResults(data.filteredMovies || []);
            } catch (error) {
                console.error('Fout bij ophalen gefilterde films:', error);
            }
        };


        return (
        <div className="quiz-page">
            {/* Question rendering */}
            {step === 1 && (
                <Question1
                    onSubmit={(answer) => handleAnswerSubmit('q1', answer)}
                    previousAnswer={answers['q1']}
                />
            )}

            {step === 2 && (
                <Question2
                    onSubmit={(answer) => handleAnswerSubmit('q2', answer)}
                    filteredResults={filteredResults}
                    previousAnswer={answers['q2']}
                />
            )}

            {step === 3 && (
                <Question3
                    onSubmit={(answer) => handleAnswerSubmit('q3', answer)}
                    filteredResults={filteredResults}
                    previousAnswer={answers['q3']}
                />
            )}

            {step === 4 && (
                <Question4
                    onSubmit={(answer) => handleAnswerSubmit('q4', answer)}
                    filteredResults={filteredResults}
                    previousAnswer={answers['q4']}
                />
            )}

            {step === 5 && (
                <Recommendation results={filteredResults} />
            )}

            {/* Navigation Buttons */}
            <div className="button-secondary-wrapper">
                {step > 1 && step < 5 && (
                    <button className="button-secondary" onClick={goToPreviousStep}>
                        Previous
                    </button>)}
                {step < 5 && (
                    <button className="button-secondary" onClick={goToNextStep}>
                Next
            </button>)}
            </div>
        </div>
    );
}

export default Quiz;
