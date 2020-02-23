const jobQueries = require('../queries/job.queries');
const userQueries = require('../queries/user.queries');
const jobMutation = require('../queries/job.mutation');
const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const schema =  new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: { ...jobQueries, ...userQueries },
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: jobMutation
    })
});

module.exports = schema;
