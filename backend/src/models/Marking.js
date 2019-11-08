import mongoose from 'mongoose';

const MarkingSchema = new mongoose.Schema({
    employeeId: Number,
    datetime: Date,
    entrance: Date,
    exit: Date
});

module.exports = mongoose.model('Marking', MarkingSchema);