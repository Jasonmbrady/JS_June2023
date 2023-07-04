const mongoose = require("mongoose");

const DrinkSchema = new mongoose.Schema({
    name: {
        type: String
    },

    price: {
        type: Number
    },

    ingredients: {
        type: Array
    }
}, {timestamps: true});

module.exports = (mongoose.model("Drink", DrinkSchema))