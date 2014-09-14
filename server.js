// server.js

var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');
var syscoin = require('syscoin');

app.use(bodyParser());

//load external configuration
var config = require('./config')

//ENABLE CORS
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
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
var router = express.Router(); 				// get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/hello', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


// GENERIC WALLET FUNCTIONS
// =============================================================================
router.post('/getinfo', function(req, res) {
    console.log('getInfo()');
    sysclient.getInfo(function(err, result, resHeaders) {
        if(handleError(res, err)) return;
        console.log(JSON.stringify(result));
        res.json(result);
    });
});

router.post('/addnode', function(req, res) {
    console.log('addNode(' + req.query.node + ', ' + req.query.method + ')');
    sysclient.addNode(req.query.node, req.query.method, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

// NAME ALIAS FUNCTIONS
// =============================================================================
router.post('/aliasactivate', function(req, res) {
    console.log('aliasactivate(' + req.query.aliasName + ', ' + req.query.guid + ', ' + req.query.tx + ', ' + req.query.value + ')');
    sysclient.aliasActivate(req.query.aliasName, req.query.guid, req.query.tx, req.query.value, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

/*router.post('/aliasclean', function(req, res) {
    console.log('aliasclean()');
    sysclient.aliasClean(function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});*/

router.post('/aliasfilter', function(req, res) {
    console.log('aliasfilter(' + req.query.regexp + ', ' + req.query.maxage + ', ' + req.query.from + ', ' + req.query.nb + ', ' + req.query.stat + ')');
    sysclient.aliasFilter(req.query.regexp, req.query.maxage, req.query.from, req.query.nb, req.query.stat, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/aliashistory', function(req, res) {
    console.log('aliashistory(' + req.query.aliasName + ')');
    sysclient.aliasHistory(req.query.aliasName, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/aliasinfo', function(req, res) {
    console.log('aliasinfo(' + req.query.aliasName + ')');
    sysclient.aliasInfo(req.query.aliasInfo, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/aliaslist', function(req, res) {
    console.log('aliaslist(' + req.query.aliasNameFilter + ')');
    sysclient.aliasList(req.query.aliasNameFilter, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/aliasnew', function(req, res) {
    console.log('aliasnew(' + req.query.aliasName + ')');
    sysclient.aliasNew(req.query.aliasName, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/aliasscan', function(req, res) {
    console.log('aliasscan(' + req.query.startAliasName + ', ' + req.query.maxReturned + ')');
    sysclient.aliasScan(req.query.startAliasName, req.query.maxReturned, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/aliasupdate', function(req, res) {
    console.log('aliasupdate(' + req.query.aliasName + ', ' + req.query.aliasValue + ', ' + req.query.toAddress + ')');
    sysclient.aliasUpdate(req.query.aliasName, req.query.aliasValue, req.query.toAddress, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});


// CERTIFICATE MANAGEMENT FUNCTIONS
// =============================================================================
router.post('/certissuerinfo', function(req, res) {
    console.log('certissuerinfo(' + req.query.guid + ')');
    sysclient.certissuerInfo(req.query.guid, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/certissueractivate', function(req, res) {
    console.log('certissueractivate(' + req.query.guid + ', ' + req.query.tx + ')');
    sysclient.certissuerActivate(req.query.guid, req.query.tx, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

/*router.post('/certissuer_clean', function(req, res) {
    console.log('certissuer_clean()');
    sysclient.certissuer_clean(function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});*/

router.post('/certissuerfilter', function(req, res) {
    console.log('certissuerfilter(' + req.query.regexp + ', ' + req.query.maxage + ', ' + req.query.from + ', ' + req.query.nb + ', ' + req.query.stat + ')');
    sysclient.certissuerFilter(req.query.regexp, req.query.maxage, req.query.from, req.query.nb, req.query.stat, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/certissuerhistory', function(req, res) {
    console.log('certissuerhistory(' + req.query.certIssuerName + ')');
    sysclient.certissuerHistory(req.query.certIssuerName, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/certissuerinfo', function(req, res) {
    console.log('certissuerinfo(' + req.query.guid + ')');
    sysclient.certissuerInfo(req.query.guid, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/certissuerlist', function(req, res) {
    console.log('certissuerlist(' + req.query.certIssuerNameFilter + ')');
    sysclient.certissuerList(req.query.certIssuerNameFilter, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/certissuernew', function(req, res) {
    console.log('certissuernew(' + req.query.certIssuerName + ', ' + req.query.certIssuerData + ')');
    sysclient.certissuerNew(req.query.certIssuerName, req.query.certIssuerData, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/certissuerscan', function(req, res) {
    console.log('certissuerscan(' + req.query.startCertIssuerName + ', ' + req.query.maxReturned + ')');
    sysclient.certissuerScan(req.query.startCertIssuerName, req.query.maxReturned, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/certissuerupdate', function(req, res) {
    console.log('certissuerupdate(' + req.query.guid + ', ' + req.query.certIssuerName + ', ' + req.query.certIssuerData + ')');
    sysclient.certissuerUpdate(req.query.guid, req.query.certIssuerName, req.query.certIssuerData, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/certnew', function(req, res) {
    console.log('certnew(' + req.query.issuerGuid + ', ' + req.query.toAddress + ', ' + req.query.certTitle + ', ' + req.query.certData + ')');
    sysclient.certNew(req.query.issuerGuid, req.query.toAddress, req.query.certTitle, req.query.certData, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/certtransfer', function(req, res) {
    console.log('certtransfer(' + req.query.certGuid + ', ' + req.query.toAddress + ')');
    sysclient.certTransfer(req.query.certGuid, req.query.toAddress, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

// DATA ALIAS FUNCTIONS
// =============================================================================
router.post('/dataactivate', function(req, res) {
    console.log('dataactivate(' + req.query.dataName + ', ' + req.query.guid + ', ' + req.query.tx + ', ' + req.query.filename + ', ' + req.query.dataContent + ')');
    sysclient.dataActivate(req.query.dataName, req.query.guid, req.query.tx, req.query.filename, req.query.dataContent, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

/*
MISSING FROM DAEMON
router.post('/dataclean', function(req, res) {
    console.log('aliasclean()');
    sysclient.aliasclean(function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});
*/

/*
MISSING FROM DAEMON
router.post('/datafilter', function(req, res) {
    console.log('datafilter(' + req.query.regexp + ', ' + req.query.maxage + ', ' + req.query.from + ', ' + req.query.nb + ', ' + req.query.stat + ')');
    sysclient.datafilter(req.query.regexp, req.query.maxage, req.query.from, req.query.nb, req.query.stat, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});
*/

/*
INCORRECT IN DAEMON - returns output related to aliases, not data.
router.post('/datahistory', function(req, res) {
    console.log('datahistory(' + req.query.dataName + ')');
    sysclient.datahistory(req.query.dataName, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});
*/

/*
INCORRECT IN DAEMON - returns output related to aliases, not data.
router.post('/datainfo', function(req, res) {
    console.log('datainfo(' + req.query.dataName + ')');
    sysclient.datainfo(req.query.dataName, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});
*/

/*
 INCORRECT IN DAEMON - returns output related to aliases, not data.
router.post('/datalist', function(req, res) {
    console.log('datalist(' + req.query.dataNameFilter + ')');
    sysclient.datalist(req.query.dataNameFilter, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});
*/

router.post('/datanew', function(req, res) {
    console.log('datanew(' + req.query.dataName + ')');
    sysclient.dataNew(req.query.dataName, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

/*
 MISSING FROM DAEMON
router.post('/datascan', function(req, res) {
    console.log('aliasscan(' + req.query.startAliasName + ', ' + req.query.maxReturned + ')');
    sysclient.aliasscan(req.query.startAliasName, req.query.maxReturned, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});
*/

router.post('/dataupdate', function(req, res) {
    console.log('dataupdate(' + req.query.dataName + ', ' + req.query.filename + ', ' + req.query.dataContent + ', ' + req.query.toAddress + ')');
    sysclient.dataUpdate(req.query.aliasName, req.query.filename, req.query.dataContent, req.query.toAddress, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/dumpdata', function(req, res) {
    console.log('dumpdata(' + req.query.dataName + ')');
    sysclient.dumpData(req.query.dataName, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

// MARKETPLACE/OFFER FUNCTIONS
// =============================================================================
router.post('/offeraccept', function(req, res) {
    console.log('offeraccept(' + req.query.guid + ', ' + req.query.quantity + ')');
    sysclient.offerAccept(req.query.guid, req.query.quantity, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/offeractivate', function(req, res) {
    console.log('offeractivate(' + req.query.guid + ', ' + req.query.tx + ')');
    sysclient.offerActivate(req.query.guid, req.query.tx, req.query.value, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

/*router.post('/offer_clean', function(req, res) {
    console.log('offer_clean()');
    sysclient.offer_clean(function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});*/

router.post('/offerfilter', function(req, res) {
    console.log('offerfilter(' + req.query.regexp + ', ' + req.query.maxage + ', ' + req.query.from + ', ' + req.query.nb + ', ' + req.query.stat + ')');
    sysclient.offerFilter(req.query.regexp, req.query.maxage, req.query.from, req.query.nb, req.query.stat, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/offerhistory', function(req, res) {
    console.log('offerhistory(' + req.query.offerGuid + ')');
    sysclient.offerHistory(req.query.offerGuid, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/offerinfo', function(req, res) {
    console.log('offerinfo(' + req.query.offerGuid + ')');
    sysclient.offerInfo(req.query.offerGuid, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/offerlist', function(req, res) {
    console.log('offerlist(' + req.query.offerNameFilter + ')');
    sysclient.offerList(req.query.offerNameFilter, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/offernew', function(req, res) {
    console.log('offernew('  + req.query.offerAddress + ', ' + req.query.category + ', ' + req.query.title + ', ' + req.query.quantity + ', ' + req.query.price + ', ' + req.query.description + ')');
    sysclient.offerNew(req.query.offerAddress, req.query.category, req.query.title, req.query.quantity, req.query.price, req.query.description, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/offerpay', function(req, res) {
    console.log('offerpay(' + req.query.offerAcceptGuid + ', ' + req.query.offerAcceptTx + ', ' + req.query.messageToSeller + ')');
    sysclient.offerPay(req.query.offerAcceptGuid, req.query.offerAcceptTx, req.query.messageToSeller, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/offerscan', function(req, res) {
    console.log('offerscan(' + req.query.startOfferGuid + ', ' + req.query.maxReturned + ')');
    sysclient.offerScan(req.query.startOfferGuid, req.query.maxReturned, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.post('/offerupdate', function(req, res) {
    console.log('offerupdate(' + req.query.offerGuid + ', ' + req.query.category + ', ' + req.query.title + ', ' + req.query.quantity + ', ' + req.query.price + ', ' + req.query.description + ')');
    sysclient.offerUpdate(req.query.offerGuid, req.query.category, req.query.title, req.query.quantity, req.query.price, req.query.description, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});


// GENERAL FUNCTIONS
// =============================================================================
function handleError(res, err) {
    if (err) {
        res.json({ error : err });
        console.log(err);

        //return true on error to stop further execution within functions
        //TODO: better patterning
        return true;
    }
}


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(config.port);
console.log('Syscoin-API Server started on port ' + config.port);
console.log('===============================================================');
sysclient.getInfo(function(err, result, resHedeaders) {
    console.log("syscoind must be running for this to work...");
    console.log("INIT TEST:" + JSON.stringify(result));
});
