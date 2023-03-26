
The puprose of this project is to familiarize myself with the AAVE protocol by depositing ETH - followed by borrowing, and repaying Wrapped Bitcoin.

PROTOCOLS USED: 
1. AAVE 
2. CHAINLINK 

- Convert ETH to wETH so that it can be used within the AAVE protocol (AAVE only works with ERC20's)

- get the most up to date AAVE lending pool contract by using the lendingPoolAddresses contract 

- APPROVE the AAVE lending pool contract to make a transaction with our wETH 

- deposit wETH to AAVE lending pool

- get our updated account data

- get the BTC/ETH price using CHAINLINK AGGREGATORV3 contract and BTC/ETH PRICE FEED ADDRESS
- determine the amount of wBTC to borrow 

- borrow wBTC from the AAVE lending pool

- get our updated account info after borriwng wBTC

- repay wBTC back to the AAVE protocol 
