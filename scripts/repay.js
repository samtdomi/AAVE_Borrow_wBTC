async function repay(lendingPool, wBTCAddress, amount, deployer) {
    const tx = await lendingPool.repay(wBTCAddress, amount, 1, deployer)
    await tx.wait(1)

    console.log(`Successfully repaid ${amount} of ${wBTCAddress}`)
}

module.exports = { repay }
