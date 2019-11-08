import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
    employeeId: Number,
    name: String,
    address: String,
    isHr: Boolean
});

module.exports = mongoose.model('Employee', EmployeeSchema);