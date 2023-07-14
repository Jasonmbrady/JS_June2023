const RecordController = require("../controllers/recordController");

module.exports = app => {
    app.get('/api/records', RecordController.findAllRecords);
    app.get('/api/records/:id', RecordController.findOneRecord);
    app.post('/api/records', RecordController.createRecord);
    app.patch('/api/records/:id', RecordController.updateRecord);
    app.delete('/api/records/:id', RecordController.deleteRecord);
}