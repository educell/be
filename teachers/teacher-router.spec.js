const request = require('supertest');

const server = require('../api/server');

describe('Teacher Router is Running', () => {
    it('should return 200 ', () => {
      return request(server)
        .get('/')
        .expect(200);
    })
})

describe('UnAuthorized', () => {
    it('should return 401 if user is not logged in ', () => {
      return request(server)
        .get('/teacher')
        .expect(401);
    })
})