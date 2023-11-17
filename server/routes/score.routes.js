const ScoreController = require("../controllers/score.controller");
const UserController = require("../controllers/user.controller");
// const verifyToken = require('../middleware/verifyToken');

module.exports = (app) => {
    app.post("/api/scores", 
    // verifyToken, 
    ScoreController.createNewScore);
    app.get("/api/scores", ScoreController.getAllScores);
    app.get("/api/users", UserController.findAllUsers);
    app.post("/api/users", UserController.createNewUser);
    app.get("/api/users/:id", UserController.getUser);
    app.delete("/api/users/:id", UserController.deleteAnExistingUser);
    app.put("/api/users/:id", UserController.updateUser);
    app.post("/api/login", UserController.loginUser);
    app.get("/api/scores/:username", ScoreController.getScoresByUsername);

}