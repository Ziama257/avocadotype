const mongoose = require('mongoose');
// const User = require('./user.model'); 

const ScoreSchema = new mongoose.Schema({

    author: {
        type: String
    },
    
    wpm: {
        type: Number
    },
    comment: {
        type: String
    }
    
},{ timestamps: true });



const Score = mongoose.model('Scores', ScoreSchema);


module.exports = Score;
