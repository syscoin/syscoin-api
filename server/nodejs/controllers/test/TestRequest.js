'use strict';
const app = require('../../index').app;
const chai = require("chai"), chaiHttp = require("chai-http");
chai.use(chaiHttp);

const requester = chai.request(app).keepOpen();

module.exports = {
  request: function (httpMethod, path, queryParams, authToken) {
    let request
    switch (httpMethod) {
      case 'GET':
        request = requester.get('/' + path);
        break;
      case 'POST':
        request = requester.post('/' + path);
        break;
      case 'PUT':
        request = requester.put('/' + path);
        break;
    }
    if (queryParams) {
      request.query(queryParams);
    }
    request.set({ 'token': authToken, 'content-type': 'application/json' })
    return request;
  }
}