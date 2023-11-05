const Score = require('../models/score.model');

const getAllHighScores = async (req, res) => {
    try {
        const highScores = await Score.find({})
        .sort({ wpm: -1 }) // Sort in descending order (highest to lowest)
        .limit(10); // Limit the number of results (e.g., top 10)
        
        res.json(highScores);
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
}
};

module.exports = {
getAllHighScores,
};

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

    module.exports.findScoresByUser = (req, res) => {
        const userId = req.params.userId;
        
        Score.find({ userId })
            .then(scores => {
            if (!scores || scores.length === 0) {
                res.status(404).json({ message: 'Scores not found for the user' });
            } else {
                res.json(scores);
            }
            })
            .catch(error => {
            res.status(500).json({ message: 'Internal server error', error });
            });
        };