const { GraphQLList } = require('graphql');
const UserType = require('../types/user');
const getUsers= require('../resolver/users.resolver');

const userQueries = {
    users: {
        type: GraphQLList(UserType),
        resolve: getUsers
    }
};

module.exports = userQueries;
