# Syscoin API
Syscoin API is a lightweight API server for interacting with [Syscoin's](http://syscoin.org) decentralized service network. Syscoin API uses [node-syscoin](https://github.com/syscoin/node-syscoin) and although the instruction automatically install it using node, it is recommended that you manually clone it to make sure you always have the latest version.

# Setup

Syscoin API is intended to be easy to setup, while in beta [node-syscoin](https://github.com/syscoin/node-syscoin) will have to be manually updated.

- Clone Syscoin-API into the location of your choosing, making sure you are cloning this onto a server that has the Syscoin [**1.5.2 beta4**](https://github.com/syscoin/syscoin/releases/tag/1.5.2b4) wallet running on it, as these commands are structured for the current beta wallet.
```
root@server:~# git clone https://github.com/syscoin/syscoin-api.git
```
- NodeJS must be installed, so that you can more easily install the Syscoin API dependencies. Once you've cloned Syscoin API change into its directory and install the node dependencies.
```
root@server:~# cd syscoin-api
root@server:syscoin-api# sudo npm install
```
- This will create a *node_modules* folder within your syscoin-api directory. Remember because this is still in beta you will want to manually manage the *node-syscoin* node lib. Browse to *syscoin-api/node_modules* and if you see a node-syscoin directory, delete it and manually clone the latest.
```
root@server:node_modules# rm -rf node-syscoin
root@server:node_modules# git clone https://github.com/syscoin/node-syscoin.git
```
- Finally, you'll need to setup the security information for your server. First you'll need to enter the Syscoin API access information in config.js, this username/password will be required to access certain features depending on the front end using the API. In the case of [Blockmarket](https://github.com/syscoin/blockmarket) these act as your admin username and password. Here you can also specify the URL and port the API is accessed via.
```
//config for app
config.port = 8081;
config.host = "http://127.0.0.1";
config.username = "admin";
config.password = "admin";
```

Finally you'll need to enter the information needed for the Syscoin API to connect to the wallet hosting your services/items/aliases/etc:

```
//config for sysclient
config.syscoin = {};
config.syscoin.user = "rpcuser";
config.syscoin.password = "asdfkjdfhvkchbkhadkjwhekfbevsdbdcksjdhfksjkfklshfk";
config.syscoin.host = "127.0.0.1";
config.syscoin.port = 8336;
config.syscoin.timeout = 15000000;
```

**You're good to go! Now start building some application with Syscoin services!**

# Continued Development

Syscoin-API is still in an iterative beta phase. We encourage community and developer feedback. If you feel you can lend to the effort or improve the implementation **please issue pull requests** and we will review and merge them into the master branch.

