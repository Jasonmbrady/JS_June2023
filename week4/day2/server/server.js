const express = require("express");
const app = express();
const port = 8000;

require("./config/config");
app.use(express.json(), express.urlencoded({ extended: true }));

const PizzaRoutes = require("./routes/pizzaRoutes");
PizzaRoutes(app);


app.listen(port, ()=> console.log("The server is running on port " + port))
