const Query = {
    user: (parent, args) => {
        return {
            name: 'Özgün',
            surname: 'Özdemir'
        }
    }
};

module.exports = Query;