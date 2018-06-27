const syscoinClient = require('../index').syscoinClient;
const varUtils = require('./util/varUtils');
const commonUtils = require('./util/commonUtils');
const methodGenerator = require('./util/methodGenerator');

module.exports = {
  escrowacknowledge: methodGenerator.generateGenericSyscoinMethod([
    { prop: "escrowguid" },
    { prop: "witness" }
  ], syscoinClient.escrowAcknowledge, 'escrowacknowledge', 'POST'),

  escrowcompleterefund: methodGenerator.generateGenericSyscoinMethod([
    { prop: "escrowguid" },
    { prop: "rawtx" },
    { prop: "witness" }
  ], syscoinClient.escrowCompleteRefund, 'escrowcompleterefund', 'POST'),

  escrowcompleterelease: methodGenerator.generateGenericSyscoinMethod([
    { prop: "escrowguid" },
    { prop: "rawtx" },
    { prop: "witness" }
  ], syscoinClient.escrowCompleteRelease, 'escrowcompleterelease', 'POST'),

  escrowfeedback: methodGenerator.generateGenericSyscoinMethod([
    { prop: "escrowguid" },
    { prop: "userfrom" },
    { prop: "feedback" },
    { prop: "rating" },
    { prop: "userto" },
    { prop: "witness" }
  ], syscoinClient.escrowFeedback, 'escrowfeedback', 'POST'),

  /*
  * This method below (escrowlist) is not part of API specs. All requests to it generate 404 error.
  * It's most likely deprecated
  */
  escrowlist: function (args, res, next) {
    var argList = [
      { prop: "buyerAliases", defaultValue: [] },
      { prop: "sellerAliases", defaultValue: [] },
      { prop: "arbiterAliases", defaultValue: [] },
      { prop: "escrow", defaultValue: "" },
      { prop: "count", defaultValue: "10" },
      { prop: "from", defaultValue: "0" }
    ];

    args.buyerAliases.value = varUtils.correctTypes(args.buyerAliases.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
    args.sellerAliases.value = varUtils.correctTypes(args.sellerAliases.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
    args.arbiterAliases.value = varUtils.correctTypes(args.arbiterAliases.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
    args.count.value = varUtils.correctTypes(args.count.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
    args.from.value = varUtils.correctTypes(args.from.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

    var cb = function (err, result, resHeaders) {
      res.setHeader('Content-Type', 'application/json');

      if (err) {
        return commonUtils.reportError(res, err);
      }

      console.log('Escrow list:', result);
      res.end(JSON.stringify(result));
    };

    var arr = varUtils.getArgsArr(argList, args, "GET", cb);
    syscoinClient.escrowList.apply(syscoinClient, arr);
  },

  escrownew: methodGenerator.generateGenericSyscoinMethod([
    { prop: "getamountandaddress" },
    { prop: "alias" },
    { prop: "arbiter_alias" },
    { prop: "offer" },
    { prop: "quantity" },
    { prop: "buynow" },
    { prop: "price_per_unit_in_payment_option" },
    { prop: "shipping_amount" },
    { prop: "network_fee" },
    { prop: "arbiter_fee", defaultValue: 0.005 },
    { prop: "witness_fee", defaultValue: 0 },
    { prop: "extTx" },
    { prop: "paymentoption", defaultValue: "SYS" },
    { prop: "bid_in_payment_option" },
    { prop: "bid_in_offer_currency" },
    { prop: "witness" }
  ], syscoinClient.escrowNew, 'escrownew', 'POST'),

  escrowrefund: methodGenerator.generateGenericSyscoinMethod([
    { prop: "escrowguid" },
    { prop: "userrole" },
    { prop: "rawtx" },
    { prop: "witness" }
  ], syscoinClient.escrowRefund, 'escrowrefund', 'POST'),

  escrowrelease: methodGenerator.generateGenericSyscoinMethod([
    { prop: "escrowguid" },
    { prop: "userrole" },
    { prop: "rawtx" },
    { prop: "witness" }
  ], syscoinClient.escrowRelease, 'escrowrelease', 'POST'),

  escrowbid: methodGenerator.generateGenericSyscoinMethod([
    { prop: "alias" },
    { prop: "escrow" },
    { prop: "bid_in_offer_currency" },
    { prop: "bid_in_payment_option" },
    { prop: "witness" }
  ], syscoinClient.escrowBid, 'escrowbid', 'POST'),

  escrowcreaterawtransaction: methodGenerator.generateGenericSyscoinMethod([
    { prop: "type" },
    { prop: "escrowguid" },
    { prop: "inputs" },
    { prop: "role" }
  ], syscoinClient.escrowCreateRawTransaction, 'escrowcreaterawtransaction', 'POST'),

  escrowinfo: methodGenerator.generateGenericSyscoinMethod([
    { prop: "escrowguid" }
  ], syscoinClient.escrowInfo, 'escrowinfo', 'GET')
};