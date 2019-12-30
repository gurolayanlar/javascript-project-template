const Product = {
    category: async (parent, args, { Category }) => {
        return await Category.findById(parent.id)
    }
}

module.exports = Product;