function createCustomWalletPercentageInfoResponse(walletPercentage) {
    const infoObj = {
      version: -1,
      protocolversion: -1,
      walletversion: -1,
      balance: walletPercentage,
      blocks: 0,
      timeoffset: 0,
      connections: 0,
      proxy: "WalletPercentage",
      difficulty: 0,
      testnet: false,
      keypoololdest: 0,
      keypoolsize: 0,
      unlocked_until: 0,
      paytxfee: 0,
      relayfee: 0,
      errors: "WalletPercentageMessage"
    }
    return infoObj;
  }
  
function extractWalletPercentageFromGetInfoResponseMessage(jsonErrorMessage) {
    if (!jsonErrorMessage) {
      return "0";
    }
  
    const firstBracketIndex = jsonErrorMessage.indexOf("(");
    const endIndex = jsonErrorMessage.indexOf(" %)");
    if (firstBracketIndex === -1 || endIndex === -1) {
      return "0";
    }
    return jsonErrorMessage.substring(firstBracketIndex+1,endIndex-1); 
  }

function getInfoResponseIsWalletPercentageResponse(jsonError) {
    return jsonError 
    && jsonError.code === -28
    && jsonError.message
    && jsonError.message.indexOf("(") !== -1
    && jsonError.message.indexOf(" %)") !== -1;
  }

module.exports.createCustomWalletPercentageInfoResponse = createCustomWalletPercentageInfoResponse;
module.exports.extractWalletPercentageFromGetInfoResponseMessage  = extractWalletPercentageFromGetInfoResponseMessage;
module.exports.getInfoResponseIsWalletPercentageResponse = getInfoResponseIsWalletPercentageResponse;