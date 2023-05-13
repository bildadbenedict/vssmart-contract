require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("./scripts/tasks/block-number")

/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
        },

        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
        mocha: {
            timeout: 40000,
        },
    },
    solidity: "0.8.18",
    // etherscan: {
    //     apikey: ETHERSCAN_API_KEY,
    // },
    etherscan: {
        apiKey: {
            sepolia: ETHERSCAN_API_KEY,
        },
    },
}
