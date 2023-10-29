const ScoreController = require("../controllers/score.controller");

module.exports = (app) => {
    app.get("/api/scores", ScoreController.findAllScores);
    app.post("/api/scores", ScoreController.createNewScore);
    app.get("/api/scores/:id", ScoreController.getScore);
    app.delete("/api/scores/:id", ScoreController.deleteAnExistingScore);
    app.put("/api/scores/:id", ScoreController.updateScore);
    app.get('/users/:userId/scores', ScoreController.findScoresByUser);
}