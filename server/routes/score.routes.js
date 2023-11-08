const ScoreController = require("../controllers/score.controller");
const UserController = require("../controllers/user.controller");
// const verifyToken = require('../middleware/verifyToken');

module.exports = (app) => {
    app.get('/api/highscores', ScoreController.getAllHighScores);
    app.post("/api/scores", 
    // verifyToken, 
    ScoreController.createNewScore);
    // app.get("/api/scores/:id", ScoreController.getScore);
    // app.delete("/api/scores/:id", ScoreController.deleteAnExistingScore);
    // app.put("/api/scores/:id", ScoreController.updateScore);
    // app.get('/users/:userId/scores', ScoreController.findScoresByUser);
    app.get("/api/users", UserController.findAllUsers);
    app.post("/api/users", UserController.createNewUser);
    app.get("/api/users/:id", UserController.getUser);
    app.delete("/api/users/:id", UserController.deleteAnExistingUser);
    app.put("/api/users/:id", UserController.updateUser);
    app.post("/api/login", UserController.loginUser);

}