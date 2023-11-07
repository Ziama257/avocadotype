// // middleware/verifyToken.js
// const jwt = require('jsonwebtoken');
// const User = require('../models/user.model'); // Assuming you have a User model

// const verifyToken = (req, res, next) => {
//   const token = req.header('Authorization');

//   if (!token) {
//     return res.status(401).json({ message: 'Access denied. No token provided.' });
//   }

//   try {
//     const decoded = jwt.verify(token, 'your-secret-key'); // Replace with your actual secret key
//     User.findById(decoded.userId)
//       .then(user => {
//         if (!user) {
//           return res.status(401).json({ message: 'Invalid token.' });
//         }

//         // Add user information to the request
//         req.user = user;
//         next();
//       })
//       .catch(err => {
//         console.error(err);
//         res.status(500).json({ message: 'Internal server error.' });
//       });
//   } catch (error) {
//     console.error(error);
//     res.status(401).json({ message: 'Invalid token.' });
//   }
// };

// module.exports = verifyToken;
