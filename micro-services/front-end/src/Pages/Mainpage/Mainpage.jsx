import './Mainpage.css';
import Navbar from '../../Components/Navbar/Navbar';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Mainpage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check login status from localStorage
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loginStatus) {
      navigate('/login');
    } else {
      setIsLoggedIn(true);
      setUsername(loggedInUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div>
      {isLoggedIn && (
        <>
          <Navbar isLoggedIn={isLoggedIn} />
          <div className='user-greeting'>
            Welcome, {username}!
          </div>
        </>
      )}
    </div>
  );
};
export default Mainpage;
