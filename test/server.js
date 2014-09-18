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

    describe('GET /rpc/hello', function() {
        it('should return a simple message saying hello', function(done) {
            var vars = {};

            request(server)
                .get('/rpc/hello')
                .end(function(err, res) {
                    if (err) return done(err);

                    expect(res.body).to.have.property('message');
                    done();
                });
        });
    });

    describe('POST /rpc/getinfo', function() {
        it('should return daemon wallet info', function(done) {

            request(server)
                .post('/rpc/getinfo')
                .end(function(err, res) {
                    if (err) return done(err);

                    expect(res.body).to.have.property('balance');
                    done();
                });
        });
    });

    describe('POST /rpc/addnode', function() {
        it('should return a blank response', function(done) {
            var urlVars = {
                node: "127.0.0.5",
                method: "add"
            };

            request(server)
                .post('/rpc/addnode')
                .send(urlVars)
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);

                    done();
                });
        });
    });

    describe.only('POST /rpc/aliasactivate', function() {
        it('should return a blank response', function(done) {
            var urlVars = {
                aliasName: "testalias",
                guid: "abc12345",
                value: "test"
            };

            request(server)
                .post('/rpc/aliasactivate')
                .send(urlVars)
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);

                    console.log(res.body);
                    done();
                });
        });
    });
});
