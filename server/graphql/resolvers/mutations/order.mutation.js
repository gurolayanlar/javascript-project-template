module.exports = {
    createOrder: async (parent, { data: { date, status, comments, details: { count, productCode} }}, { Order }) => {

        const newOrder = await new Order({
            date,
            status,
            comments,
            details: [{
                count,
                productCode
            }]
        }).save();

        return {
            status: newOrder.status
        }
    }
}