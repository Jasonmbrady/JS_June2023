const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

// require Mongoose Config
require("./config/mongoose-config");
app.use(express.json(), express.urlencoded({extended: true}));

// require routes
require("./routes/recordRoutes")(app);

app.listen(8000, ()=> console.log("Server up and running on port 8000!"));