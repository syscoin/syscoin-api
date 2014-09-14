var should = require('should');
var assert = require('assert');
var request = require('supertest');
var config = require('../config');

describe('Routing', function() {
    var url = config.host + ':' + config.port;

    describe('SyscoinAPI', function() {
        it('should return a simple message saying hello', function(done) {
            var vars = {
            };

            request(url)
                .get('/api/hello2')
                .end(function(err, res) {
                    if (err) {
                        throw err;
                    }

                    res.body.should.have.property('message');
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