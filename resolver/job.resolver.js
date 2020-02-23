const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const getJob = (parent, args) => {
    const dataPath = path.join(__dirname, `../data/${args.id}.json`);
    return new Promise((resolve, reject) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (!err) {
                resolve(JSON.parse(data));
            } else {
                reject({ err: 'No data found!'});
            }
        });
    })
};

module.exports = getJob;
