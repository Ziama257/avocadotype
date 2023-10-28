const Score = require('../models/score.model');

module.exports.findAllScores = (req, res) => {
    Score.find({})
        .then(scores => {
            res.json(scores);
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.getScore = (req, res) => {
    Score.findOne({_id:req.params.id})
        .then(score => res.json(score))
        .catch(err => res.json(err));
}

module.exports.createNewScore = (req, res) => {
    Score.create(req.body)
        .then(score => res.json(score))
        .catch(err => res.json(err));
        };

module.exports.updateScore = (req, res) => {
    Score.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(updatedScore => res.json(updatedScore))
        .catch(err => res.json(err));

}

module.exports.deleteAnExistingScore = (req, res) => {
    Score.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
