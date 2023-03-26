async function getUserAccountData(lendingPool, account) {
    const { totalCollateralBase, totalDebtBase, availableBorrowsBase } =
        await lendingPool.getUserAccountData(account)

    console.log(`Your Total Collateral Is: ${totalCollateralBase}`)
    console.log(`Your Total Debt Is: ${totalDebtBase}`)
    console.log(`You Have ${availableBorrowsBase} Available To Borrow`)

    return { totalCollateralBase, totalDebtBase, availableBorrowsBase }
}

module.exports = { getUserAccountData }
