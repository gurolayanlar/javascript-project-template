module.exports = {
    addCustomer: async (parent, { data: { firstName, lastName, email, phoneNumber, address, city, country}}, { Customer }) => {
        const customer = await Customer.findOne({ email });

        if(customer) {
            throw new Error('User already exists.')
        }

        const newCostomer = await new Customer({
            firstName,
            lastName,
            email,
            phoneNumber,
            address,
            city,
            country
        }).save();

        return {
            firstName: newCostomer.firstName
        }
    }
}