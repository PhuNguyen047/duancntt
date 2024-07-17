import './Student.css';
import Navbar from '../../Components/Navbar/Navbar';
import { useState } from 'react';

const Student = () => {
    const isLoggedIn = true;

    // Sample student data
    const students = [
        { name: 'John Doe', achievements: 'Top Scorer in Mathematics', image: 'https://via.placeholder.com/150' },
        { name: 'Jane Smith', achievements: 'Science Fair Winner', image: 'https://via.placeholder.com/150' },
        { name: 'Sam Brown', achievements: 'Chess Champion', image: 'https://via.placeholder.com/150' },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='student'>
            <Navbar isLoggedIn={isLoggedIn} />
            <div className='content'>
                <div className='student-list'>
                    {filteredStudents.map((student, index) => (
                        <div className='student-card' key={index}>
                            <img src={student.image} alt={`${student.name}'s image`} className='student-image' />
                            <div className='student-info'>
                                <h2 className='student-name'>{student.name}</h2>
                                <p className='student-achievements'>{student.achievements}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Student;
