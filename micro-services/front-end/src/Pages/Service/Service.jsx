import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Service.css';

const Service = () => {
    return (
        <div>
            <Navbar />
            <div className='service-page'>
                <h1 className='title'>Our Services</h1>
                <div className='service-sections'>
                    <div className='service-section fade-in'>
                        <i className='fa fa-3x fa-chalkboard-teacher icon'></i>
                        <h3>Personalized Learning</h3>
                        <p>Our platform offers personalized learning paths tailored to individual needs, ensuring that each student can learn at their own pace and level.</p>
                    </div>
                    <div className='service-section fade-in' style={{ animationDelay: '0.2s' }}>
                        <i className='fa fa-3x fa-video icon'></i>
                        <h3>Video Lessons</h3>
                        <p>Engaging video lessons from experienced instructors make learning interactive and enjoyable, providing visual and auditory learning experiences.</p>
                    </div>
                    <div className='service-section fade-in' style={{ animationDelay: '0.4s' }}>
                        <i className='fa fa-3x fa-laptop icon'></i>
                        <h3>Interactive Quizzes</h3>
                        <p>Interactive quizzes and assessments help reinforce knowledge and track progress, giving immediate feedback to help students improve.</p>
                    </div>
                    <div className='service-section fade-in' style={{ animationDelay: '0.6s' }}>
                        <i className='fa fa-3x fa-certificate icon'></i>
                        <h3>Certification</h3>
                        <p>Upon course completion, students receive a certificate, recognizing their accomplishments and enhancing their credentials for future opportunities.</p>
                    </div>
                    <div className='service-section fade-in' style={{ animationDelay: '0.8s' }}>
                        <i className='fa fa-3x fa-comments icon'></i>
                        <h3>Live Tutoring</h3>
                        <p>Get real-time help from expert tutors in various subjects, ensuring that students receive the support they need when they need it.</p>
                    </div>
                    <div className='service-section fade-in' style={{ animationDelay: '1s' }}>
                        <i className='fa fa-3x fa-users icon'></i>
                        <h3>Community Forums</h3>
                        <p>Join community forums to discuss topics, ask questions, and collaborate with peers, fostering a collaborative and supportive learning environment.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
