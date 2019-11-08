const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    chapa: Number,
    name: String,
    address: String,
    isHr: Boolean
});

module.exports = mongoose.model('Employee', EmployeeSchema);