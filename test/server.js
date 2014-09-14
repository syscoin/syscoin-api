var expect = require('chai').expect;
var request = require('supertest');
var assert = require('assert');
var config = require('../config');

// bind supertest to running instance of the the server
var server = require('../server');

describe('Routing', function() {
    var server = require('../server');

    describe('SyscoinAPI', function() {
        it('should return a simple message saying hello', function(done) {
            var vars = {};

            request(server)
                .get('/api/hello')
                .end(function(err, res) {
                    if (err) return done(err);

                    expect(res.body).to.have.property('message');
                    done();
                });
        });

        /*it('should correctly update an existing account', function(done){
            var body = {
                firstName: 'JP',
                lastName: 'Berd'
            };
            request(url)
                .put('/api/profiles/vgheri')
                .send(body)
                .expect('Content-Type', /json/)
                .expect(200) //Status code
                .end(function(err,res) {
                    if (err) {
                        throw err;
                    }
                    // Should.js fluent syntax applied
                    res.body.should.have.property('_id');
                    res.body.firstName.should.equal('JP');
                    res.body.lastName.should.equal('Berd');
                    res.body.creationDate.should.not.equal(null);
                    done();
                });
        });*/
    });
});