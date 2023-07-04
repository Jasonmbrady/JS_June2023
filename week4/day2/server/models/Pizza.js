const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pizza name is required!"],
        minlength: [3, "Pizza names must be at least 3 characters!"]
    },
    toppings: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model("Pizza", PizzaSchema);