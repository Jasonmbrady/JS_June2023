const Drink = require("../models/Drink");

module.exports = {
    findAllDrinks: (req, res) => {
        Drink.find()
            .then( allDrinks => res.json({drinks: allDrinks}))
            .catch( err => console.log(err));
    },

    findOneDrink: (req, res) => {
        Drink.findById({_id: req.params.id})
            .then( oneDrink => res.json({drink: oneDrink}))
            .catch( err => console.log(err));
    },

    createDrink: (req, res) => {
        Drink.create(req.body)
            .then( newDrink => res.json({drink: newDrink}))
            .catch( err => console.log(err));
    },

    updateDrink: ( req, res ) => {
        Drink.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then( updatedDrink => res.json({drink: updatedDrink}))
            .catch(err => console.log(err));
    },

    deleteDrink: ( req, res ) => {
        Drink.findByIdAndDelete({ _id: req.params.id })
            .then(result => res.json({ results: result}))
            .catch(err => console.log(err));
    }
}