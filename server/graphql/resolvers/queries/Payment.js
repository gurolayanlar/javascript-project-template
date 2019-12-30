const Payment = {
    orders: async (parent, args, { Order }) => {
        return await Order.find({id: parent.id})
    }
}

module.exports = Payment;