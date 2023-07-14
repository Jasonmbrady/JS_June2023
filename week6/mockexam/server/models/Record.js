const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Album title is required!"],
        minLength: [3, "Album title must be at least 3 characters long"]
    },

    artist: {
        type: String,
        required: [true, "Artist name is required!"],
        minLength: [3, "Artist name must be at least 3 characters long"]
    },

    description: {
        type: String,
        required: [true, "Description is required!"],
        minLength: [3, "Description must be at least 3 characters long"]
    },

    isOwned: {
        type: Boolean,

    },

    genre1: {
        type: String,
    },
    genre2: {
        type: String,
    },
    genre3: {
        type: String,
    }

}, {timestamps: true});

module.exports = mongoose.model("Record", RecordSchema);