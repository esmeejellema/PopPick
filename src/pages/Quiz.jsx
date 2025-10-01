import React, { useState } from 'react';
import {useEffect} from "react";
import '../styling/Animations.css';
import '../styling/Titles.css';
import './QuizLayOut.css';
import Question1 from '../components/Quiz/Question1';
import Question2 from '../components/Quiz/Question2';
import Question3 from '../components/Quiz/Question3';
import Question4 from '../components/Quiz/Question4';
import Button from "../components/Button.jsx";

function Quiz() {
    const [step, setStep] = useState(1);
    const [recommendation, setRecommendation] = useState(null);
    const [movies, setMovies] = useState([]);
    const [answers, setAnswers] = useState({
        genre: '',
        length: '',
        releaseYear: '',
        streamingService: ''
    });

    // navigation buttons
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
    //collect answers from each change. Don't submit each step, still possible to change.
    const handleAnswerChange = (questionId, answerPayLoad) => {
        setAnswers(prev => ({ ...prev, [questionId]: answerPayLoad }));
    };

    // filter movies using all collected answers and pick 1 to recommend.
    const handleAnswerSubmit = () => {
        let filtered = movies.filter(movie => movie.genre === answers.genre);

        if (answers.length === 'short') {
            filtered = filtered.filter(movie => movie.length <= 90);
        } else if (answers.length === 'long') {
            filtered = filtered.filter(movie => movie.length > 90);
        }

        if (answers.releaseYear === 'recent') {
            filtered = filtered.filter(movie => movie.releaseYear >= 2015);
        } else if (answers.releaseYear === 'classic') {
            filtered = filtered.filter(movie => movie.releaseYear < 2015);
        }

        if (answers.streamingService === 'Netflix') {
            filtered = filtered.filter(movie => movie.streamingService === answers.streamingService);
        } else if (answers.streamingService === 'HBO Max') {
            filtered = filtered.filter(movie => movie.streamingService === answers.streamingService);
        } else if (answers.streamingService === 'Amazon Prime') {
            filtered = filtered.filter(movie => movie.streamingService === answers.streamingService);
        }

        let selectedMovie = null;

        if (filtered.length > 0) {
            // Pick one at random
            const index = Math.floor(Math.random() * filtered.length);
            selectedMovie = filtered[index];
        }
        console.log("answers before filtering: ", answers);
        console.log("filtered movies: ", filtered);
        console.log("selected movie: ", selectedMovie);
        setRecommendation(selectedMovie);
        setStep(5);
    }
//fetch movies from database
    useEffect(() => {
    fetch(`http://localhost:8080/movies`)
    .then(res => res.json())
            .then(data => {
                console.log("fetched movies: ", data);
                setMovies(data)
            })
            .catch(err => console.error(err));
    }, []);


        return (
        <div className="quiz-page">
            <Button className="button-tertiary back-to-profile" text="profile" to="/profile"/>
            {/* Question rendering */}
            {step === 1 && (
                <Question1
                    onSelect={(answer) => handleAnswerChange('genre', answer)}
                    previousAnswer={answers['genre']}
                />
            )}

            {step === 2 && (
                <Question2
                    onSelect={(answer) => handleAnswerChange('length', answer)}
                    previousAnswer={answers['length']}
                />
            )}

            {step === 3 && (
                <Question3
                    onSelect={(answer) => handleAnswerChange('releaseYear', answer)}
                    previousAnswer={answers['releaseYear']}
                />
            )}

            {step === 4 && (
                <Question4
                    onSelect={(answer) => handleAnswerChange('streamingService', answer)}
                    previousAnswer={answers['streamingService']}
                />
            )}

            {step === 5 && recommendation && (
                <div className="recommendation">
                    <h2>We recommend</h2>
                    <p className="title-recommendation">{recommendation.title}</p>
                </div>
            )}



            {/* Navigation Buttons */}
            <div className="button-secondary-wrapper">
                {step > 1 && step < 5 && (
                    <button className="button-secondary" onClick={goToPreviousStep}>
                        Previous
                    </button>)}
                {step < 4 && (
                    <button className="button-secondary" onClick={goToNextStep}>
                Next
                    </button>)}
                {step === 4 && (
                    <button className="button-secondary" onClick={handleAnswerSubmit}>
                        Submit
                    </button>)}
            </div>
        </div>
    );
}

export default Quiz;
