const UserType = require('./user');
const { GraphQLString, GraphQLInputObjectType } = require('graphql');

const AddJobPayloadType = new GraphQLInputObjectType({
    name: 'AddJobPayloadType',
    description: 'AddJobPayloadType',
    fields: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        date: { type: GraphQLString }
    }
});

module.exports = AddJobPayloadType;
