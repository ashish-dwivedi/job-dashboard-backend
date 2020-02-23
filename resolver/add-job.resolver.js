const fs = require('fs');
const uuid = require('uuid');
const path = require('path');

const addJob = (parent, args) => {
    const id = uuid.v1();
    let jobData = {
        ...args.payload,
        id,
        status: 'Active',
    };
    const dataPath = path.join(__dirname, `../data`);
    return new Promise((resolve, reject) => {
        fs.readFile( `${ dataPath }/all-jobs.json`, 'utf8', (err, data) => {
            if (!err) {
                const response = JSON.parse(data);
                response.push(jobData);
                fs.writeFile( `${ dataPath }/all-jobs.json`, JSON.stringify(response), (err, data) => {
                    jobData = {
                        ...jobData,
                        attachments: [
                            {
                                name: "SampleTile.jpg",
                                downloadUrl: "download-url-1"
                            },
                            {
                                name: "Query.pdf",
                                downloadUrl: "download-url-2"
                            }
                        ]
                    };
                    fs.writeFile( `${ dataPath }/${id}.json`, JSON.stringify(jobData), (err, data) => {
                        resolve(jobData);
                    });
                });
            } else {
                reject({ err: 'Request failed' });
            }
        });
    })
};

module.exports = addJob;
