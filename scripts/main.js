const { getNamedAccounts } = require("hardhat")
const { getLendingPool } = require("./getPool")
const { convertToWeth } = require("./convertToWeth")
const { approveWeth } = require("./approveWeth")
const { networkConfig } = require("../helper-hardhat-config")
const { getUserAccountData } = require("./getUserAccountData")
const { getBitcoinEthPrice } = require("./getBitcoinEthPrice")
const { borrowWBTC } = require("./borrowWBTC")
const { repay } = require("./repay")

async function aaveProcess() {
    const chainId = network.config.chainId
    const { deployer } = await getNamedAccounts()
    const amount = ethers.utils.parseEther("0.02")

    // SCRIPT: Convert ETH to Weth
    await convertToWeth(deployer, amount)

    // SCRIPT: get up to date lendingPool address
    const lendingPoolAddress = await getLendingPool(deployer)

    // SCRIPT: approve aave lendingPool to spend your weth
    await approveWeth(lendingPoolAddress, amount, deployer)

    // deposit to aave lendingPool
    const lendingPool = await ethers.getContractAt(
        "IPool",
        lendingPoolAddress.toString(),
        deployer
    )
    await lendingPool.deposit(
        networkConfig[chainId]["wethContractAddress"],
        amount,
        deployer,
        0
    )

    // SCRIPT: GetBorrowUserData after depositing to lendingPool
    let { totalCollateralBase, totalDebtBase, availableBorrowsBase } =
        await getUserAccountData(lendingPool, deployer)

    // SCRIPT: get Bitcoin/ETH Price
    const btcEthPrice = await getBitcoinEthPrice(deployer)

    // figure out how much wBTC to borrow
    const amountWbtcToBorrow =
        availableBorrowsBase.toString() * 0.95 * (1 / btcEthPrice.toNumber())
    const amountWbtcToBorrowWei = await ethers.utils.parseEther(
        amountWbtcToBorrow.toString()
    )

    // SCRIPT: Borrow wBTC
    const wBTCAddress = networkConfig[chainId][wBTCAddress]
    await borrowWBTC(lendingPool, wBTCAddress, amount, deployer)

    // SCRIPT: get updated UserAccountData
    await getUserAccountData(lendingPool, deployer)

    // SCRIPT: Repay
    await repay(lendingPool, wBTCAddress, amount, deployer)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
