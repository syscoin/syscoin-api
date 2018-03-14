var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');
var commonUtils = require('./util/commonUtils');
const he = require('he');


exports.sentinelping = function(args, res, next) {
    /**
     * parameters expected in the args:
     * request (sentinelping)
     **/
    var argList = [
        { prop: "version" }
    ];

    var cb = function(err, result, resHeaders) {
        res.setHeader('Content-Type', 'application/json');

        if (err) {
            return commonUtils.reportError(res, err);
        }

        commonUtils.log('sentinelping', result, "sentinelping");
        res.end(JSON.stringify(result));
    };

    var arr = varUtils.getArgsArr(argList, args, "POST", cb);
    syscoinClient.sentInelPing.apply(syscoinClient, arr);
};

exports.voteraw = function(args, res, next) {
    /**
     * parameters expected in the args:
     * request (voteraw)
     **/
    var argList = [
        { prop: "masternode-tx-hash" },
        { prop: "masternode-tx" },
        { prop: "governance-hash" },
        { prop: "vote-signal" },
        { prop: "vote-outcome" },
        { prop: "time" },
        { prop: "vote-sig" }
    ];

    var cb = function(err, result, resHeaders) {
        res.setHeader('Content-Type', 'application/json');

        if (err) {
            return commonUtils.reportError(res, err);
        }

        commonUtils.log('voteraw', result, "voteraw");
        res.end(JSON.stringify(result));
    };

    var arr = varUtils.getArgsArr(argList, args, "POST", cb);
    syscoinClient.voteraw.apply(syscoinClient, arr);
};


exports.privatesend = function(args, res, next) {
    /**
     * parameters expected in the args:
     * request (privatesend)
     **/
    var argList = [
        { prop: "masternode-tx-hash" },
        { prop: "masternode-tx" },
        { prop: "governance-hash" },
        { prop: "vote-signal" },
        { prop: "vote-outcome" },
        { prop: "time" },
        { prop: "vote-sig" }
    ];

    var cb = function(err, result, resHeaders) {
        res.setHeader('Content-Type', 'application/json');

        if (err) {
            return commonUtils.reportError(res, err);
        }

        commonUtils.log('privatesend', result, "privatesend");
        res.end(JSON.stringify(result));
    };

    var arr = varUtils.getArgsArr(argList, args, "POST", cb);
    syscoinClient.privateSend.apply(syscoinClient, arr);
};


exports.importelectrumwallet = function(args, res, next) {
    /**
     * parameters expected in the args:
     * request (importelectrumwallet)
     **/
    var cb = function(err, result, resHeaders) {
        res.setHeader('Content-Type', 'application/json');

        if (err) {
            return commonUtils.reportError(res, err);
        }

        commonUtils.log('importElectrumWallet', result, "importElectrumWallet");
        res.end(JSON.stringify(result));
    };

    //var arr = varUtils.getArgsArr(argList, args, "POST", cb);
    var arr = [args['filename'],args['index'], cb];
    syscoinClient.importElectrumWallet.apply(syscoinClient, arr);
};
