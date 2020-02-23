const fs = require('fs');
const path = require('path');

const getUsers = () => {
    const userDataPath = path.join(__dirname, '../data/all-users.json');
    return new Promise((resolve, reject) => {
        fs.readFile(userDataPath, 'utf8', (err, data) => {
            if (!err) {
                resolve(JSON.parse(data));
            } else {
                reject({ err: 'User data not found'});
            }
        })
    });
};

module.exports = getUsers;
