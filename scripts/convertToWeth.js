const { ethers } = require("hardhat")
const { networkConfig } = require("../helper-hardhat-config")

const chainId = network.config.chainId

async function convertToWeth(account, amount) {
    const wethContract = await ethers.getContractAt(
        "IWETH",
        networkConfig[chainId]["wethContractAddress"],
        account
    )

    const txDeposit = await wethContract.deposit({ value: amount })
    await txDeposit.wait(1)

    const wethBalance = await wethContract.balanceOf(account)

    console.log(`WETH Deposit Successful!!! Weth Balance is: ${wethBalance}`)
}

module.exports = { convertToWeth }
