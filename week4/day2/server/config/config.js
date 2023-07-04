const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/pizzaDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then((res) => console.log("Established connection to DB!", res))
    .catch( err => console.log("Unable to connect to DB!", err));

require("../models/Pizza");