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
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

//SYSCOIN JSON-RPC API
router.get('/addmultisigaddress', function(req, res) {
    console.log('addmultisigaddress(' + req.query.nrequired + ', ' + req.query.multisigArr + ')');
    sysclient.addmultisigaddress(req.query.nrequired, req.query.multisigArr, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.get('/addnode', function(req, res) {
    console.log('addnode(' + req.query.node + ', ' + req.query.method + ')');
    sysclient.addnode(req.query.node, req.query.method, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.get('/aliasactivate', function(req, res) {
    console.log('aliasactivate(' + req.query.aliasName + ', ' + req.query.guid + ', ' + req.query.tx + ', ' + req.query.value + ')');
    sysclient.aliasactivate(req.query.aliasName, req.query.guid, req.query.tx, req.query.value, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.get('/aliasclean', function(req, res) {
    console.log('aliasclean()');
    sysclient.aliasclean(function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.get('/aliasfilter', function(req, res) {
    console.log('aliasfilter(' + req.query.regexp + ', ' + req.query.maxage + ', ' + req.query.from + ', ' + req.query.nb + ', ' + req.query.stat + ')');
    sysclient.aliasfilter(req.query.regexp, req.query.maxage, req.query.from, req.query.nb, req.query.stat, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.get('/aliashistory', function(req, res) {
    console.log('aliashistory(' + req.query.aliasName + ')');
    sysclient.aliashistory(req.query.aliasName, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.get('/aliasinfo', function(req, res) {
    console.log('aliasinfo(' + req.query.aliasName + ')');
    sysclient.aliasinfo(req.query.aliasInfo, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.get('/aliaslist', function(req, res) {
    console.log('aliaslist(' + req.query.aliasNameFilter + ')');
    sysclient.aliaslist(req.query.aliasNameFilter, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.get('/aliasnew', function(req, res) {
    console.log('aliasnew(' + req.query.aliasName + ')');
    sysclient.aliasnew(req.query.aliasName, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.get('/aliasscan', function(req, res) {
    console.log('aliasscan(' + req.query.startName + ', ' + req.query.maxReturned + ')');
    sysclient.aliasscan(req.query.startName, req.query.maxReturned, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

router.get('/aliasupdate', function(req, res) {
    console.log('aliasupdate(' + req.query.aliasName + ', ' + req.query.aliasValue + ', ' + req.query.toAddress + ')');
    sysclient.aliasupdate(req.query.aliasName, req.query.aliasValue, req.query.toAddress, function(err, result, resHeaders) {
        if(handleError(res, err)) return;

        res.json(result);
    });
});

//general functions
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
app.listen(port);
console.log('Magic happens on port ' + config.port);
