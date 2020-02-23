const UserType = require('./user');
const AttachmentType = require('./attachment');
const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const JobType = new GraphQLObjectType({
    name: 'JobType',
    description: 'Job type',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        date: { type: GraphQLString },
        assignee: { type: UserType },
        status: { type: GraphQLString},
        attachments: { type: GraphQLList(AttachmentType) }
    })
});

module.exports = JobType;
