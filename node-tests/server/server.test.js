const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;


describe('Server Test', () => {
    describe('GET /', () => {
        it('should return a page not found response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect(res => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })
                .end(done);
        });
    });

    describe('GET /users', () => {
        it('should return an array of users with "Mark Kewley" in the array', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect(res => {
                    expect(res.body).toInclude({
                        name: 'Mark Kewley'
                    })
                })
                .end(done);
        });
    });
});
