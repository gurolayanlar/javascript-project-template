const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    status: String,
    comments: String,
    date: Date,
    details: [{
        count: Number,
        productCode: Number
    }]
})

module.exports = mongoose.model('order', OrderSchema)