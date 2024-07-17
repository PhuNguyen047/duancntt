import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './AddTestModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

const AddTestModal = ({ onClose, onAddTest }) => {
    const [name, setName] = useState(localStorage.getItem('testName') || '');
    const [creator, setCreator] = useState(localStorage.getItem('testCreator') || '');
    const [timeLimit, setTimeLimit] = useState(localStorage.getItem('testTimeLimit') || '');
    const [questions, setQuestions] = useState(JSON.parse(localStorage.getItem('testQuestions')) || []);
    const [questionText, setQuestionText] = useState('');
    const [options, setOptions] = useState({ A: '', B: '', C: '', D: '' });
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [questionType, setQuestionType] = useState('multipleChoice');
    const [showSuccess, setShowSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        localStorage.setItem('testName', name);
    }, [name]);

    useEffect(() => {
        localStorage.setItem('testCreator', creator);
    }, [creator]);

    useEffect(() => {
        localStorage.setItem('testTimeLimit', timeLimit);
    }, [timeLimit]);

    useEffect(() => {
        localStorage.setItem('testQuestions', JSON.stringify(questions));
    }, [questions]);

    const handleAddQuestion = () => {
        if (questionType === 'multipleChoice' && (!questionText || !options.A || !options.B || !options.C || !options.D || !correctAnswer)) {
            setErrorMessage('Please fill out all question fields and select a correct answer.');
            return;
        }

        if (questionType === 'typingAnswer' && (!questionText || !correctAnswer)) {
            setErrorMessage('Please fill out the question and answer fields.');
            return;
        }

        const newQuestion = questionType === 'multipleChoice'
            ? { type: questionType, question: questionText, options, correctAnswer }
            : { type: questionType, question: questionText, correctAnswer };

        setQuestions([...questions, newQuestion]);
        setQuestionText('');
        setOptions({ A: '', B: '', C: '', D: '' });
        setCorrectAnswer('');
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000); 
        setErrorMessage('');
    };

    const handleOptionChange = (value, name) => {
        setOptions({ ...options, [name]: value });
    };

    const handleSubmit = () => {
        if (!name || !creator || !timeLimit || questions.length === 0) {
            setErrorMessage('Please fill out all test details and add at least one question.');
            return;
        }

        const newTest = {
            id: Date.now(),
            name,
            creator,
            timeLimit,
            questions
        };
        onAddTest(newTest);
        localStorage.removeItem('testName');
        localStorage.removeItem('testCreator');
        localStorage.removeItem('testTimeLimit');
        localStorage.removeItem('testQuestions');
        onClose();
    };

    return (
        <div className="add-test-modal">
            <div className="modal-content">
                <h1>Add new test</h1>
                <p>
                    Test Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </p>
                <p>
                    Created by:
                    <input type="text" value={creator} onChange={(e) => setCreator(e.target.value)} />
                </p>
                <p>
                    Time Limit (minutes):
                    <input type="number" value={timeLimit} onChange={(e) => setTimeLimit(e.target.value)} />
                </p>
                <div className="questions-section">
                    <h3>Questions</h3>
                    <div className="question-type">
                        <p>
                            <input 
                                type="radio" 
                                value="multipleChoice" 
                                checked={questionType === 'multipleChoice'} 
                                onChange={(e) => setQuestionType(e.target.value)} 
                            />
                            Multiple Choice
                        </p>
                        <p>
                            <input 
                                type="radio" 
                                value="typingAnswer" 
                                checked={questionType === 'typingAnswer'} 
                                onChange={(e) => setQuestionType(e.target.value)} 
                            />
                            Typing Answer
                        </p>
                    </div>
                    <ReactQuill 
                        value={questionText} 
                        onChange={setQuestionText} 
                        placeholder="Question"
                        theme="snow"
                    />
                    {questionType === 'multipleChoice' && (
                        <>
                            <ReactQuill 
                                value={options.A} 
                                onChange={(value) => handleOptionChange(value, 'A')} 
                                placeholder="Option A" 
                                theme="snow"
                            />
                            <ReactQuill 
                                value={options.B} 
                                onChange={(value) => handleOptionChange(value, 'B')} 
                                placeholder="Option B" 
                                theme="snow"
                            />
                            <ReactQuill 
                                value={options.C} 
                                onChange={(value) => handleOptionChange(value, 'C')} 
                                placeholder="Option C" 
                                theme="snow"
                            />
                            <ReactQuill 
                                value={options.D} 
                                onChange={(value) => handleOptionChange(value, 'D')} 
                                placeholder="Option D" 
                                theme="snow"
                            />
                            <p>
                                Correct Answer:
                                <select value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)}>
                                    <option value="">Select an option</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                </select>
                            </p>
                        </>
                    )}
                    {questionType === 'typingAnswer' && (
                        <ReactQuill 
                            value={correctAnswer} 
                            onChange={setCorrectAnswer} 
                            placeholder="Correct Answer" 
                            theme="snow"
                        />
                    )}
                    <button onClick={handleAddQuestion}>
                        <FontAwesomeIcon icon={faPlus} /> Add Question
                    </button>
                    {showSuccess && <p className="success-message">Question added successfully!</p>}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
                <button onClick={handleSubmit}>Submit Test</button>
                <button onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} /> Close
                </button>
            </div>
        </div>
    );
};
export default AddTestModal;
