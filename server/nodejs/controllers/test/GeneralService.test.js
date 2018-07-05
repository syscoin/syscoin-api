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

  //addmultisigaddress /* need to doublecheck if api specs are correct (keysobject ?) */

  //run this only once only if the wallet in not yet encrypted
  describe.skip("encryptwallet", function () {
    it("Encrypts the wallet with 'passphrase’", function (done) {
      const body = {
        "passphrase": Config.TEST_ENCRYPT_WALLET_PASSPHRASE
      };
      request("POST", "encryptwallet", null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("walletlock", function () {
    it("Removes the wallet encryption key from memory, locking the wallet", function (done) {
      request("POST", "walletlock", null, testAuthToken, null).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("walletpassphrase", function () {
    it("Stores the wallet decryption key in memory for ‘timeout’ seconds", function (done) {
      const body = {
        "passphrase": Config.TEST_ENCRYPT_WALLET_PASSPHRASE,
        "timeout": 60
      };
      request("POST", "walletpassphrase", null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

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

  describe("dumpwallet", function () {
    it("Dumps all wallet keys in a human-readable format", function (done) {
      const params = {
        filename: Config.TEST_DUMP_WALLET_PATH
      };
      request("GET", "dumpwallet", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

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

  describe("getblock", function () {
    it("Returns information about block", function (done) {
      const params = {
        hash: Config.TEST_EXISTING_BLOCK_HASH1,
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
  });

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

  describe("getnewaddress", function () {
    it("Returns a new Syscoin address for receiving payments", function (done) {
      request("POST", "getnewaddress", null, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

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

  describe("importaddress", function () {
    it("Adds address that can be watched as if it were in your wallet but cannot be used to spend", function (done) {
      const body = {
        "p2sh": false,
        "label": "label",
        "rescan": false,
        "script": Config.TEST_EXISTING_ESCROW_ADDRESS
      };
      request("POST", "importaddress", null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("importprivkey", function () {
    it("Adds a private key (as returned by dumpprivkey) to your wallet", function (done) {
      const body = {
        "syscoinprivkey": Config.TEST_EXISTING_DUMP_PRIVKEY,
        "label": "label",
        "rescan": false
      };
      request("POST", "importprivkey", null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("importpubkey", function () {
    it("Returns error: 'The wallet already contains the key for this address or script'", function (done) {
      const body = {
        "pubkey": Config.TEST_EXISTING_PUBKEY,
        "label": "label",
        "rescan": false
      };
      request("POST", "importpubkey", null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(500);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        expect(res.text).to.contain("The wallet already contains")
        done();
      });
    });
  });

  describe("importwallet", function () {
    it("Imports keys from a wallet dump file (see dumpwallet)", function (done) {
      const body = {
        "filename": Config.TEST_DUMP_WALLET_PATH
      };
      request("POST", "importwallet", null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

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

  //sendmany /* need to doublecheck if api specs are correct  */

  describe("sendtoaddress", function () {
    it("Send an amount to a given address", function (done) {
      const body = {
        "use_ps": false,
        "amount": 0.001,
        "syscoinaddress": Config.TEST_EXISTING_ADDRESS2,
        "use_is": false,
        "commentto": "commentto",
        "comment": "comment",
        "subtractfeefromamount": false
      };
      request("POST", "sendtoaddress", null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("signmessage", function () {
    it("Sign a message with the private key of an address", function (done) {
      const body = {
        "syscoinaddress": Config.TEST_EXISTING_ADDRESS1,
        "message": "message"
      };
      request("POST", "signmessage", null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

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

  describe("verifymessage", function () {
    it("Verify a signed message. Returns false", function (done) {
      const params = {
        syscoinaddress: Config.TEST_EXISTING_ADDRESS1,
        signature: "c2lnbmF0dXJl",
        message: "message"
      };
      request("GET", "verifymessage", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("walletpassphrasechange", function () {
    it("Changes the wallet passphrase from 'oldpassphrase' to 'newpassphrase'", function (done) {
      const body =
      {
        "oldpassphrase": Config.TEST_ENCRYPT_WALLET_PASSPHRASE,
        "newpassphrase": Config.TEST_ENCRYPT_WALLET_PASSPHRASE
      };
      request("POST", "walletpassphrasechange", null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

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

  describe("getaddresstxids", function () {
    it("Get address transaction ids", function (done) {
      const params = {
        addresses: [Config.TEST_EXISTING_ADDRESS1, Config.TEST_EXISTING_ADDRESS2],
        start: 1,
        end: 999999
      };
      request("GET", "getaddresstxids", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("getblockhashes", function () {
    it("Returns error 'No information available for block hashes'", function (done) {
      const params = {
        high: 1530735706,
        low: 1530735706
      };
      request("GET", "getblockhashes", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(500);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        expect(res.text).to.contain("No information available for block hashes")
        done();
      });
    });
  });

  describe("getblockheaders", function () {
    it("Returns information about blockheaders", function (done) {
      const params = {
        hash: Config.TEST_EXISTING_BLOCK_HASH1,
        count: 1,
        verbose: true
      };
      request("GET", "getblockheaders", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("getchaintips", function () {
    it("Returns chain tips", function (done) {
      request("GET", "getchaintips", null, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("getspentinfo", function () {
    it("Returns error: Unable to get spent info", function (done) {
      const params = {
        txid: Config.TEST_EXISTING_TXID,
        index: 0
      };
      request("GET", "getspentinfo", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(500);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        expect(res.text).to.contain("Unable to get spent info")
        done();
      });
    });
  });

  describe("getgovernanceinfo", function () {
    it("Returns governance parameters", function (done) {
      request("GET", "getgovernanceinfo", null, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("getpoolinfo", function () {
    it("Returns mixing pool related information", function (done) {
      request("GET", "getpoolinfo", null, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("getsuperblockbudget", function () {
    it("Returns the absolute maximum sum of superblock payments allowed", function (done) {
      const params = {
        index: Config.TEST_EXISTING_BLOCK_NUMBER
      };
      request("GET", "getsuperblockbudget", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("gobject", function () {
    it("Manage governance objects", function (done) {
      const params = {
        command: "count"
      };
      request("GET", "gobject", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("masternode", function () {
    it("Set of commands to execute masternode related actions", function (done) {
      const params = {
        command: "count"
      };
      request("GET", "masternode", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("masternodebroadcast", function () {
    it("Returns error: incorrect usage", function (done) {
      const params = {
        command: "decode"
      };
      request("GET", "masternodebroadcast", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(500);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("masternodelist", function () {
    it("Get a list of masternodes in different modes", function (done) {
      const params = {
        mode: "rank"
      };
      request("GET", "masternodelist", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("getaddressdeltas", function () {
    it("Return information about address deltas", function (done) {
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

  describe("getaddressmempool", function () {
    it("Return information about address mempool", function (done) {
      const params = {
        addresses: [Config.TEST_EXISTING_ADDRESS1, Config.TEST_EXISTING_ADDRESS2]
      };
      request("GET", "getaddressmempool", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("syscoinsendrawtransaction", function () {
    it("Returns error: 'transaction already in block chain'", function (done) {
      const body = {
        "instantsend": true,
        "allowhighfees": true,
        "hexstring": Config.TEST_TRX_HEX_STRING
      };
      request("POST", "syscoinsendrawtransaction", null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(500);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        expect(res.text).to.contain("transaction already in block chain")
        done();
      });
    });
  });

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

  describe("instantsendtoaddress", function () {
    it("Add inputs to a transaction until it has enough in value to meet its out value", function (done) {
      const body = {
        syscoinaddress: Config.TEST_EXISTING_ADDRESS2,
        amount: 0.01,
        comment: "comment",
        "comment-to": "comment-to",
        subtractfeefromamount: true
      };
      request("POST", "instantsendtoaddress", null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("fundrawtransaction", function () {
    it("Add inputs to a transaction until it has enough in value to meet its out value", function (done) {
      const body = {
        hexstring: Config.TEST_TRX_HEX_STRING,
        watching: true
      };
      request("POST", "fundrawtransaction", null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

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

  describe("signrawtransaction", function () {
    it("Sign inputs for raw transaction", function (done) {
      const body = {
        hexstring: Config.TEST_TRX_HEX_STRING,
      };
      request("POST", "signrawtransaction", null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("lockunspent", function () {
    it("Updates list of temporarily unspendable outputs", function (done) {
      const body = {
        "unlock": true,
        "transactions": [
          {
            "txid": Config.TEST_EXISTING_TXID,
            "vout": 0
          }
        ]
      };
      request("POST", "lockunspent", null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

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

  describe("getaddressutxos", function () {
    it("Returns all unspent outputs for addresses or aliases", function (done) {
      const body = {
        "addresses": [Config.TEST_EXISTING_ADDRESS1]
      };
      request("POST", "getaddressutxos", null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

});
