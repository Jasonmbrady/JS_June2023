const express = require("express");
const app = express();
const cors = require("cors");
const socket = require("socket.io");
app.use(cors());

const server = app.listen(8000, () => console.log("Listening on port 8000"));

const io = socket(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true
    }
});

io.on("connection", socket => {
    console.log("A new user connected!");
    // LISTENERS
    socket.on("newChat", data => {
        io.emit("updateChat", data)
    })
    // EMITTERS
    
})


