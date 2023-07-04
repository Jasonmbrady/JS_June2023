// const Pizzas = [
//     {name: "Plain", toppings: "just cheese"},
//     {name: "MeatLovers", toppings: "All the meats"}
// ]
const Pizza = require("../models/Pizza")
module.exports = {
    getAllPizzas: (req, res) => {
        Pizza.find()
            .then( allPizzas => res.json({Pizzas: allPizzas}))
            .catch(err => console.log(err));

    },

    getPizzaByName: (req, res) => {
        Pizza.findOne({name: req.params.name})
            .then( onePizza => res.json({pizza: onePizza}))
            .catch( err => console.log(err));
    }
}