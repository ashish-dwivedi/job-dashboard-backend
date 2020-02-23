const app = require('../app/app');
const request = require('supertest');
const { header } = require('../config/config');

describe('Job apis', () => {
  afterEach(function(done) {
    app.close();
    done();
  });

  it('should get all jobs', async () => {
    const response = await request(app)
      .get('/job/all')
      .set(header);
    expect(response.statusCode).toEqual(200);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('title');
    expect(response.body[0]).toHaveProperty('description');
    expect(response.body[0]).toHaveProperty('date');
    expect(response.body[0]).toHaveProperty('status');
    expect(response.body[0]).toHaveProperty('assignee');
  });

  it('should get details of a job id', async () => {
    const response = await request(app)
      .get('/job/details/123')
      .set(header);
    expect(response.statusCode).toEqual(200);
    expect(response.body.id).toBe('123');
  });

  it('should throw 404 for an invalid job id', async () => {
    const response = await request(app)
      .get('/job/details/fjdnfdgjj')
      .set(header);
    expect(response.statusCode).toEqual(404);
  });

  it('should add new job and return the same object with an id and status', async () => {
    const newJob = {
      title: 'This new title',
      description: 'Description',
      date: '2020-02-19',
      assignee: {
        name: 'Ashish',
        role: 'Job Handler',
        email: 'ashish@dwivedi.de',
      },
    };
    const response = await request(app)
      .post('/job/add')
      .send(newJob)
      .set(header);
    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('Active');
    expect(response.body.title).toBe(newJob.title);
  });
});
