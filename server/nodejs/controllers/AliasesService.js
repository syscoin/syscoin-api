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


  aliasexists: function(args, res, next) {
    var argList = [{ prop: "aliasname" }];


    var cb = function(err, result, resHeaders) {
      res.setHeader('Content-Type', 'application/json');

      var jsonObject = {
            aliasName: args.aliasname.value,
            success: false
      }

      if (err) {
          return res.end(JSON.stringify(jsonObject));
      }

      jsonObject.success = true;
      commonUtils.log('Get alias exists value ', result, 'aliasexists');
      res.end(JSON.stringify(jsonObject));
    };

    var arr = varUtils.getArgsArr(argList, args, 'GET', cb);
    syscoinClient.aliasInfo.apply(syscoinClient, arr);
  },

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