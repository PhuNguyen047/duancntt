import './ChangePassword.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword.length == 0) {
      setError('Type your new password here!');
      return;
    }

    if (newPassword.length < 8) {
      setError('Your password must be at least 8 characters!');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const updatedUsers = storedUsers.map((user) => {
        if (user.username === loggedInUser.username) {
          return { ...user, password: btoa(newPassword) };
        }
        return user;
      });
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      localStorage.setItem('loggedInUser', JSON.stringify({ ...loggedInUser, password: btoa(newPassword) }));
    }

    setNewPassword('');
    setConfirmPassword('');
    setError('');
    setSuccessMessage('Password changed successfully!');

    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  const backToLogin = () => {
    navigate('/login');
  }

  return (
    <div className='change-password-temp'>
      <img className='change-password-background' src='https://img.freepik.com/free-photo/abstract-2d-colorful-wallpaper-with-grainy-gradients_23-2151001646.jpg'></img>
      <div className='change-password'>
        <h1 className='title'>Change Password</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <p>New Password:</p>
            <input
              type='password'
              id='newpassword'
              placeholder='Type your new password here...'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <p>Confirm Password:</p>
            <input
              type='password'
              id='confirmpassword'
              placeholder='Confirm your new password here...'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <div className='error'>{error}</div>}
          {successMessage && <div className='success'>{successMessage}</div>}
          <button type='button' onClick={backToLogin}>Back</button>
          <button type='submit'>Save changes</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
