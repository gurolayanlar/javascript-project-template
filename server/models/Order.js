const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    status: String,
    comments: String,
    date: Date,
    details: [{
        count: String,
        productCode: String
    }]
})

module.exports = mongoose.model('order', OrderSchema)