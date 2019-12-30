// query resolvers
const Query = require('./queries/Query');
const Category = require('./queries/Category');
const Payment = require('./queries/Payment');
const Product = require('./queries/Product');

// mutation resolvers
const Mutation = require('./mutations/index');

module.exports = {
    Query,
    Category,
    Payment,
    Product,
    Mutation
}