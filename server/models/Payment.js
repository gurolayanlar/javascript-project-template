const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    amount: String,
    order: String,
    date: Date
})

module.exports = mongoose.model('payment', PaymentSchema)