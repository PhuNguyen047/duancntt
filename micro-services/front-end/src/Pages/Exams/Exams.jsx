import './Exams.css';
import Navbar from '../../Components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import TestCard from './TestCard';
import AddTestModal from './AddTestModal';

const Exams = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [tests, setTests] = useState([]);
    const [showAddTestModal, setShowAddTestModal] = useState(false);

    useEffect(() => {
        const loginStatus = localStorage.getItem('isLoggedIn');
        if (loginStatus) {
            setIsLoggedIn(true);
        }

        const savedTests = localStorage.getItem('tests');
        if (savedTests) {
            setTests(JSON.parse(savedTests));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tests', JSON.stringify(tests));
    }, [tests]);

    const handleAddTest = (newTest) => {
        setTests([...tests, newTest]);
    };

    const handleDeleteTest = (testId) => {
        setTests(tests.filter(test => test.id !== testId));
    };

    return (
        <div className={`exams-container ${isLoggedIn ? 'logged-in' : 'logged-out'}`}>
            <Navbar isLoggedIn={isLoggedIn} />
            {isLoggedIn ? (
                <>
                    <div className="welcome-message">
                        <h1>Welcome to the Exams Section!</h1>
                        <p>Here you can find all your exam schedules and results.</p>
                        <button onClick={() => setShowAddTestModal(true)}>Add Test</button>
                    </div>
                    <div className="test-cards-container">
                        {tests.map(test => (
                            <TestCard key={test.id} test={test} onDelete={handleDeleteTest} />
                        ))}
                    </div>
                    {showAddTestModal && 
                        <AddTestModal onClose={() => setShowAddTestModal(false)} onAddTest={handleAddTest} />
                    }
                </>
            ) : (
                <div className="login-prompt">
                    <h1>Please log in to view your exams</h1>
                </div>
            )}
        </div>
    );
};
export default Exams;
