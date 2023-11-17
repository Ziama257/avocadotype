const Score = require('../models/score.model');

module.exports.getScore = (req, res) => {
    Score.findOne({_id:req.params.id})
        .then(score => res.json(score))
        .catch(err => res.json(err));
}

module.exports.createNewScore = async (req, res) => {
    try {
        const { wpm, comment, author } = req.body;

        const newScore = await Score.create({ wpm, comment, author });

        res.json(newScore);
    } catch (error) {
        res.status(400).json({ message: 'Error creating score', error });
    }
    };

module.exports.updateScore = (req, res) => {
    Score.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(updatedScore => res.json(updatedScore))
        .catch(err => res.json(err));

}

module.exports.getAllScores = (req, res) => {
    Score.find({})
        .then(scores => {
            res.json(scores);
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.deleteAnExistingScore = (req, res) => {
    Score.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.getScoresByUsername = async (req, res) => {
    try {
        const author= req.params.username;
        console.log(author)
        const scores = await Score.find({ author });
        console.log(scores)
    
        res.json(scores);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    };