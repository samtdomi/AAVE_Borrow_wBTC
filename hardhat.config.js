require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("hardhat-deploy")

const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL // alchemy mainnet rpc url
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY // etherscan
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY // coinmarketcap

module.exports = {
    solidity: {
        compilers: [
            { version: "0.8.17" },
            { version: "0.4.19" },
            { version: "0.6.12" },
            { version: "0.8.0" },
        ],
    },

    namedAccounts: {
        deployer: {
            default: 0,
        },
        player: {
            default: 1,
        },
    },

    networks: {
        hardhat: {
            chainId: 31337,
            forking: {
                url: MAINNET_RPC_URL,
            },
        },
    },

    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },

    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY,
        token: "MATIC",
    },

    mocha: {
        // time limit for the Promise and Listener in test.js
        // if the listener doesnt get resolved in 300 seconds, its error's out
        timeout: 500000, // 500,000 miliseconds, 500 seconds
    },
}
