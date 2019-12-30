
module.exports = {
    createUser: async (parent, { data: { firstName, lastName, email, password, role}}, { User }) => {
        const user = await User.findOne({ email });

        if(user) {
            throw new Error('User already exists.')
        }

        const newUser = await new User({
            firstName,
            lastName,
            email,
            password,
            role
        }).save();

        return {
            firstName: newUser.firstName
        }
    }
}