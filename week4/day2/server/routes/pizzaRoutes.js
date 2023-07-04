const pizzaController = require("../controllers/pizzaController");

module.exports = app => {
    app.get('/api/pizzas', pizzaController.getAllPizzas );
    app.get('/api/pizzas/:name', pizzaController.getPizzaByName);
}