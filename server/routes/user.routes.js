// const User = require('../models/user.model');

// module.exports.findAllUsers = (req, res) => {
//     User.find({})
//         .then(users => {
//             res.json(users);
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });
// }

// module.exports.getUser = (req, res) => {
//     User.findOne({_id:req.params.id})
//         .then(user => res.json(user))
//         .catch(err => res.json(err));
// }

// module.exports.createNewUser = (req, res) => {
//     User.create(req.body)
//         .then(user => res.json(user))
//         .catch(err => res.json(err));
//         };

// module.exports.updateUser = (req, res) => {
//     User.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
//         .then(updatedUser => res.json(updatedUser))
//         .catch(err => res.json(err));

// }

// module.exports.deleteAnExistingUser = (req, res) => {
//     User.deleteOne({ _id: req.params.id })
//         .then(result => {
//             res.json({ result: result })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });}
