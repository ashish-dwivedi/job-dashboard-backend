const fs = require('fs');
const express = require('express');
const router = express.Router();
const path = require('path');

const dataPath = path.join(__dirname, `../data`);

router.get('/all', (req, res) => {
  fs.readFile(`${dataPath}/all-users.json`, 'utf8', (err, data) => {
    if (!err) {
      res.status(200).send(JSON.parse(data));
    } else {
      res.status(403).send({ err: 'No data found!' });
    }
  });
});

module.exports = router;
