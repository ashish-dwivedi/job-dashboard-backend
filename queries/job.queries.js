const JobType = require('../types/job');
const JobListItemType = require('../types/job-list-item');
const { GraphQLList, GraphQLString }  = require( 'graphql');

const getJob = require('../resolver/job.resolver')
const getJobs = require('../resolver/jobs.resolver')

const jobQueries = {
    jobs: {
        type: new GraphQLList(JobListItemType),
        resolve: getJobs
    },
    job: {
        type: JobType,
        args: { id: { type: GraphQLString } },
        resolve: getJob
    }
};

module.exports = jobQueries;
