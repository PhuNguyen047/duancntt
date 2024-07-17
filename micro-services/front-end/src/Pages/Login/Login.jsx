import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
      setError('You need to input Username and Password');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(
      (user) => user.username === username && user.password === btoa(password)
    );

    if (user) {
      console.log('Username:', username);
      console.log('Password:', password);
      setError('');
      setUsername('');
      setPassword('');
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      navigate('/mainpage');
    } else {
      setError('Invalid Username or Password');
    }
  };

  const handleSignupRedirect = (e) => {
    e.preventDefault();
    navigate('/signup');
  };

  const handleChangePasswordRedirect = (e) => {
    e.preventDefault();
    navigate('/changepassword');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className='login-temp'>
      <img className='login-background' src='https://img.freepik.com/free-photo/abstract-2d-colorful-wallpaper-with-grainy-gradients_23-2151001646.jpg'/>
      <div className='login'>
        <form onSubmit={handleSubmit}>
          <h1 className='title'>Login</h1>
          <div className='form-group'>
            <p>Username:</p>
            <input
              type='text'
              id='username'
              placeholder='Type your username here...'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <p>Password:</p>
            <input
              type='password'
              id='password'
              placeholder='Type your password here...'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a className='link-change' href='/changepassword' onClick={handleChangePasswordRedirect}>
              Change Password
            </a>
          </div>

          {error && <div className='error'>{error}</div>}
          <button type='submit'>Login</button>
          <button type='button' className='back-button' onClick={handleBack}>Back</button>
          <a href='/signup' onClick={handleSignupRedirect}>
            Don't have an account? Sign up here
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
