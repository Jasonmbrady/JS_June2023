const ApiController = require('../controllers/apiController');

module.exports = (app) => {
    app.get("/api", ApiController.api );
    app.get("/api/greet", ApiController.greeting);
}