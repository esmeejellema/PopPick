import { useState } from 'react';
import './Quiz.css';

function Quiz() {
    const questions = [
        {
            text: "What kind of genre are you in the mood for?",
            options: ["Horror", "Romance", "Action", "Thriller"],
        },
        {
            text: "Is this a short trip or an epic quest?",
            options: ["1hour", "2hour", "3", "4"],
        },
        {
            text: "Feeling nostalgic or craving something fresh?",
            options: ["Shakespeare", "Dante", "Goethe", "Tolstoj"],
        },
        {
            text: "Which streaming service is available to you?",
            options: ["Netflix", "Amazon Prime", "HBO Max", "Videoland"],
        },
        {
            text: "What mood describes the one you're in?",
            options: ["post-break-up", "Hollywood", "cozy", "chick-flick"],
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showQuestion, setShowQuestion] = useState(true);

    const handleAnswer = () => {
        // Verberg huidige vraag
        setShowQuestion(false);

        // Wacht op animatie, dan toon volgende
        setTimeout(() => {
            setCurrentIndex((prev) => prev + 1);
            setShowQuestion(true);
        }, 400); // iets korter dan de fadeOut (of gelijk)
    };

    const currentQuestion = questions[currentIndex];

    return (
        <div className="quiz-wrapper">
            {currentIndex < questions.length ? (
                <div className={`quiz-question-block ${showQuestion ? 'fade-in' : 'fade-out'}`}>
                    <h2 className="quiz-question">{currentQuestion.text}</h2>
                    <div className="quiz-options">
                        {currentQuestion.options.map((opt, idx) => (
                            <button key={idx} onClick={handleAnswer}>
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <h2 className="quiz-done">PickPop suggests</h2>
            )}
        </div>
    );
}

export default Quiz;
