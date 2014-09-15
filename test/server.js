var expect = require('chai').expect;
var request = require('supertest');
var assert = require('assert');
var config = require('../config');

// forefully disable logging
config.log.stdout.enabled = false;
config.log.file.enabled = false;

// bind supertest to running instance of the the server
var server = require('../server');

describe('SyscoinAPI', function() {
    var server = require('../server');

    describe('GET /api/hello', function() {
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
    });

    describe('POST /api/getinfo', function() {
        it('should return daemon wallet info', function(done) {

            request(server)
                .post('/api/getinfo')
                .end(function(err, res) {
                    if (err) return done(err);

                    expect(res.body).should.have.property('balance');
                    done();
                });
        });
    });

    describe('POST /api/addnode', function() {
        it('should return a blank response', function(done) {
            var urlVars = {
                node: "127.0.0.1",
                method: "add"
            };

            request(server)
                .post('/api/addnode')
                .send(urlVars)
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);

                    done();
                });
        });
    });
});


/*it('should return an error -4', function(done){
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