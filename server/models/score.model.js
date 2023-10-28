const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    wpm: {
        type: Number
    },
    comment: {
        type: String
    }
},{ timestamps: true });

const Score = mongoose.model('Scores', ScoreSchema);

module.exports = Score;
