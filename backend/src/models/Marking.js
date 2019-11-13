const mongoose = require('mongoose');

const MarkingSchema = new mongoose.Schema({
    chapa: Number,
    lat: Number,
    long: Number,
    currentDateTime: Date,
});

module.exports = mongoose.model('Marking', MarkingSchema);