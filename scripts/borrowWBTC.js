async function borrowWBTC(lendingPool, wBTCAddress, amount, deployer) {
    const tx = await lendingPool.borrow(wBTCAddress, amount, 1, 0, deployer)
    await tx.wait(1)

    console.log(`Successfully Borrowed ${amount} of ${wBTCAddress}!!!`)
}

module.exports = { borrowWBTC }
