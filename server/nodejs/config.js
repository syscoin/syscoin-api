var config = {};

//decide wether to use the live testnet or local isolated net
if(process.env.ISOLATED){
    //leave blank for default location of /root/.syscoin/ (must include trailing slash)
    config.sys_location = process.env.SYS_ISO_LOCATION || "/root/.syscoin/";
}
else if(process.env.CONFIG){
    config.sys_location = process.env.SYS_CONFIG_LOCATION || "/root/.syscoin/";
}else{
    //use in CONFIG mode by default
    config.sys_location = process.env.SYS_CONFIG_LOCATION || "/root/.syscoin/";
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