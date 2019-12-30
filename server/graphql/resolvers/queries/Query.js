const Query = {
    user: async (parent, args, { User }) => {
       return await User.findById(args.id);
    },
    users: async (parent, args, { User }) => {
        return await User.find({}).sort({});
    },
    customer: async (parent, args, { Customer }) => {
        return await Customer.findById(args.id);
    },
    customers: async (parent, args, { Customer }) => {
        return await Customer.find({}).sort({});
    },
    product: async (parent, args, { Product }) => {
        return await Product.findById(args.id);
    },
    products: async (parent, args, { Product }) => {
        return await Product.find({}).sort({});
    },
    category: async (parent, args, { Category }) => {
        return await Category.findById(args.id);
    },
    categories: async (parent, args, { Category }) => {
        return await Category.find({}).sort();
    },
    order: async (parent, args, { Order }) => {
        return await Order.findById(args.id);
    },
    orders: async (parent, args, { Order }) => {
        return await Order.find({}).sort();
    },
    payment: async (parent, args, { Payment }) => {
        return await Payment.findById(args.id);
    },
    payments: async (parent, args, { Payment }) => {
        return await Payment.find({}).sort();
    }

};

module.exports = Query;