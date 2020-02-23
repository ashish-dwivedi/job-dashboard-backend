const fs = require('fs');
const uuid = require('uuid');
const path = require('path');
const express = require('express');
const router = express.Router();

const dataPath = path.join(__dirname, `../data`);

router.get('/all', (request, response) => {
  fs.readFile(`${dataPath}/all-jobs.json`, 'utf8', (err, data) => {
    if (!err) {
      response.status(200).send(JSON.parse(data));
    } else {
      response.status(400).send(JSON.parse(data));
    }
  });
});

router.get('/details/:id', (request, response) => {
  if (!request.params.id) {
    response.status(400).send({ err: 'Id missing from request' });
  } else {
    fs.readFile(`${dataPath}/${request.params.id}.json`, 'utf8', (err, data) => {
      if (!err) {
        response.status(200).send(JSON.parse(data));
      } else {
        response.status(404).send({ err: 'No data found!' });
      }
    });
  }
});

router.post('/add', (request, response) => {
  if (!request.body.title || !request.body.description || !request.body.date) {
    response.status(400).send({ err: 'All mandatory attributes not provided' });
  }
  const id = uuid.v1();
  let jobData = {
    ...request.body,
    id,
    status: 'Active',
  };
  fs.readFile(`${dataPath}/all-jobs.json`, 'utf8', (error, data) => {
    if (!error) {
      const jobResponse = JSON.parse(data);
      jobResponse.push(jobData);
      fs.writeFile(`${dataPath}/all-jobs.json`, JSON.stringify(jobResponse), (error, data) => {});
      jobData = {
        ...jobData,
        attachments: [
          {
            name: 'SampleTile.jpg',
            downloadUrl: 'download-url-1',
          },
          {
            name: 'Query.pdf',
            downloadUrl: 'download-url-2',
          },
        ],
      };
      fs.writeFile(`${dataPath}/${id}.json`, JSON.stringify(jobData), (error, data) => {
        response.status(200).send(jobData);
      });
    } else {
      response.status(500).send({ err: 'Request failed' });
    }
  });
});

module.exports = router;
