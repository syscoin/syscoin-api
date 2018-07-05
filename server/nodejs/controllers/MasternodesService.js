const syscoinClient = require('../index').syscoinClient;
const methodGenerator = require('./util/methodGenerator');

exports.sentinelping = methodGenerator.generateGenericSyscoinMethod([
    { prop: "version" }
], syscoinClient.sentinelPing, 'sentinelping', 'GET');

exports.voteraw = methodGenerator.generateGenericSyscoinMethod([
    { prop: "masternode-tx-hash" },
    { prop: "masternode-tx-index" },
    { prop: "governance-hash" },
    { prop: "vote-signal" },
    { prop: "vote-outcome" },
    { prop: "time" },
    { prop: "vote-sig" }
], syscoinClient.voteRaw, 'voteraw', 'POST');

exports.privatesend = methodGenerator.generateGenericSyscoinMethod([
    { prop: "command" }
], syscoinClient.privateSend, 'privatesend', 'GET');


exports.importelectrumwallet = methodGenerator.generateGenericSyscoinMethod([
    { prop: "filename" },
    { prop: "index", defaultValue: 0 }
], syscoinClient.importElectrumWallet, 'importelectrumwallet', 'GET');
