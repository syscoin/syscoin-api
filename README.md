###### Important Note: These instructions are beta and are intended to be used with the latest BETA release of the [Syscoin Wallet](https://github.com/syscoin/syscoin/releases)
# Syscoin API
Syscoin API is a lightweight API server for interacting with [Syscoin's](http://syscoin.org) decentralized service network. Syscoin API uses [node-syscoin](https://github.com/syscoin/node-syscoin) and although the instruction automatically install it using node, it is recommended that you manually clone it to make sure you always have the latest version.

# Setup

Syscoin API is intended to be easy to setup, while in beta [node-syscoin](https://github.com/syscoin/node-syscoin) will have to be manually updated.

1. Clone Syscoin-API into the location of your choosing, making sure you are cloning this onto a server that has the Syscoin [**1.5.2 beta4**](https://github.com/syscoin/syscoin/releases/tag/1.5.2b4) wallet running on it, as these commands are structured for the current beta wallet.
```
root@server:~# git clone https://github.com/syscoin/syscoin-api.git
```
 
2. NodeJS must be installed, so that you can more easily install the Syscoin API dependencies. Once you've cloned Syscoin API change into its directory and install the node dependencies.
```
root@server:~# cd syscoin-api
root@server:syscoin-api# sudo npm install
```
 
3. This will create a *node_modules* folder within your syscoin-api directory. Remember because this is still in beta you will want to manually manage the *node-syscoin* node lib. Browse to *syscoin-api/node_modules* and if you see a node-syscoin directory, delete it and manually clone the latest.
```
root@server:node_modules# rm -rf node-syscoin
root@server:node_modules# git clone https://github.com/syscoin/node-syscoin.git
```
 
4. Configuring the Syscoin wallet. Now that Syscoin-API is mostly setup you'll need to close the Syscoin wallet you plan to run the API from and modify Syscoin.conf (located in your Syscoin data directory) so that your wallet can act as a server. The rpcpassword and port here are very important, with it other users could access and empty your wallet. Make sure you use a secure password and that the port you select is only open to the server hosting the Syscoin-API. It is recommended that you run the API and the Syscoin wallet on the same box. 
 
Here is an example of what your Syscoin.conf should look like to enable it to act as an RPC server. This sample configuration's values are specific to step 5, change them for your server. Make sure to use the new values in step 5:
 ```
 rpcuser=rpcuser
 rpcpassword=asdfkjdfhvkchbkhadkjwhekfbevsdbdcksjdhfksjkfklshfk
 rpcallowip=127.0.0.1
 rpcport=8336
 server=1
 ```
 
5. Finally, you'll need to setup the security information for your server. First you'll need to enter the Syscoin API access information in config.js, this username/password will be required to access certain features depending on the front end using the API. In the case of [Blockmarket](https://github.com/syscoin/blockmarket) these act as your admin username and password. Here you can also specify the URL and port the API is accessed via.
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

