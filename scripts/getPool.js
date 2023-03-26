const { ethers, getNamedAccounts } = require("hardhat")
const { networkConfig } = require("../helper-hardhat-config")

const chainId = network.config.chainId

async function getLendingPool(account) {
    const lendingPoolAddressesProvider = await ethers.getContractAt(
        "IPoolAddressesProvider",
        networkConfig[chainId]["poolAddressesProviderAddress"],
        account
    )

    const poolAddress = await lendingPoolAddressesProvider.getPool()

    console.log(`Lending Pool Located At: ${poolAddress}`)

    return poolAddress
}

module.exports = { getLendingPool }
