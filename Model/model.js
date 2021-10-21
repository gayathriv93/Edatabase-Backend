const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    eId: {
        type: Number,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: String,
    position: String,
    phoneNumber: {
        type: Number,
        required: true,
    },
    email: String,
    dateofBirth : Date,
    panNumber: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    streetAddress: String,
    streetAddress2: String,
    city: String,
    state: String,
    postalCode: Number,
    department: String,
    designation: {
        type: String,
        required: true,

    },
    joiningDate: {
        type: Date
        // required: true,

    },
    relievingdDate: Date,
    bgStatus: String,
    workLocation: String
});

module.exports = mongoose.model('employee', empSchema);;