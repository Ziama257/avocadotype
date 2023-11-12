// UserPage.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserPage = ({ match }) => {
// const [userData, setUserData] = useState(null);

// useEffect(() => {
// const userId = match.params.userId; // Assuming the parameter is named userId
// axios.get(`http://localhost:8000/api/users/${userId}`)
//     .then((response) => {
//     setUserData(response.data);
//     })
//     .catch((error) => {
//     console.error(error);
//     });
// }, [match.params.userId]);

// if (!userData) {
// return <div>Loading...</div>;
// }

// return (
// <div>
//     <h2>User Profile</h2>
//     <p>Username: {userData.username}</p>
//     {/* Display other user information */}
// </div>
// );
// };

// export default UserPage;
