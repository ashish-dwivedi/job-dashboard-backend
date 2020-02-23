const { GraphQLObjectType, GraphQLString } = require('graphql');

const UserType = new GraphQLObjectType({
    name: 'UserType',
    description: 'User type',
    fields: () => ({
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        role: { type: GraphQLString },
        avatar: { type: GraphQLString },
    })
});

module.exports = UserType;
