const User = require('../models/user.model');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const createToken = (user) => {
//     return jwt.sign({ userId: user._id, username: user.username }, 'your-secret-key', { expiresIn: '1h' });
//     };
    
// module.exports.loginUser = {
//     async loginUser(req, res) {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });

//         if (!user) {
//         return res.status(401).json({ message: 'Invalid login credentials' });
//         }

//         const isPasswordValid = await bcrypt.compare(password, user.password);

//         if (!isPasswordValid) {
//         return res.status(401).json({ message: 'Invalid login credentials' });
//         }

//         const token = createToken(user);

//         res.status(200).json({ token, user: { _id: user._id, username: user.username, email: user.email } });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
//     }
// }


module.exports.findAllUsers = (req, res) => {
    User.find({})
        .then(users => {
            res.json(users);
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
    }


module.exports.getUser = (req, res) => {
    User.findOne({_id:req.params.id})
        .then(user => res.json(user))
        .catch(err => res.json(err));
}

module.exports.createNewUser = (req, res) => {
    const { username, email, password, highScores } = req.body;

    User.create({
        username,
        email,
        password,
        highScores, // Assuming highScores is an array
    })
    .then(user => res.json(user))
    .catch(err => res.json(err));
};

module.exports.updateUser = (req, res) => {
    User.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.json(err));

}

module.exports.deleteAnExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
