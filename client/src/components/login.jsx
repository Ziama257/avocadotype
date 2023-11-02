import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
const [loginData, setLoginData] = useState({
email: '',
password: '',
});

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
    console.log(response.data);
    // Handle successful login (redirect, set authentication state, etc.)

const { token, user } = response.data;

// Save the token in localStorage
localStorage.setItem('token', token);

// You can also store other user-related information if needed
localStorage.setItem('user', JSON.stringify(user));
} catch (error) {
console.error(error.response.data);
// Handle login error (show an error message, etc.)
}};


return (
<div>
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
    <label>
        Email:
        <input
        type="email"
        name="email"
        value={loginData.email}
        onChange={handleChange}
        />
    </label>
    <br />
    <label>
        Password:
        <input
        type="password"
        name="password"
        value={loginData.password}
        onChange={handleChange}
        />
    </label>
    <br />
    <button type="submit">Login</button>
    </form>
</div>
);
};

export default Login;