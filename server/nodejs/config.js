var config = {};

var defaultSyscoinConfigLocation = "/root/.syscoin/"

var setupIntegratedMode = (envArgument, envArgumentIdentifier, preamble, friendlyModeName) => {
    console.log(`Running Syscoin API in '${friendlyModeName}' API run mode.\n${preamble}`);
    if (envArgument) {
        config.sys_location = envArgument;
        console.log(`${envArgumentIdentifier} was set, using syscoin.conf path of '${config.sys_location}'`);
    }
    else {
        config.sys_location = defaultSyscoinConfigLocation;
        console.log(`Warning: SYSCOIN_CONFIG_ISOLATED_LOCATION was not set.  Check your .env file!`);
        console.log(`Using default syscoin.conf path of '${defaultSyscoinConfigLocation}'`)
    }
};

if (!process.env.APIRUNMODE) {
    console.log(`Running Syscoin API without setting APIRUNMODE (should be 'isolated' or 'integrated').  Attempting to run in integrated mode.`);
    setupIntegratedMode(process.env.SYSCOIN_CONFIG_INTEGRATED_LOCATION, 
        "SYSCOIN_CONFIG_INTEGRATED_LOCATION",
        `This is intended to be running off of an integrated instance (normally an official release) of syscoin.`,
        `integrated`);
}
else if (process.env.APIRUNMODE === 'isolated') {
    setupIntegratedMode(process.env.SYSCOIN_CONFIG_ISOLATED_LOCATION, "SYSCOIN_CONFIG_ISOLATED_LOCATION",
    `This is intended to be running off of an isolated instance (possibly custom build) of syscoin.`,`isolated`);
}
else if (process.env.APIRUNMODE === 'integrated') {
    setupIntegratedMode(process.env.SYSCOIN_CONFIG_INTEGRATED_LOCATION, "SYSCOIN_CONFIG_INTEGRATED_LOCATION",
    `This is intended to be running off of an integrated instance (normally an official release) of syscoin.`,`integrated`);
}

config.debugEnabled = process.env.DEBUG || false;
config.methodsWithLoggingDisabled = process.env.METHODS_WITH_LOGGING_DISABLED ? JSON.parse(process.env.METHODS_WITH_LOGGING_DISABLED) : [];

config.api_secret = "iamapisecret";
config.secure = process.env.SECURE || true;
config.port = process.env.PORT || 8001;

//NOTE: SECURE INFO SHOULD NOT BE COMMITTED TO PUBLIC GIT
//mongodb config, offchain_url should include trailing slash!
config.mongodb = {
  database_url: process.env.MONGODB_URL || "",
  offchain_url: "http://offchain-testnet.syscoin.org/aliasdata/"
};



module.exports = config;