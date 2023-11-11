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
<div className="container">
    <h2 style={{ marginTop: '35px', marginBottom: '35px' }}>High Scores</h2>
    < a href='./test'>Back to test</a>
    <ul className="list-group">
    {highScores.map((score) => (
        <li key={score._id} className="list-group-item">
        <span style={{ fontSize: '20px', marginRight: '15px' }}>User: {score.author}</span>
        <span style={{ fontSize: '20px' }}>WPM: {score.wpm}</span>
        </li>
    ))}
    </ul>
</div>
);
};

export default HighScores;
