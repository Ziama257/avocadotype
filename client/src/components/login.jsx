import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const [loginData, setLoginData] = useState({
email: '',
password: '',
});

const [error, setError] = useState('');
const navigate = useNavigate();

const handleChange = (e) => {
const { name, value } = e.target;
setLoginData({
    ...loginData,
    [name]: value,
});
};

const handleLogin = async (e) => {
e.preventDefault();

try {
    const response = await axios.post('http://localhost:8000/api/login', loginData);
    const { token, user } = response.data;

    // Save the token in localStorage
    localStorage.setItem('token', token);

    // You can also store other user-related information if needed
    localStorage.setItem('user', JSON.stringify(user));

    // Redirect to another page (replace '/' with your desired route)
    navigate('/test');
} catch (error) {
    console.error(error.response.data);
    setError('Invalid email or password');
}
};

return (
<div>
    <nav className='navbar'>
    <h1>Log in to AvocadoType!</h1>
    </nav>
    <div className='container'>
    <h1 style={{ margin: '2% 0% 2% 2%' }}>Login</h1>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <form className='form col-md-4 mx-auto' onSubmit={handleLogin}>
        <div className='Form-group mt-3'>
        <label htmlFor='' className='form-label'>
            Email:
        </label>
        <input
            type='email'
            name='email'
            value={loginData.email}
            onChange={handleChange}
            className='form-control'
        />
        </div>
        <div className='Form-group mt-3'>
        <label htmlFor='' className='form-label'>
            Password:
        </label>
        <input
            type='password'
            name='password'
            value={loginData.password}
            onChange={handleChange}
            className='form-control'
        />
        </div>
        <button type='submit' className='btn btn-primary mt-3'>
        Login
        </button>
    </form>
    </div>
</div>
);
};

export default Login;
