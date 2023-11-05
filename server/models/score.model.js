const mongoose = require('mongoose');
const User = require('./user.model'); 

const ScoreSchema = new mongoose.Schema({

    userId: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
    
    username: { type: String },
    
    wpm: {
        type: Number
    },
    comment: {
        type: String
    }
    
},{ timestamps: true });



const Score = mongoose.model('Scores', ScoreSchema);


module.exports = Score;
