const express = require("express");
const app = express();

const apiRoutes = require("./routes/apiRoutes");
apiRoutes(app);

app.listen(8000, ()=>console.log("Listening on Port 8000"))