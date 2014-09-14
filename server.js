// server.js

var express    = require('express'); 		// call express
var app        = module.exports = express(); 				// define our app using express
var bodyParser = require('body-parser');
var syscoin = require('syscoin');

app.use(bodyParser());

//load external configuration
var config = require('./config');

//ENABLE CORS
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

//create syscoin client for RPC commands
var sysclient = new syscoin.Client({
    host: config.syscoin.host,
    port: config.syscoin.port,
    user: config.syscoin.user,
    pass: config.syscoin.password,
    timeout: config.syscoin.timeout
});


// ROUTES FOR OUR API
// =============================================================================
// get an instance of the express Router
var router = express.Router({
  caseSensitive: false
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/hello', function(req, res, next) {
    res.json({ message: 'hooray! welcome to our api!' });
    next();
});


// GENERIC WALLET FUNCTIONS
// =============================================================================
router.get('/addmultisigaddress', function(req, res, next) {
    console.log('addmultisigaddress(' + req.query.nrequired + ', ' + req.query.multisigArr + ')');
    sysclient.addmultisigaddress(req.query.nrequired, req.query.multisigArr, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/addnode', function(req, res, next) {
    console.log('addnode(' + req.query.node + ', ' + req.query.method + ')');
    sysclient.addnode(req.query.node, req.query.method, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

// NAME ALIAS FUNCTIONS
// =============================================================================
router.get('/aliasactivate', function(req, res, next) {
    console.log('aliasactivate(' + req.query.aliasName + ', ' + req.query.guid + ', ' + req.query.tx + ', ' + req.query.value + ')');
    sysclient.aliasactivate(req.query.aliasName, req.query.guid, req.query.tx, req.query.value, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/aliasclean', function(req, res, next) {
    console.log('aliasclean()');
    sysclient.aliasclean(function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/aliasfilter', function(req, res, next) {
    console.log('aliasfilter(' + req.query.regexp + ', ' + req.query.maxage + ', ' + req.query.from + ', ' + req.query.nb + ', ' + req.query.stat + ')');
    sysclient.aliasfilter(req.query.regexp, req.query.maxage, req.query.from, req.query.nb, req.query.stat, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/aliashistory', function(req, res, next) {
    console.log('aliashistory(' + req.query.aliasName + ')');
    sysclient.aliashistory(req.query.aliasName, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/aliasinfo', function(req, res, next) {
    console.log('aliasinfo(' + req.query.aliasName + ')');
    sysclient.aliasinfo(req.query.aliasInfo, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/aliaslist', function(req, res, next) {
    console.log('aliaslist(' + req.query.aliasNameFilter + ')');
    sysclient.aliaslist(req.query.aliasNameFilter, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/aliasnew', function(req, res, next) {
    console.log('aliasnew(' + req.query.aliasName + ')');
    sysclient.aliasnew(req.query.aliasName, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/aliasscan', function(req, res, next) {
    console.log('aliasscan(' + req.query.startAliasName + ', ' + req.query.maxReturned + ')');
    sysclient.aliasscan(req.query.startAliasName, req.query.maxReturned, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/aliasupdate', function(req, res, next) {
    console.log('aliasupdate(' + req.query.aliasName + ', ' + req.query.aliasValue + ', ' + req.query.toAddress + ')');
    sysclient.aliasupdate(req.query.aliasName, req.query.aliasValue, req.query.toAddress, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});


// CERTIFICATE MANAGEMENT FUNCTIONS
// =============================================================================
router.get('/certissuerinfo', function(req, res, next) {
    console.log('certissuerinfo(' + req.query.guid + ')');
    sysclient.certissuerinfo(req.query.guid, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/certissueractivate', function(req, res, next) {
    console.log('certissueractivate(' + req.query.guid + ', ' + req.query.tx + ')');
    sysclient.certissueractivate(req.query.guid, req.query.tx, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/certissuer_clean', function(req, res, next) {
    console.log('certissuer_clean()');
    sysclient.certissuer_clean(function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/certissuerfilter', function(req, res, next) {
    console.log('certissuerfilter(' + req.query.regexp + ', ' + req.query.maxage + ', ' + req.query.from + ', ' + req.query.nb + ', ' + req.query.stat + ')');
    sysclient.certissuerfilter(req.query.regexp, req.query.maxage, req.query.from, req.query.nb, req.query.stat, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/certissuerhistory', function(req, res, next) {
    console.log('certissuerhistory(' + req.query.certIssuerName + ')');
    sysclient.certissuerhistory(req.query.certIssuerName, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/certissuerinfo', function(req, res, next) {
    console.log('certissuerinfo(' + req.query.guid + ')');
    sysclient.certissuerinfo(req.query.guid, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/certissuerlist', function(req, res, next) {
    console.log('certissuerlist(' + req.query.certIssuerNameFilter + ')');
    sysclient.certissuerlist(req.query.certIssuerNameFilter, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/certissuernew', function(req, res, next) {
    console.log('certissuernew(' + req.query.certIssuerName + ', ' + req.query.certIssuerData + ')');
    sysclient.certissuernew(req.query.certIssuerName, req.query.certIssuerData, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/certissuerscan', function(req, res, next) {
    console.log('certissuerscan(' + req.query.startCertIssuerName + ', ' + req.query.maxReturned + ')');
    sysclient.certissuerscan(req.query.startCertIssuerName, req.query.maxReturned, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/certissuerupdate', function(req, res, next) {
    console.log('certissuerupdate(' + req.query.guid + ', ' + req.query.certIssuerName + ', ' + req.query.certIssuerData + ')');
    sysclient.certissuerupdate(req.query.guid, req.query.certIssuerName, req.query.certIssuerData, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/certnew', function(req, res, next) {
    console.log('certnew(' + req.query.issuerGuid + ', ' + req.query.toAddress + ', ' + req.query.certTitle + ', ' + req.query.certData + ')');
    sysclient.certnew(req.query.issuerGuid, req.query.toAddress, req.query.certTitle, req.query.certData, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/certtransfer', function(req, res, next) {
    console.log('certtransfer(' + req.query.certGuid + ', ' + req.query.toAddress + ')');
    sysclient.certtransfer(req.query.certGuid, req.query.toAddress, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

// DATA ALIAS FUNCTIONS
// =============================================================================
router.get('/dataactivate', function(req, res, next) {
    console.log('dataactivate(' + req.query.dataName + ', ' + req.query.guid + ', ' + req.query.tx + ', ' + req.query.filename + ', ' + req.query.dataContent + ')');
    sysclient.dataactivate(req.query.dataName, req.query.guid, req.query.tx, req.query.filename, req.query.dataContent, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

/*
MISSING FROM DAEMON
router.get('/dataclean', function(req, res, next) {
    console.log('aliasclean()');
    sysclient.aliasclean(function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});
*/

/*
MISSING FROM DAEMON
router.get('/datafilter', function(req, res, next) {
    console.log('datafilter(' + req.query.regexp + ', ' + req.query.maxage + ', ' + req.query.from + ', ' + req.query.nb + ', ' + req.query.stat + ')');
    sysclient.datafilter(req.query.regexp, req.query.maxage, req.query.from, req.query.nb, req.query.stat, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});
*/

/*
INCORRECT IN DAEMON - returns output related to aliases, not data.
router.get('/datahistory', function(req, res, next) {
    console.log('datahistory(' + req.query.dataName + ')');
    sysclient.datahistory(req.query.dataName, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});
*/

/*
INCORRECT IN DAEMON - returns output related to aliases, not data.
router.get('/datainfo', function(req, res, next) {
    console.log('datainfo(' + req.query.dataName + ')');
    sysclient.datainfo(req.query.dataName, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});
*/

/*
 INCORRECT IN DAEMON - returns output related to aliases, not data.
router.get('/datalist', function(req, res, next) {
    console.log('datalist(' + req.query.dataNameFilter + ')');
    sysclient.datalist(req.query.dataNameFilter, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});
*/

router.get('/datanew', function(req, res, next) {
    console.log('aliasnew(' + req.query.dataName + ')');
    sysclient.aliasnew(req.query.dataName, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

/*
 MISSING FROM DAEMON
router.get('/datascan', function(req, res, next) {
    console.log('aliasscan(' + req.query.startAliasName + ', ' + req.query.maxReturned + ')');
    sysclient.aliasscan(req.query.startAliasName, req.query.maxReturned, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});
*/

router.get('/dataupdate', function(req, res, next) {
    console.log('dataupdate(' + req.query.dataName + ', ' + req.query.filename + ', ' + req.query.dataContent + ', ' + req.query.toAddress + ')');
    sysclient.dataupdate(req.query.aliasName, req.query.filename, req.query.dataContent, req.query.toAddress, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/dumpdata', function(req, res, next) {
    console.log('dumpdata(' + req.query.dataName + ')');
    sysclient.dumpdata(req.query.dataName, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

// MARKETPLACE/OFFER FUNCTIONS
// =============================================================================
router.get('/offeraccept', function(req, res, next) {
    console.log('offeraccept(' + req.query.guid + ', ' + req.query.quantity + ')');
    sysclient.offeraccept(req.query.guid, req.query.quantity, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/offeractivate', function(req, res, next) {
    console.log('offeractivate(' + req.query.guid + ', ' + req.query.tx + ')');
    sysclient.offeractivate(req.query.guid, req.query.tx, req.query.value, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/offer_clean', function(req, res, next) {
    console.log('offer_clean()');
    sysclient.offer_clean(function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/offerfilter', function(req, res, next) {
    console.log('offerfilter(' + req.query.regexp + ', ' + req.query.maxage + ', ' + req.query.from + ', ' + req.query.nb + ', ' + req.query.stat + ')');
    sysclient.offerfilter(req.query.regexp, req.query.maxage, req.query.from, req.query.nb, req.query.stat, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/offerhistory', function(req, res, next) {
    console.log('offerhistory(' + req.query.offerGuid + ')');
    sysclient.offerhistory(req.query.offerGuid, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/offerinfo', function(req, res, next) {
    console.log('offerinfo(' + req.query.offerGuid + ')');
    sysclient.offerinfo(req.query.offerGuid, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/offerlist', function(req, res, next) {
    console.log('offerlist(' + req.query.offerNameFilter + ')');
    sysclient.offerlist(req.query.offerNameFilter, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/offernew', function(req, res, next) {
    console.log('offernew('  + req.query.offerAddress + ', ' + req.query.category + ', ' + req.query.title + ', ' + req.query.quantity + ', ' + req.query.price + ', ' + req.query.description + ')');
    sysclient.offernew(req.query.offerAddress, req.query.category, req.query.title, req.query.quantity, req.query.price, req.query.description, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/offerpay', function(req, res, next) {
    console.log('offerpay(' + req.query.offerAcceptGuid + ', ' + req.query.offerAcceptTx + ', ' + req.query.messageToSeller + ')');
    sysclient.offerpay(req.query.offerAcceptGuid, req.query.offerAcceptTx, req.query.messageToSeller, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/offerscan', function(req, res, next) {
    console.log('offerscan(' + req.query.startOfferGuid + ', ' + req.query.maxReturned + ')');
    sysclient.offerscan(req.query.startOfferGuid, req.query.maxReturned, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.get('/offerupdate', function(req, res, next) {
    console.log('offerupdate(' + req.query.offerGuid + ', ' + req.query.category + ', ' + req.query.title + ', ' + req.query.quantity + ', ' + req.query.price + ', ' + req.query.description + ')');
    sysclient.offerupdate(req.query.offerGuid, req.query.category, req.query.title, req.query.quantity, req.query.price, req.query.description, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});


// GENERAL FUNCTIONS
// =============================================================================
function handleError(err, req, res, next) {
  res.json({ error : err });
  console.log(err);
  return next();
}


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(config.port);
console.log('Magic happens on port ' + config.port);
