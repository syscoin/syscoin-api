'use strict';
const expect = require('chai').expect;
const request = require('./TestRequest').request;
const AuthHelper = require('../spec/helper/authHelper');
const Config = require('./config');

let testAuthToken;

describe('Tests for Offers Service API', function () {
  before(function (done) {
    let requestOptions = AuthHelper.requestOptions();
    if (requestOptions) {
      testAuthToken = requestOptions.headers.token;
    }
    done();
  });

  describe('offerinfo', function () {
    it('Show offer details', function (done) {
      const params = {
        guid: Config.TEST_EXISTING_OFFER_GUID
      };

      request('GET', 'offerinfo', params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header('content-type', 'application/json');
        expect(res).to.be.json;
        done();
      });
    });
  });

  // describe("offerlink", function () {
  //   it("Link offer", function (done) {
  //     const body = {
  //       alias: Config.TEST_EXISTING_ALIAS3,
  //       guid: Config.TEST_EXISTING_OFFER_GUID,
  //       commission: 0,
  //       description: "link offer description",
  //       witness: ""
  //     };

  //     request("POST", "offerlink", null, testAuthToken, body).end(function (err, res) {
  //       expect(err).to.be.null;
  //       expect(res).to.have.status(200);
  //       expect(res).to.have.header("content-type", "application/json");
  //       expect(res).to.be.json;
  //       //TO-DO: response schema validation
  //       done();
  //     });
  //   });
  // });

  describe('offernew', function () {
    it('Creating new offer', function (done) {
      const body = {
        'alias': Config.TEST_EXISTING_ALIAS1,
        'category': 'For Sale > Auto/Vehicle',
        'title': 'Fast racing car',
        'quantity': 1,
        'price': 1999,
        'description': '{"description":"Fast racing car detailed description","images":["https://i.imgur.com/BHmFf07.jpg"]}',
        'currency': 'SYS',
        'offertype': 'BUYNOW',
        'privatevalue': false,
        'auction_expires': 0,
        'units': 1,
        'auction_reserve': 0,
        'auction_deposit': 0,
        'cert_guid': '',
        'auction_require_witness': false,
        'payment_options': 'SYS',
        'witness': ''
      };

      request('POST', 'offernew', null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header('content-type', 'application/json');
        expect(res).to.be.json;
        //TO-DO: response schema validation
        done();
      });
    });
  });

  describe('offerupdate', function () {
    it('Creating new offer', function (done) {
      const body = {
        'alias': Config.TEST_EXISTING_ALIAS1,
        'guid': Config.TEST_EXISTING_OFFER_GUID,
        'category': 'For Sale > Auto/Vehicle',
        'title': 'Updated Fast racing car',
        'quantity': 1,
        'price': 1999,
        'description': '{"description":"Fast racing car detailed updated description","images":["https://i.imgur.com/BHmFf07.jpg"]}',
        'currency': 'SYS',
        'offer_type': 'BUYNOW',
        'privatevalue': false,
        'auction_expires': 0,
        'units': 1,
        'auction_reserve': 0,
        'auction_deposit': 0,
        'cert_guid': '',
        'auction_require_witness': false,
        'payment_options': 'SYS',
        'witness': '',
        'commission': 0
      };

      request('POST', 'offerupdate', null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header('content-type', 'application/json');
        expect(res).to.be.json;
        //TO-DO: response schema validation
        done();
      });
    });
  });



});
