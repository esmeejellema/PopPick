import React, { useState } from 'react';

function Question4({ onSubmit }) {
    // If you want only single selection, keep track locally
    const [selectedService, setSelectedService] = useState(null);

    const handleSelect = (service) => {
        setSelectedService(service);
    };

    const handleContinue = () => {
        if (selectedService) {
            onSubmit(selectedService);
        } else {
            alert('Please select a streaming service');
        }
    };

    return (
        <div className="question4-container">
            <h2>Which streaming service is available to you?</h2>
            <div className="question4-buttons">
                {['Netflix', 'AmazonPrime', 'HBO'].map((service) => (
                    <button
                        key={service}
                        className={`choice-button ${selectedService === service ? 'selected' : ''}`}
                        onClick={() => handleSelect(service)}
                    >
                        {service}
                    </button>
                ))}
            </div>

            <button className="continue-button" onClick={handleContinue}>
                Continue
            </button>
        </div>
    );
}

export default Question4;
