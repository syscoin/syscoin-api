const syscoinClient = require('../index').syscoinClient;
const methodGenerator = require('./util/methodGenerator');

module.exports = {
  certinfo: methodGenerator.generateGenericSyscoinMethod([
    { prop: "guid" }
  ], syscoinClient.certInfo, 'certinfo', 'GET'),

  certnew: methodGenerator.generateGenericSyscoinMethod([
    { prop: "alias" },
    { prop: "title" },
    { prop: "publicvalue" },
    { prop: "category", defaultValue: "certificates" },
    { prop: "witness" }
  ], syscoinClient.certNew, 'certnew', 'POST'),

  certtransfer: methodGenerator.generateGenericSyscoinMethod([
    { prop: "guid" },
    { prop: "alias" },
    { prop: "publicvalue" },
    { prop: "accessflags", },
    { prop: "witness" }
  ], syscoinClient.certTransfer, 'certtransfer', 'POST'),

  certupdate: methodGenerator.generateGenericSyscoinMethod([
    { prop: "guid" },
    { prop: "title" },
    { prop: "publicvalue" },
    { prop: "category", defaultValue: "certificates" },
    { prop: "witness" }
  ], syscoinClient.certUpdate, 'certupdate', 'POST')
};