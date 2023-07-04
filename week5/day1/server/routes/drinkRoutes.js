const DrinkController = require("../controllers/drinkController");

module.exports = app => {
    app.get('/api/drinks', DrinkController.findAllDrinks);
    app.get('/api/drinks/:id', DrinkController.findOneDrink);
    app.post('/api/drinks', DrinkController.createDrink);
    app.put('/api/drinks/:id', DrinkController.updateDrink);
    app.delete('/api/drinks/:id', DrinkController.deleteDrink);
}