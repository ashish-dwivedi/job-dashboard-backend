const app = require('../app/app');
const request = require('supertest');
const { header } = require('../config/config');

describe('User api', () => {
  afterAll(function(done) {
    app.close();
    done();
  });

  it('should get all users', async () => {
    const res = await request(app)
      .get('/user/all')
      .set(header);
    expect(res.statusCode).toEqual(200);
    expect(res.body[0]).toHaveProperty('name');
    expect(res.body[0]).toHaveProperty('email');
    expect(res.body[0]).toHaveProperty('role');
    expect(res.body[0]).toHaveProperty('avatar');
  });
});
