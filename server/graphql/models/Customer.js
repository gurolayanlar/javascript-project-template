const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    birthdate: Date,
    address: String,
    city: String,
    country: String
})

module.exports = mongoose.model('customer', CustomerSchema)