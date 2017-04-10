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

function verifyMessageId(msgId) {
  expect(msgId.length).to.equal(16);
}

module.exports.verifySyscoinAddress = verifySyscoinAddress;
module.exports.verifyTransactionId = verifyTransactionId;
module.exports.verifyAliasNewTransactionId = verifyAliasNewTransactionId;
module.exports.verifyMessageId = verifyMessageId;