const { GraphQLObjectType, GraphQLString } = require('graphql');

const AttachmentType = new GraphQLObjectType({
    name: 'AttachmentType',
    description: 'Attachment Type',
    fields: () => ({
        name: { type: GraphQLString },
        downloadUrl: { type: GraphQLString }
    })
});

module.exports = AttachmentType;
