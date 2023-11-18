import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const UserList = () => {
const [users, setUsers] = useState([]);
const navigate = useNavigate();

useEffect(() => {
axios.get('http://localhost:8000/api/users')
    .then(response => setUsers(response.data))
    .catch(error => console.error(error));
}, []);

const handleBackToTest = () => {
navigate('/test');
};

return (
<div className="container">
    <h2>User List</h2>
    <button className="link-button" onClick={handleBackToTest}>Back to Test</button>
    <ul className="user-list">
    {users.map(user => (
        <li key={user._id}>
        <Link to={`/users/${user.username}`} className="user-link">
            {user.username}
        </Link>
        </li>
    ))}
    </ul>
</div>
);
};

export default UserList;