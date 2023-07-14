const Record = require("../models/Record");

module.exports = {
    findAllRecords: (req, res) => {
        Record.find()
            .then(allRecords => res.json(allRecords))
            .catch( err => res.status(400).json(err));
    },

    findOneRecord: (req, res) => {
        Record.findById(req.params.id)
            .then(oneRecord => res.json(oneRecord))
            .catch( err => res.status(400).json(err));
    },

    createRecord: (req, res) => {
        Record.create(req.body)
            .then( newRecord => res.json(newRecord))
            .catch( err => res.status(400).json(err));
    },

    updateRecord: (req, res) => {
        Record.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(updatedRecord => res.json(updatedRecord))
            .catch( err => res.status(400).json(err));
    },

    deleteRecord: (req, res) => {
        Record.findByIdAndDelete(req.params.id)
            .then(deletedRecord => res.json(deletedRecord))
            .catch( err => res.status(400).json(err));
    }
}