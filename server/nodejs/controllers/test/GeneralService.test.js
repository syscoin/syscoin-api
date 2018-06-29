"use strict";
const expect = require("chai").expect;
const request = require("./TestRequest").request;
const AuthHelper = require("../spec/helper/authHelper");
const Config = require("./config");

let testAuthToken;

describe("Tests for General Service API", function () {
  before(function (done) {
    let requestOptions = AuthHelper.requestOptions();
    if (requestOptions) {
      testAuthToken = requestOptions.headers.token;
    }
    done();
  });

  //addmultisigaddress

  describe("dumpprivkey", function () {
    it("Reveals the private key corresponding to 'address'", function (done) {
      const params = {
        address: Config.TEST_EXISTING_ADDRESS1
      };

      request("GET", "dumpprivkey", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  //dumpwallet
  //encryptwallet
  //generate //This method seems to be deprecated
  //generatepublickey //This method seems to be deprecated

  describe("getaccount", function () {
    it("Returns the account associated with the given address", function (done) {
      const params = {
        syscoinaddress: Config.TEST_EXISTING_ADDRESS1
      };

      request("GET", "getaccount", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("getaccountaddress", function () {
    it("Returns the current Syscoin address for receiving payments to this account", function (done) {
      const params = {
        account: Config.TEST_EXISTING_ALIAS1
      };

      request("GET", "getaccountaddress", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  //getaddressesbyaccount //This method seems to be deprecated

  describe("getbalance", function () {
    it("Returns the balance in the account", function (done) {
      const params = {
        account: "*",
        minconf: 1,
        includeWatchonly: false
      };

      request("GET", "getbalance", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  /*describe("getblock", function () {
    it("Returns information about block", function (done) {
      const params = {
        hash: Config.TEST_TRX_HEX_STRING,
        verbose: true
      };

      request("GET", "getblock", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });*/

  describe("getblockchaininfo", function () {
    it("Returns info regarding block chain processing", function (done) {
      request("GET", "getblockchaininfo", null, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("getblockcount", function () {
    it("Returns the number of blocks in the longest block chain", function (done) {
      request("GET", "getblockcount", null, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("getinfo", function () {
    it("Returns a state info", function (done) {
      request("GET", "getinfo", null, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("getmininginfo", function () {
    it("Returns mining-related information", function (done) {
      request("GET", "getmininginfo", null, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("getnetworkinfo", function () {
    it("Returns network-related information", function (done) {
      request("GET", "getnetworkinfo", null, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  //getnewaddress

  describe("getpeerinfo", function () {
    it("Returns data about each connected network node", function (done) {
      request("GET", "getpeerinfo", null, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("getreceivedbyaccount", function () {
    it("Returns the total amount received by addresses", function (done) {
      const params = {
        account: "",
        minconf: 1,
        addlockconf: false
      };

      request("GET", "getreceivedbyaccount", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("getreceivedbyaddress", function () {
    it("Returns the total amount received by addresses", function (done) {
      const params = {
        syscoinaddress: Config.TEST_EXISTING_ADDRESS1,
        minconf: 1,
        addlockconf: false
      };

      request("GET", "getreceivedbyaddress", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("gettransaction", function () {
    it("Get detailed information about in-wallet transaction", function (done) {
      const params = {
        txid: Config.TEST_EXISTING_TXID,
        includeWatchonly: false
      };
      request("GET", "gettransaction", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("getunconfirmedbalance", function () {
    it("Returns the server’s total unconfirmed balance", function (done) {
      request("GET", "getunconfirmedbalance", null, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("getwalletinfo", function () {
    it("Returns wallet state info", function (done) {
      request("GET", "getwalletinfo", null, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  //importaddress
  //importprivkey
  //importpubkey
  //importwallet

  describe("listaccounts", function () {
    it("Returns account names as keys, account balances as values", function (done) {
      const params = {
        minconf: 1,
        addlockconf: false,
        includeWatchonly: false
      };
      request("GET", "listaccounts", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("listaddressgroupings", function () {
    it("Lists groups of addresses", function (done) {
      request("GET", "listaddressgroupings", null, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("listreceivedbyaccount", function () {
    it("List balances by account", function (done) {
      const params = {
        minconf: 1,
        addlockconf: false,
        includeempty: true,
        includeWatchonly: false
      };
      request("GET", "listreceivedbyaccount", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("listreceivedbyaddress", function () {
    it("List balances by receiving address", function (done) {
      const params = {
        minconf: 1,
        addlockconf: false,
        includeempty: false,
        includeWatchonly: false
      };
      request("GET", "listreceivedbyaddress", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("listsinceblock", function () {
    it("Get all transactions in blocks since block", function (done) {
      const params = {
        blockhash: Config.TEST_EXISTING_BLOCK_HASH1,
        includeWatchonly: false,
        "target-confirmations": 1
      };
      request("GET", "listsinceblock", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("listtransactions", function () {
    it("Returns most recent transactions", function (done) {
      const params = {
        account: "*",
        count: 1,
        from: 0,
        includeWatchonly: false
      };
      request("GET", "listtransactions", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("listunspent", function () {
    it("Returns array of unspent transactions", function (done) {
      const params = {
        minconf: 1,
        maxconf: 9999999,
        adresses: []
      };
      request("GET", "listunspent", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  //move
  //sendfrom
  //sendmany
  //sendtoaddress
  //signmessage

  describe("syscoindecoderawtransaction", function () {
    it("Decode raw syscoin transaction", function (done) {
      const params = {
        hexstring: Config.TEST_TRX_HEX_STRING
      };
      request("GET", "syscoindecoderawtransaction", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("validateaddress", function () {
    it("Return information about the given syscoin address", function (done) {
      const params = {
        syscoinaddress: Config.TEST_EXISTING_ADDRESS1
      };
      request("GET", "validateaddress", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  //verifymessage
  //walletlock
  //walletpassphrase
  //walletpassphrasechange

  describe("getaddressbalance", function () {
    it("Return information about the given syscoin address", function (done) {
      const params = {
        addresses: [Config.TEST_EXISTING_ADDRESS1]
      };
      request("GET", "getaddressbalance", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  //getaddresstxids
  //getblockhashes
  //getblockheaders
  //getchaintips
  //getspentinfo
  //getgovernanceinfo
  //getpoolinfo
  //getsuperblockbudget
  //gobject
  //masternode
  //masternodebroadcast
  //masternodelist

  describe("getaddressdeltas", function () {
    it("Return information about address delats", function (done) {
      const params = {
        addresses: [Config.TEST_EXISTING_ADDRESS1],
        start: 1,
        end: 999999
      };
      request("GET", "getaddressdeltas", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  //getaddressmempool
  //syscoinsendrawtransaction
  //getgenerate
  //setgenerate

  describe("setnetworkactive", function () {
    it("Set 'networkactive' true or false", function (done) {
      const params = {
        state: true
      };
      request("GET", "setnetworkactive", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("mnsync", function () {
    it("Returns the sync status", function (done) {
      const params = {
        command: "status"
      };
      request("GET", "mnsync", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("dumphdinfo", function () {
    it("Returns sensitive private info about this HD wallet", function (done) {
      request("GET", "dumphdinfo", null, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("debug", function () {
    it("Turn debug mode on", function (done) {
      const params = {
        command: "1"
      };
      request("GET", "debug", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  //instantsendtoaddress
  //fundrawtransaction

  describe("getblocktemplate", function () {
    it("Get block template", function (done) {
      request("GET", "getblocktemplate", null, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  //signrawtransaction
  //lockunspent

  describe("syscoinlistreceivedbyaddress", function () {
    it("Returns all addresses and balances associated with address", function (done) {
      request("GET", "syscoinlistreceivedbyaddress", null, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  //getaddressutxos

});
