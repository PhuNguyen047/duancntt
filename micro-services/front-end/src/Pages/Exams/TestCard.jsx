import React, { useState } from 'react';
import './TestCard.css';

const TestCard = ({ test, onDelete }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleStartTest = () => {
        console.log('Starting test:', test.name);
    };

    const handleDeleteTest = () => {
        setShowPopup(true);
    };

    const handleConfirmDelete = () => {
        onDelete(test.id);
        setShowPopup(false);
    };

    const handleCancelDelete = () => {
        setShowPopup(false);
    };

    return (
        <div className="test-card">
            <h2>{test.name}</h2>
            <p>Created by: {test.creator}</p>
            <p>Time Limit: {test.timeLimit} minutes</p>
            <button onClick={handleStartTest}>Start Test</button>
            <button onClick={handleDeleteTest}>Delete Test</button>
            {showPopup && (
                <div className="popup">
                    <p>Are you sure you want to delete this test?</p>
                    <button onClick={handleConfirmDelete}>Yes</button>
                    <button onClick={handleCancelDelete}>No</button>
                </div>
            )}
        </div>
    );
};

export default TestCard;
