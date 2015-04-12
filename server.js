// server.js
var express    = require('express');
var app        = module.exports = express();
var bodyParser = require('body-parser');

// load external configuration
var config = require('./config');

// initialize logger
var logger = require('./lib/logger')(config.log);

// load middleware
app.all('*', require('./middleware/requestId'));
app.all('*', require('./middleware/logging').attach(logger));
app.all('*', require('./middleware/logging').entry);
app.all('*', bodyParser());
app.all('*', require('./middleware/cors'));
app.all('*', require('./middleware/client')(config.syscoin));
app.all('*', require('./middleware/errors'));

// ROUTES FOR OUR API
// =============================================================================
var rpcRouter = express.Router({
  caseSensitive: true
});

var apiRouter = express.Router({
  caseSensitive: true
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
rpcRouter.get('/hello', function(req, res, next) {
    hello(req, res, next);
});

apiRouter.get('/hello', function(req, res, next) {
    hello(req, res, next);
});

rpcRouter.get('/notImplemented', function(req, res, next) {
    notImplemented(req, res, next);
});

apiRouter.get('/notImplemented', function(req, res, next) {
    notImplemented(req, res, next);
});

function hello(req, res, next) {
    res.json({ message: 'hooray! welcome to our api!' });
    next();
}

function notImplemented(req, res, next) {
    next(req.error.NotImplementedError('this route is not implemented'));
}

// Simple Auth
// =============================================================================
apiRouter.post('/authenticate', function(req, res, next) {
    if(req.body.username == config.username && req.body.password == config.password) {
        res.json({ authenticated: true });
    }else{
        res.json({ authenticated: false });
    }

    next();
});

// GENERIC WALLET FUNCTIONS
// =============================================================================
rpcRouter.post('/getinfo', function(req, res, next) {
    req.log.info('getInfo()');
    req.client.getInfo(function(err, result, resHeaders) {
        if (err) return next(err);

        req.log.info(JSON.stringify(result));
        res.json(result);
        next();
    });
});


rpcRouter.post('/getaccountaddress', function(req, res, next) {
    req.log.info('getaccountaddress(' + req.body.accountName + ') \n');
    req.client.getAccountAddress(req.body.accountName, function(err, result, resHeaders) {
        if (err) return next(err);

        req.log.info(JSON.stringify(result));
        res.json(result);
        next();
    });
});


rpcRouter.post('/addnode', function(req, res, next) {
    req.log.info('addNode(' + req.body.node + ', ' + req.body.method + ')');
    req.client.addNode(req.body.node, req.body.method, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

// NAME ALIAS FUNCTIONS
// =============================================================================

/*rpcRouter.post('/aliasclean', function(req, res, next) {
    req.log.info('aliasclean()');
    req.client.aliasClean(function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});*/

rpcRouter.post('/aliasfilter', function(req, res, next) {
    req.log.info('aliasfilter(' + req.body.regexp + ', ' + req.body.maxage + ', ' + req.body.from + ', ' + req.body.nb + ', ' + req.body.stat + ')');
    req.client.aliasFilter(req.body.regexp, req.body.maxage, req.body.from, req.body.nb, req.body.stat, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/aliashistory', function(req, res, next) {
    req.log.info('aliashistory(' + req.body.aliasName + ')');
    req.client.aliasHistory(req.body.aliasName, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/aliasinfo', function(req, res, next) {
    req.log.info('aliasinfo(' + req.body.aliasName + ')');
    req.client.aliasInfo(req.body.aliasInfo, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/aliaslist', function(req, res, next) {
    req.log.info('aliaslist(' + req.body.aliasNameFilter + ')');
    req.client.aliasList(req.body.aliasNameFilter, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/aliasnew', function(req, res, next) {
    req.log.info('aliasnew(' + req.body.aliasName + ')');
    req.client.aliasNew(req.body.aliasName, req.body.aliasValue, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/aliasscan', function(req, res, next) {
    req.log.info('aliasscan(' + req.body.startAliasName + ', ' + req.body.maxReturned + ')');
    req.client.aliasScan(req.body.startAliasName, req.body.maxReturned, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/aliasupdate', function(req, res, next) {
    req.log.info('aliasupdate(' + req.body.aliasName + ', ' + req.body.aliasValue + ', ' + req.body.toAddress + ')');
    req.client.aliasUpdate(req.body.aliasName, req.body.aliasValue, req.body.toAddress, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});


// CERTIFICATE MANAGEMENT FUNCTIONS
// =============================================================================
rpcRouter.post('/certissuerinfo', function(req, res, next) {
    req.log.info('certissuerinfo(' + req.body.guid + ')');
    req.client.certissuerInfo(req.body.guid, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

/*rpcRouter.post('/certissuer_clean', function(req, res, next) {
    req.log.info('certissuer_clean()');
    req.client.certissuer_clean(function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});*/

rpcRouter.post('/certissuerfilter', function(req, res, next) {
    req.log.info('certissuerfilter(' + req.body.regexp + ', ' + req.body.maxage + ', ' + req.body.from + ', ' + req.body.nb + ', ' + req.body.stat + ')');
    req.client.certissuerFilter(req.body.regexp, req.body.maxage, req.body.from, req.body.nb, req.body.stat, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/certissuerhistory', function(req, res, next) {
    req.log.info('certissuerhistory(' + req.body.certIssuerName + ')');
    req.client.certissuerHistory(req.body.certIssuerName, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/certissuerinfo', function(req, res, next) {
    req.log.info('certissuerinfo(' + req.body.guid + ')');
    req.client.certissuerInfo(req.body.guid, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/certissuerlist', function(req, res, next) {
    req.log.info('certissuerlist(' + req.body.certIssuerNameFilter + ')');
    req.client.certissuerList(req.body.certIssuerNameFilter, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/certissuernew', function(req, res, next) {
    req.log.info('certissuernew(' + req.body.certIssuerName + ', ' + req.body.certIssuerData + ')');
    req.client.certissuerNew(req.body.certIssuerName, req.body.certIssuerData, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/certissuerscan', function(req, res, next) {
    req.log.info('certissuerscan(' + req.body.startCertIssuerName + ', ' + req.body.maxReturned + ')');
    req.client.certissuerScan(req.body.startCertIssuerName, req.body.maxReturned, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/certissuerupdate', function(req, res, next) {
    req.log.info('certissuerupdate(' + req.body.guid + ', ' + req.body.certIssuerName + ', ' + req.body.certIssuerData + ')');
    req.client.certissuerUpdate(req.body.guid, req.body.certIssuerName, req.body.certIssuerData, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/certnew', function(req, res, next) {
    req.log.info('certnew(' + req.body.issuerGuid + ', ' + req.body.toAddress + ', ' + req.body.certTitle + ', ' + req.body.certData + ')');
    req.client.certNew(req.body.issuerGuid, req.body.toAddress, req.body.certTitle, req.body.certData, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/certtransfer', function(req, res, next) {
    req.log.info('certtransfer(' + req.body.certGuid + ', ' + req.body.toAddress + ')');
    req.client.certTransfer(req.body.certGuid, req.body.toAddress, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

// DATA ALIAS FUNCTIONS
// =============================================================================
rpcRouter.post('/dataactivate', function(req, res, next) {
    req.log.info('dataactivate(' + req.body.dataName + ', ' + req.body.guid + ', ' + req.body.tx + ', ' + req.body.filename + ', ' + req.body.dataContent + ')');
    req.client.dataActivate(req.body.dataName, req.body.guid, req.body.tx, req.body.filename, req.body.dataContent, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

/*
MISSING FROM DAEMON
rpcRouter.post('/dataclean', function(req, res, next) {
    req.log.info('aliasclean()');
    req.client.dataclean(function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});
*/

/*
MISSING FROM DAEMON
rpcRouter.post('/datafilter', function(req, res, next) {
    req.log.info('datafilter(' + req.body.regexp + ', ' + req.body.maxage + ', ' + req.body.from + ', ' + req.body.nb + ', ' + req.body.stat + ')');
    req.client.dataFilter(req.body.regexp, req.body.maxage, req.body.from, req.body.nb, req.body.stat, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});
*/

/*
INCORRECT IN DAEMON - returns output related to aliases, not data.
rpcRouter.post('/datahistory', function(req, res, next) {
    req.log.info('datahistory(' + req.body.dataName + ')');
    req.client.dataHistory(req.body.dataName, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});
*/

/*
INCORRECT IN DAEMON - returns output related to aliases, not data.
rpcRouter.post('/datainfo', function(req, res, next) {
    req.log.info('datainfo(' + req.body.dataName + ')');
    req.client.dataInfo(req.body.dataName, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});
*/

/*
 INCORRECT IN DAEMON - returns output related to aliases, not data.
rpcRouter.post('/datalist', function(req, res, next) {
    req.log.info('datalist(' + req.body.dataNameFilter + ')');
    req.client.dataList(req.body.dataNameFilter, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});
*/

//rpcRouter.post('/datanew', function(req, res, next) {
//    req.log.info('datanew(' + req.body.dataName + ')');
//    req.client.dataNew(req.body.dataName, function(err, result, resHeaders) {
//        if (err) return next(err);
//
//        res.json(result);
//        next();
//    });
//});

/*
 MISSING FROM DAEMON
rpcRouter.post('/datascan', function(req, res, next) {
    req.log.info('datascan(' + req.body.startAliasName + ', ' + req.body.maxReturned + ')');
    req.client.dataScan(req.body.startAliasName, req.body.maxReturned, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});
*/

rpcRouter.post('/dataupdate', function(req, res, next) {
    req.log.info('dataupdate(' + req.body.dataName + ', ' + req.body.filename + ', ' + req.body.dataContent + ', ' + req.body.toAddress + ')');
    req.client.dataUpdate(req.body.aliasName, req.body.filename, req.body.dataContent, req.body.toAddress, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/dumpdata', function(req, res, next) {
    req.log.info('dumpdata(' + req.body.dataName + ')');
    req.client.dumpData(req.body.dataName, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

// MARKETPLACE/OFFER FUNCTIONS
// =============================================================================
rpcRouter.post('/offeraccept', function(req, res, next) {
    req.log.info('offeraccept(' + req.body.guid + ', ' + req.body.quantity + ', ' + req.body.messageToSeller + ')');
    req.client.offerAccept(req.body.guid, req.body.quantity, req.body.messageToSeller, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/offerrenew', function(req, res, next) {
    req.log.info('offerrenew(' + req.body.guid + ')');
    req.client.offerRenew(req.body.guid, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/offerfilter', function(req, res, next) {
    req.log.info('offerfilter(' + req.body.regexp + ', ' + req.body.maxage + ', ' + req.body.from + ', ' + req.body.nb + ', ' + req.body.stat + ')');
    req.client.offerFilter(req.body.regexp, req.body.maxage, req.body.from, req.body.nb, req.body.stat, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/offerhistory', function(req, res, next) {
    req.log.info('offerhistory(' + req.body.offerGuid + ')');
    req.client.offerHistory(req.body.offerGuid, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/offerinfo', function(req, res, next) {
    req.log.info('offerinfo(' + req.body.offerGuid + ')');
    req.client.offerInfo(req.body.offerGuid, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/offerlist', function(req, res, next) {
    req.log.info('offerlist(' + req.body.offerNameFilter + ')');
    req.client.offerList(function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/offernew', function(req, res, next) {
    req.log.info('offernew('  + req.body.offerAddress + ', ' + req.body.category + ', ' + req.body.title + ', ' + req.body.quantity + ', ' + req.body.price + ', ' + req.body.description + ')');
    req.client.offerNew(req.body.offerAddress, req.body.category, req.body.title, req.body.quantity, req.body.price, req.body.description, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/offerscan', function(req, res, next) {
    req.log.info('offerscan(' + req.body.startOfferGuid + ', ' + req.body.maxReturned + ')');
    req.client.offerScan(req.body.startOfferGuid, req.body.maxReturned, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

rpcRouter.post('/offerupdate', function(req, res, next) {
    req.log.info('offerupdate('  + req.body.offerGuid + ', ' + req.body.category + ', ' + req.body.title + ', ' + req.body.quantity + ', ' + req.body.price + ', ' + req.body.description + ')');
    req.client.offerUpdate(req.body.offerGuid, req.body.category, req.body.title, req.body.quantity, req.body.price, req.body.description, function(err, result, resHeaders) {
        if (err) return next(err);

        res.json(result);
        next();
    });
});

// REGISTER OUR ROUTES -------------------------------
// all of our REST routes will be prefixed with /api
app.use('/api', apiRouter);

app.use('/rpc', rpcRouter);

// ERROR HANDLING MDW
app.use('*', require('./middleware/errorHandler'));

// AFTER ROUTE HANDLING, LOG WHEN THE REQUEST LEAVES THE API SEVER
// =============================================================================
app.use('*', require('./middleware/logging').exit);

// START THE SERVER
// =============================================================================
app.listen(config.port);
logger.info('Syscoin-API Server started on port ' + config.port);
/*
req.client.getInfo(function(err, result, resHedeaders) {
    console.log("syscoind must be running for this to work...");
    console.log("INIT TEST:" + JSON.stringify(result));
});
*/
