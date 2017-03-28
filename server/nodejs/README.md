## Running the server
Prior to running the server a Syscoin node must be installed and properly configured as a JSON-RPC server. After being configured the syscoin-api server 
needs to know the location of syscoin.conf using the `SYS_LOCATION` environmental variable, replacing DATALOCATION in the examples below 
with the path to your Syscoin data directory, including the trailing slash.

To run the server, follow these simple steps:

```
npm install
SYS_LOCATION=DATALOCATION npm run start
```

## Running the server in daemon mode
Running the server in daemon mode is dependent on [pm2](https://www.npmjs.com/package/pm2). To run the server as a daemon use the below command after `npm install` completes:

```
SYS_LOCATION=DATALOCATION npm run startd
```

## Configuring for Production Use
Before deploying syscoin-api for production use you will need to modify the `swaggerSpec.host` value located in `../../swagger-ui/dist/swagger-spec.js` from 
`localhost:8001` to `SERVERIP:8001`. Replacing SERVERIP with your server's production IP or domain. You can also optionally change the port. It is highly recommended that you 
allow only HTTPS access in production and secure connections with a valid SSL certificate.


### Credits
This project leverages the mega-awesome [swagger-tools](https://github.com/apigee-127/swagger-tools) middleware which does most all the work.
