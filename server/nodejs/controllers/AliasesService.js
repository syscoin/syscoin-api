const syscoinClient = require('../index').syscoinClient;
const methodGenerator = require('./util/methodGenerator');
const varUtils = require('./util/varUtils');
const commonUtils = require('./util/commonUtils');



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

  syscointxfund: function(args, res) {
    var argList = [
      { prop: 'hexstring' },
      { prop: 'addresses' }
    ];
      
    var cb = function(err, result, resHeaders) {
      res.setHeader('Content-Type', 'application/json');
  
      if (err) {
        return commonUtils.reportError(res, err);
      }
  
      commonUtils.log('Syscoin TX fund:', result, "syscointxfund");
      res.end(JSON.stringify(result));
    };
    // Convert the Addresses array to string
    if(args && args.request && args.request.value && args.request.value['addresses']) {
      var actualAddresses = args.request.value['addresses']
      var addressObjectForCore = { addresses: actualAddresses };
      args.request.value['addresses'] = addressObjectForCore
    } else {
      console.error("ERROR: No value defined in request for 'addresses', this is a required param");
    }
    
    var arr = varUtils.getArgsArr(argList, args, "POST", cb); 
    syscoinClient.syscoinTxFund.apply(syscoinClient, arr);
  },

  aliasaddscript: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'script' }
  ], syscoinClient.aliasAddScript, 'aliasaddscript', 'POST')
};