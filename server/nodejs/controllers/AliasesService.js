const syscoinClient = require('../index').syscoinClient;
const methodGenerator = require('./util/methodGenerator');

module.exports = {
  aliasbalance: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'alias' }
  ], syscoinClient.aliasBalance, 'aliasbalance', 'GET'),

  aliasinfo: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'aliasname' }
  ], syscoinClient.aliasInfo, 'aliasinfo', 'GET'),

  aliasnew: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'aliasname' },
    { prop: 'publicvalue' },
    { prop: 'accept_transfers_flags', defaultValue: 3 },
    { prop: 'expire_timestamp', defaultValue: 3600 },
    { prop: 'address' },
    { prop: 'encryption_privatekey' },
    { prop: 'encryption_publickey' },
    { prop: 'witness' }
  ], syscoinClient.aliasNew, 'aliasnew', 'POST'),

  aliaspay: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'aliasfrom' },
    { prop: 'amounts' },
    { prop: 'instantsend' },
    { prop: 'subtractfeefromamount' }
  ], syscoinClient.aliasPay, 'aliaspay', 'POST'),

  aliasupdate: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'aliasname' },
    { prop: 'publicvalue' },
    { prop: 'address' },
    { prop: 'accept_transfers_flags', defaultValue: 3 },
    { prop: 'expire_timestamp', defaultValue: 3600 },
    { prop: 'encryption_privatekey' },
    { prop: 'encryption_publickey' },
    { prop: 'witness' }
  ], syscoinClient.aliasUpdate, 'aliasupdate', 'POST'),

  aliaswhitelist: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'aliasname' }
  ], syscoinClient.aliasWhitelist, 'aliaswhitelist', 'GET'),

  aliasclearwhitelist: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'owneralias', },
    { prop: 'witness', }
  ], syscoinClient.aliasClearWhitelist, 'aliasclearwhitelist', 'POST'),

  aliasupdatewhitelist: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'owneralias' },
    { prop: 'entries' },
    { prop: 'witness', defaultValue: '' }
  ], syscoinClient.aliasUpdateWhitelist, 'aliasupdatewhitelist', 'POST'),

  syscointxfund: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'hexstring' },
    { prop: 'addresses', asJsonObject: true }
  ], syscoinClient.syscoinTxFund, 'syscointxfund', 'POST'),

  aliasaddscript: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'script' }
  ], syscoinClient.aliasAddScript, 'aliasaddscript', 'POST')
};