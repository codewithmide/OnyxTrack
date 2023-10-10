require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: 'sepolia',
  networks: {
    'sepolia': {
      url: 'https://rpc.sepolia.org',
      accounts: [process.env.PRIVATE_KEY],
    }
  }
};
