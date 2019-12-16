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
    }
};

module.exports = Query;