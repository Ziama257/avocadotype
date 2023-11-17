import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserPage = () => {
const { username } = useParams();
// const [userData, setUserData] = useState({});
const [userScores, setUserScores] = useState([]);

useEffect(() => {
// Fetch user-specific data based on the username
// axios.get(`http://localhost:8000/api/users/${username}`)
//     .then(response => setUserData(response.data))
//     .catch(error => console.error(error));

// Fetch scores for the user
axios.get(`http://localhost:8000/api/scores/${username}`)
    .then(response => {
    setUserScores(response.data);
    console.log('User Scores:', response.data);
    })
    .catch(error => console.error(error));
}, [username]);

return (
<div>
    <h2>User Profile: {username}</h2>

    <div>
    {/* Display user-specific information (e.g., name, email, etc.) */}
    {/* <p>Name: {userData.name}</p>
    <p>Email: {userData.email}</p> */}
    </div>

    <div>
    <h3>User Scores</h3>
    <ul>
        {userScores.map(score => (
        <li key={score._id}>
            WPM: {score.wpm}, Comment: {score.comment}
        </li>
        ))}
    </ul>
    </div>
</div>
);
};

export default UserPage;