const express = require('express');
const app = express();
const {faker} = require("@faker-js/faker");

app.listen(8000, () => console.log("The server is running on port 8000"));
