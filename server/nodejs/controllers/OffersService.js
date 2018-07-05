const syscoinClient = require('../index').syscoinClient;
const methodGenerator = require('./util/methodGenerator');

module.exports = {

  offerinfo: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'guid' }
  ], syscoinClient.offerInfo, 'offerinfo', 'GET'),

  offerlink: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'alias' },
    { prop: 'guid' },
    { prop: 'commission' },
    { prop: 'description' },
    { prop: 'witness' }
  ], syscoinClient.offerLink, 'offerlink', 'POST'),

  offernew: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'alias' },
    { prop: 'category' },
    { prop: 'title' },
    { prop: 'quantity' },
    { prop: 'price' },
    { prop: 'description' },
    { prop: 'currency' },
    { prop: 'cert_guid' },
    { prop: 'payment_options' },
    { prop: 'privatevalue' },
    { prop: 'units' },
    { prop: 'offertype' },
    { prop: 'auction_expires' },
    { prop: 'auction_reserve' },
    { prop: 'auction_require_witness' },
    { prop: 'auction_deposit' },
    { prop: 'witness' }
  ], syscoinClient.offerNew, 'offernew', 'POST'),

  offerupdate: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'alias' },
    { prop: 'guid' },
    { prop: 'category' },
    { prop: 'title' },
    { prop: 'quantity' },
    { prop: 'price' },
    { prop: 'description' },
    { prop: 'currency' },
    { prop: 'privatevalue' },
    { prop: 'cert_guid' },
    { prop: 'commission' },
    { prop: 'payment_options' },
    { prop: 'offer_type' },
    { prop: 'auction_expires' },
    { prop: 'auction_reserve' },
    { prop: 'auction_require_witness' },
    { prop: 'auction_deposit' },
    { prop: 'witness' }
  ], syscoinClient.offerUpdate, 'offerupdate', 'POST')

};