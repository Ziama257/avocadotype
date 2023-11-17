import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserList = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
axios.get('http://localhost:8000/api/users')
    .then(response => setUsers(response.data))
    .catch(error => console.error(error));
}, []);

return (
<div>
    <h2>User List</h2>
    <ul>
    {users.map(user => (
        <li key={user._id}>
        <Link to={`/users/${user.username}`}>
            {user.username}
        </Link>
        </li>
    ))}
    </ul>
</div>
);
};

export default UserList;