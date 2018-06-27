const syscoinClient = require('../index').syscoinClient;
const DataType = require('./util/varUtils').DataType;
const methodGenerator = require('./util/methodGenerator');

module.exports = {
  assetallocationcollectinterest: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'asset' },
    { prop: 'alias' },
    { prop: 'witness' }
  ], syscoinClient.assetAllocationCollectInterest, 'assetallocationcollectinterest', 'POST'),

  assetinfo: methodGenerator.generateGenericSyscoinMethod([
    { prop: "asset" },
    { prop: "getinputs", defaultValue: true }
  ], syscoinClient.assetInfo, 'assetinfo', 'GET'),

  assetsend: methodGenerator.generateGenericSyscoinMethod([
    { prop: "asset" },
    { prop: "aliasfrom" },
    { prop: "amounts" },
    { prop: "memo" },
    { prop: "witness" }
  ], syscoinClient.assetSend, 'assetsend', 'POST'),

  assetallocationinfo: methodGenerator.generateGenericSyscoinMethod([
    { prop: "asset" },
    { prop: "alias" },
    { prop: "getinputs", defaultValue: true }
  ], syscoinClient.assetAllocationInfo, 'assetallocationinfo', 'GET'),

  assetallocationsend: methodGenerator.generateGenericSyscoinMethod([
    { prop: "asset" },
    { prop: "aliasfrom" },
    { prop: "amounts" },
    { prop: "memo" },
    { prop: "witness" }
  ], syscoinClient.assetAllocationSend, 'assetallocationsend', 'POST'),

  assetallocationsenderstatus: methodGenerator.generateGenericSyscoinMethod([
    { prop: "asset" },
    { prop: "sender" },
    { prop: "txid" }
  ], syscoinClient.assetAllocationSenderStatus, 'assetallocationsenderstatus', 'GET'),

  assettransfer: methodGenerator.generateGenericSyscoinMethod([
    { prop: "asset" },
    { prop: "alias" },
    { prop: "certkey" },
    { prop: "witness" }
  ], syscoinClient.assetTransfer, 'assettransfer', 'POST'),

  assetupdate: methodGenerator.generateGenericSyscoinMethod([
    { prop: "asset", },
    { prop: "publicvalue", },
    { prop: "category", },
    { prop: "supply", syscoinType: DataType.STRING },
    { prop: "interest_rate", },
    { prop: "witness", }
  ], syscoinClient.assetUpdate, 'assetupdate', 'POST'),

  assetnew: methodGenerator.generateGenericSyscoinMethod([
    { prop: "symbol", },
    { prop: "alias", },
    { prop: "publicvalue", },
    { prop: "category", },
    { prop: "precision", },
    { prop: "use_inputranges", },
    { prop: "supply", },
    { prop: "max_supply", syscoinType: DataType.STRING },
    { prop: "interest_rate", },
    { prop: "can_adjust_interest_rate", },
    { prop: "witness", }
  ], syscoinClient.assetNew, 'assetnew', 'POST')
};