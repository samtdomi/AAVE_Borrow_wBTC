// 1. use chainlink directly aggregatorV3 to get price
// 2. use AAVEOracle to get price - which uses chainlink

const { networkConfig } = require("../helper-hardhat-config")

async function getBitcoinEthPrice(account) {
    priceFeed = networkConfig[chainId]["bitcoinEthPriceFeed"]

    const btcEthPriceFeed = await ethers.getContractAt(
        "AggregatorV3Interface",
        priceFeed,
        account
    )

    const btcEthPrice = (await btcEthPriceFeed.latestRoundData())[1]

    return btcEthPrice
}

module.exports = { getBitcoinEthPrice }
