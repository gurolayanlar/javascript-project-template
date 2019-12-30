const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: String,
    code: String
})

module.exports = mongoose.model('category', CategorySchema)