const JobType = require('../types/job');
const addJob = require('../resolver/add-job.resolver');
const AddJobPayloadType = require('../types/add-job.payload');

const jobMutation = {
    job: {
        type: JobType,
        args: { payload: { type: AddJobPayloadType } },
        resolve: addJob
    }
};

module.exports = jobMutation;
