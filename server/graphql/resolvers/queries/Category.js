const Category = {
    products: async (parent, args, { Product }) => {
        return await Product.find({id: parent.id})
    }
}

module.exports = Category;