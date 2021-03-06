const request = require('supertest');

const server = require('./server');

describe('Testing Environment', () => {
  it('sets the environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('Server is Running', () => {
    it('should return 200 ', () => {
      return request(server)
        .get('/')
        .expect(200);
    });
    it('should return an object', () => {
      const expected = {};
      return request(server)
        .get('/')
        .then(res => {
          expect(res.body).toEqual(expected);
        });
    });
  });
});
