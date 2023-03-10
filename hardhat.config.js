/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")

module.exports = {
  
  networks: {
    hardhat: {
      chainId: 1337
    },

   
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["349eb4a52a82381d31cf49b654557451b882ce26b3af1fbc4b82ec8ff1e50d78"],
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}

