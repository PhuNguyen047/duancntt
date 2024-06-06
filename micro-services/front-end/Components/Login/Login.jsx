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

        console.log('Username:', username);
        console.log('Password:', password);

        setError('');
        setUsername('');
        setPassword('');
    };

    const handleSignupRedirect = () => {
        navigate('/signup');
    };

    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <p>Please login to your account</p>

                <div className='form-group'>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                {error && <div className='error'>{error}</div>}
                <button type='submit'>Login</button>
                <button type='button' onClick={handleSignupRedirect}>
                    Don't have an account? Sign up here
                </button>
            </form>
        </div>
    );
};

export default Login;
