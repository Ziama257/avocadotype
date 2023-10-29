const mongoose = require('mongoose');
// const bcrypt= require('bcrypt");

const ScoreSchema = new mongoose.Schema({

    // UserID:
    
    wpm: {
        type: Number
    },
    comment: {
        type: String
    }
},{ timestamps: true });

// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     highScores: { type: [highScoreSchema], default: [] }, // Default to an empty array
// });

// userSchema.pre('save', async function (next) {
//     const user = this;
//     const hash = await bcrypt.hash(user.password, 10);
//     user.password = hash;
//     next();
// });

// swap the following when ready to test launch login/reg:
const Score = mongoose.model('Scores', ScoreSchema);
// const User = mongoose.model('User', userSchema);

module.exports = Score;
// module.exports = User;
