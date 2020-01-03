const user = require('./user.mutation');
const customer = require('./customer.mutation');
const order = require('./order.mutation');

const Mutation = {
    ...user,
    ...customer,
    ...order
}

module.exports = Mutation;
