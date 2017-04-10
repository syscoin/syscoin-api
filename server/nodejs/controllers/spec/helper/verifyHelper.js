var expect  = require("chai").expect;

function verifySyscoinAddress(address) {
  expect(address.length).to.equal(34);
}

function verifyTransactionId(txid) {
  expect(txid.length).to.equal(64);
}

function verifyAliasNewTransactionId(txid) {
  expect(txid.length).to.equal(66);
}

module.exports.verifySyscoinAddress = verifySyscoinAddress;
module.exports.verifyTransactionId = verifyTransactionId;
module.exports.verifyAliasNewTransactionId = verifyAliasNewTransactionId;