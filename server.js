// server.js
var express    = require('express');
var app        = module.exports = express();
var bodyParser = require('body-parser');
var bunyan     = require('bunyan');

// load external configuration
var config = require('./config');

// initialize logger
var logStreams = [];
if (config.log.stdout.enabled)
  logStreams.push({level: config.log.stdout.level, stream: process.stdout});
if (config.log.file.enabled)
  logStreams.push({level: config.log.file.level, path: config.log.file.path});
var logger = bunyan.createLogger({
    name: 'syscoin',
    streams: logStreams
});

// load middleware
app.all('*', require('./middleware/requestId'));
app.all('*', require('./middleware/logging').attach(logger));
app.all('*', require('./middleware/logging').entry);
app.all('*', bodyParser());
app.all('*', require('./middleware/cors'));
app.all('*', require('./middleware/client')(config.syscoin));

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
router.post('/getinfo', function(req, res, next) {
    req.log.info('getInfo()');
    sysclient.getInfo(function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        req.log.info(JSON.stringify(result));
        res.json(result);
        next();
    });
});

router.post('/addnode', function(req, res, next) {
    req.log.info('addNode(' + req.query.node + ', ' + req.query.method + ')');
    sysclient.addNode(req.query.node, req.query.method, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

// NAME ALIAS FUNCTIONS
// =============================================================================
router.post('/aliasactivate', function(req, res, next) {
    //req.log.info('aliasactivate(' + req.query.aliasName + ', ' + req.query.guid + ', ' + req.query.tx + ', ' + req.query.value + ')');
    sysclient.aliasActivate(req.query.aliasName, req.query.guid, req.query.tx, req.query.value, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

/*router.post('/aliasclean', function(req, res, next) {
    req.log.info('aliasclean()');
    sysclient.aliasClean(function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});*/

router.post('/aliasfilter', function(req, res, next) {
    req.log.info('aliasfilter(' + req.query.regexp + ', ' + req.query.maxage + ', ' + req.query.from + ', ' + req.query.nb + ', ' + req.query.stat + ')');
    sysclient.aliasFilter(req.query.regexp, req.query.maxage, req.query.from, req.query.nb, req.query.stat, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/aliashistory', function(req, res, next) {
    req.log.info('aliashistory(' + req.query.aliasName + ')');
    sysclient.aliasHistory(req.query.aliasName, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/aliasinfo', function(req, res, next) {
    req.log.info('aliasinfo(' + req.query.aliasName + ')');
    sysclient.aliasInfo(req.query.aliasInfo, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/aliaslist', function(req, res, next) {
    req.log.info('aliaslist(' + req.query.aliasNameFilter + ')');
    sysclient.aliasList(req.query.aliasNameFilter, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/aliasnew', function(req, res, next) {
    req.log.info('aliasnew(' + req.query.aliasName + ')');
    sysclient.aliasNew(req.query.aliasName, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/aliasscan', function(req, res, next) {
    req.log.info('aliasscan(' + req.query.startAliasName + ', ' + req.query.maxReturned + ')');
    sysclient.aliasScan(req.query.startAliasName, req.query.maxReturned, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/aliasupdate', function(req, res, next) {
    req.log.info('aliasupdate(' + req.query.aliasName + ', ' + req.query.aliasValue + ', ' + req.query.toAddress + ')');
    sysclient.aliasUpdate(req.query.aliasName, req.query.aliasValue, req.query.toAddress, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});


// CERTIFICATE MANAGEMENT FUNCTIONS
// =============================================================================
router.post('/certissuerinfo', function(req, res, next) {
    req.log.info('certissuerinfo(' + req.query.guid + ')');
    sysclient.certissuerInfo(req.query.guid, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/certissueractivate', function(req, res, next) {
    req.log.info('certissueractivate(' + req.query.guid + ', ' + req.query.tx + ')');
    sysclient.certissuerActivate(req.query.guid, req.query.tx, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

/*router.post('/certissuer_clean', function(req, res, next) {
    req.log.info('certissuer_clean()');
    sysclient.certissuer_clean(function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});*/

router.post('/certissuerfilter', function(req, res, next) {
    req.log.info('certissuerfilter(' + req.query.regexp + ', ' + req.query.maxage + ', ' + req.query.from + ', ' + req.query.nb + ', ' + req.query.stat + ')');
    sysclient.certissuerFilter(req.query.regexp, req.query.maxage, req.query.from, req.query.nb, req.query.stat, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/certissuerhistory', function(req, res, next) {
    req.log.info('certissuerhistory(' + req.query.certIssuerName + ')');
    sysclient.certissuerHistory(req.query.certIssuerName, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/certissuerinfo', function(req, res, next) {
    req.log.info('certissuerinfo(' + req.query.guid + ')');
    sysclient.certissuerInfo(req.query.guid, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/certissuerlist', function(req, res, next) {
    req.log.info('certissuerlist(' + req.query.certIssuerNameFilter + ')');
    sysclient.certissuerList(req.query.certIssuerNameFilter, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/certissuernew', function(req, res, next) {
    req.log.info('certissuernew(' + req.query.certIssuerName + ', ' + req.query.certIssuerData + ')');
    sysclient.certissuerNew(req.query.certIssuerName, req.query.certIssuerData, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/certissuerscan', function(req, res, next) {
    req.log.info('certissuerscan(' + req.query.startCertIssuerName + ', ' + req.query.maxReturned + ')');
    sysclient.certissuerScan(req.query.startCertIssuerName, req.query.maxReturned, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/certissuerupdate', function(req, res, next) {
    req.log.info('certissuerupdate(' + req.query.guid + ', ' + req.query.certIssuerName + ', ' + req.query.certIssuerData + ')');
    sysclient.certissuerUpdate(req.query.guid, req.query.certIssuerName, req.query.certIssuerData, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/certnew', function(req, res, next) {
    req.log.info('certnew(' + req.query.issuerGuid + ', ' + req.query.toAddress + ', ' + req.query.certTitle + ', ' + req.query.certData + ')');
    sysclient.certNew(req.query.issuerGuid, req.query.toAddress, req.query.certTitle, req.query.certData, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/certtransfer', function(req, res, next) {
    req.log.info('certtransfer(' + req.query.certGuid + ', ' + req.query.toAddress + ')');
    sysclient.certTransfer(req.query.certGuid, req.query.toAddress, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

// DATA ALIAS FUNCTIONS
// =============================================================================
router.post('/dataactivate', function(req, res, next) {
    req.log.info('dataactivate(' + req.query.dataName + ', ' + req.query.guid + ', ' + req.query.tx + ', ' + req.query.filename + ', ' + req.query.dataContent + ')');
    sysclient.dataActivate(req.query.dataName, req.query.guid, req.query.tx, req.query.filename, req.query.dataContent, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

/*
MISSING FROM DAEMON
router.post('/dataclean', function(req, res, next) {
    req.log.info('aliasclean()');
    sysclient.dataclean(function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});
*/

/*
MISSING FROM DAEMON
router.post('/datafilter', function(req, res, next) {
    req.log.info('datafilter(' + req.query.regexp + ', ' + req.query.maxage + ', ' + req.query.from + ', ' + req.query.nb + ', ' + req.query.stat + ')');
    sysclient.dataFilter(req.query.regexp, req.query.maxage, req.query.from, req.query.nb, req.query.stat, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});
*/

/*
INCORRECT IN DAEMON - returns output related to aliases, not data.
router.post('/datahistory', function(req, res, next) {
    req.log.info('datahistory(' + req.query.dataName + ')');
    sysclient.dataHistory(req.query.dataName, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});
*/

/*
INCORRECT IN DAEMON - returns output related to aliases, not data.
router.post('/datainfo', function(req, res, next) {
    req.log.info('datainfo(' + req.query.dataName + ')');
    sysclient.dataInfo(req.query.dataName, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});
*/

/*
 INCORRECT IN DAEMON - returns output related to aliases, not data.
router.post('/datalist', function(req, res, next) {
    req.log.info('datalist(' + req.query.dataNameFilter + ')');
    sysclient.dataList(req.query.dataNameFilter, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});
*/

router.post('/datanew', function(req, res, next) {
    req.log.info('datanew(' + req.query.dataName + ')');
    sysclient.dataNew(req.query.dataName, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

/*
 MISSING FROM DAEMON
router.post('/datascan', function(req, res, next) {
    req.log.info('datascan(' + req.query.startAliasName + ', ' + req.query.maxReturned + ')');
    sysclient.dataScan(req.query.startAliasName, req.query.maxReturned, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});
*/

router.post('/dataupdate', function(req, res, next) {
    req.log.info('dataupdate(' + req.query.dataName + ', ' + req.query.filename + ', ' + req.query.dataContent + ', ' + req.query.toAddress + ')');
    sysclient.dataUpdate(req.query.aliasName, req.query.filename, req.query.dataContent, req.query.toAddress, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/dumpdata', function(req, res, next) {
    req.log.info('dumpdata(' + req.query.dataName + ')');
    sysclient.dumpData(req.query.dataName, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

// MARKETPLACE/OFFER FUNCTIONS
// =============================================================================
router.post('/offeraccept', function(req, res, next) {
    req.log.info('offeraccept(' + req.query.guid + ', ' + req.query.quantity + ')');
    sysclient.offerAccept(req.query.guid, req.query.quantity, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/offeractivate', function(req, res, next) {
    req.log.info('offeractivate(' + req.query.guid + ', ' + req.query.tx + ')');
    sysclient.offerActivate(req.query.guid, req.query.tx, req.query.value, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

/*router.post('/offer_clean', function(req, res, next) {
    req.log.info('offer_clean()');
    sysclient.offer_clean(function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});*/

router.post('/offerfilter', function(req, res, next) {
    req.log.info('offerfilter(' + req.query.regexp + ', ' + req.query.maxage + ', ' + req.query.from + ', ' + req.query.nb + ', ' + req.query.stat + ')');
    sysclient.offerFilter(req.query.regexp, req.query.maxage, req.query.from, req.query.nb, req.query.stat, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/offerhistory', function(req, res, next) {
    req.log.info('offerhistory(' + req.query.offerGuid + ')');
    sysclient.offerHistory(req.query.offerGuid, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/offerinfo', function(req, res, next) {
    req.log.info('offerinfo(' + req.query.offerGuid + ')');
    sysclient.offerInfo(req.query.offerGuid, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/offerlist', function(req, res, next) {
    req.log.info('offerlist(' + req.query.offerNameFilter + ')');
    sysclient.offerList(req.query.offerNameFilter, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/offernew', function(req, res, next) {
    req.log.info('offernew('  + req.query.offerAddress + ', ' + req.query.category + ', ' + req.query.title + ', ' + req.query.quantity + ', ' + req.query.price + ', ' + req.query.description + ')');
    sysclient.offerNew(req.query.offerAddress, req.query.category, req.query.title, req.query.quantity, req.query.price, req.query.description, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/offerpay', function(req, res, next) {
    req.log.info('offerpay(' + req.query.offerAcceptGuid + ', ' + req.query.offerAcceptTx + ', ' + req.query.messageToSeller + ')');
    sysclient.offerPay(req.query.offerAcceptGuid, req.query.offerAcceptTx, req.query.messageToSeller, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/offerscan', function(req, res, next) {
    req.log.info('offerscan(' + req.query.startOfferGuid + ', ' + req.query.maxReturned + ')');
    sysclient.offerScan(req.query.startOfferGuid, req.query.maxReturned, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});

router.post('/offerupdate', function(req, res, next) {
    req.log.info('offerupdate(' + req.query.offerGuid + ', ' + req.query.category + ', ' + req.query.title + ', ' + req.query.quantity + ', ' + req.query.price + ', ' + req.query.description + ')');
    sysclient.offerUpdate(req.query.offerGuid, req.query.category, req.query.title, req.query.quantity, req.query.price, req.query.description, function(err, result, resHeaders) {
        if (err) return handleError(err, req, res, next);

        res.json(result);
        next();
    });
});


// GENERAL FUNCTIONS
// =============================================================================
function handleError(err, req, res, next) {
  req.log.error({err: err}, 'an error has occurred');

  res.status(500); // TODO: better status code derivation
  res.json({error: err});
  return next();
}


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// AFTER ROUTE HANDLING, LOG WHEN THE REQUEST LEAVES THE API SEVER
// =============================================================================
app.use('*', require('./middleware/logging').exit);

// START THE SERVER
// =============================================================================
app.listen(config.port);
logger.info('Syscoin-API Server started on port ' + config.port);
/*
sysclient.getInfo(function(err, result, resHedeaders) {
    console.log("syscoind must be running for this to work...");
    console.log("INIT TEST:" + JSON.stringify(result));
});
*/
