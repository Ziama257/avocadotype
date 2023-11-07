import React, { useState, useEffect } from 'react';
import axios from 'axios';
const HighScores = () => {
const [highScores, setHighScores] = useState([]);
// const userToken = localStorage.getItem('token');

// if (!userToken) {
//   // Redirect to login or show a message
// }
useEffect(() => {
axios.get('http://localhost:8000/api/highscores')
    .then(response => setHighScores(response.data))
    .catch(error => console.error(error));
}, []);

return (
<div>
    <h2>High Scores</h2>
    <ul>
    {highScores.map(score => (
        <li key={score._id}>
        {/* {score.user}: {score.wpm} WPM */}
        </li>
    ))}
    </ul>
</div>
);
};

export default HighScores;
