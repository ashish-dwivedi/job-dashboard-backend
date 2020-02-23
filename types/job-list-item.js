const UserType = require('./user');
const { GraphQLObjectType, GraphQLString } = require('graphql');

const JobListItemType = new GraphQLObjectType({
    name: 'JobListItemType',
    description: 'Job List Item type',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        date: { type: GraphQLString },
        status: { type: GraphQLString },
        assignee: { type: UserType }
    })
});

module.exports = JobListItemType;
