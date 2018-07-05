'use strict';
const expect = require('chai').expect;
const request = require('./TestRequest').request;
const Hashes   = require('jshashes');
const Config = require('./config');

describe('Tests for Blockmarket Service API', function () {
  
  describe('login', function () {
    it('Successful login', function (done) {
      const params = {
        auth: new Hashes.SHA1().hex(Config.TEST_CREDENTIALS_USERNAME + Config.TEST_CREDENTIALS_PASSWORD)
      };

      request('GET', 'login', params, null).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header('content-type', 'application/json');
        expect(res).to.be.json;
        let r = JSON.parse(res.text);
        expect(r.token).to.exist;
        done();
      });
    });

    it('Login attempt with invalid credentials', function (done) {
      const params = {
        auth: new Hashes.SHA1().hex('invalid' + 'invalid')
      };

      request('GET', 'login', params, null).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(401);
        expect(res).to.have.header('content-type', 'application/json');
        expect(res).to.be.json;
        done();
      });
    });

    it('Login attempt with no auth hash provided', function (done) {
      request('GET', 'login', null, null).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(400);
        done();
      });
    });
  });

});
