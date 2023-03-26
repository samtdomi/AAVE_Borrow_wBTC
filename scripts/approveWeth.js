const { ethers } = require("hardhat")
const { networkConfig } = require("../helper-hardhat-config")

const chainId = network.config.chainId

async function approveWeth(spender, amount, account) {
    const wethContract = await ethers.getContractAt(
        "IWETH",
        networkConfig[chainId]["wethContractAddress"],
        account
    )

    const tx = await wethContract.approve(spender, amount)
    await tx.wait(1)

    console.log(`${spender} is approved for a maximum ${amount} WETH`)
}

module.exports = { approveWeth }
