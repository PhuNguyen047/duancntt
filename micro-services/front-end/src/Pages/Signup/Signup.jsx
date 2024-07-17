import './Signup.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword || !role) {
      setError('You need to fill all in the required fields!');
      return;
    }

    if (password.length < 8) {
      setError('Your password must be at least 8 characters!');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const newUser = {
      username,
      email,
      password: btoa(password), // Encoding password to base64
      role
    };

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Role:', role);

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setRole('student');
    setError('');
    setSuccessMessage('Account created successfully!');

    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className='signup-temp'>
      <img className='signup-background' src='https://img.freepik.com/free-photo/abstract-2d-colorful-wallpaper-with-grainy-gradients_23-2151001646.jpg'></img>
      <div className='signup'>
        <h1 className='title'>Sign Up</h1>
        <form onSubmit={handleSubmit}>
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
            <p>Email:</p>
            <input
              type='email'
              id='email'
              placeholder='Type your email here...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='role-group'>
            <p>Role:</p>
            <div>
            <p className='role-title'>Admin</p>
              <input
                type='radio'
                id='admin'
                name='role'
                value='admin'
                checked={role === 'admin'}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div>
              <p className='role-title'>Teacher</p>
              <input
                type='radio'
                id='teacher'
                name='role'
                value='teacher'
                checked={role === 'teacher'}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div>
              <p className='role-title'>Student</p>
              <input
                type='radio'
                id='student'
                name='role'
                value='student'
                checked={role === 'student'}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
          </div>
          <div className='form-group'>
            <p>Password:</p>
            <input
              type='password'
              id='password'
              placeholder='Password must be at least 8 characters...'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <p>Confirm Password:</p>
            <input
              type='password'
              id='confirmPassword'
              placeholder='Confirm your password...'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <div className='error'>{error}</div>}
          {successMessage && <div className='success'>{successMessage}</div>}
          <button type='submit'>Sign Up</button>
          <a href='/login'>
            Already have an account? Login here
          </a>
          <button type='button' className='back-button' onClick={handleBack}>Back</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
