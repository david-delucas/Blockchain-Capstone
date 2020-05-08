# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Instructions - how to test the code

# Project details

## Contract Addresses

SolnSquareVerifier:

- https://rinkeby.etherscan.io/address/0x8b6B4D9069F02b582a63FcB65be0F73F4e958367


## Contract Abi's 

## OpenSea MarketPlace 

## Storefront link


# Truffle migrate to network rinkeby output

```



Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x989680


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x89af0631f738a7b5e2bdd129b9b3c1d3369763ea664e2a1c20a4e57fad5dae75
   > Blocks: 0            Seconds: 13
   > contract address:    0xD474A23080e47700FB80cfE1FaF4ebE99cF84890
   > block number:        6451160
   > block timestamp:     1588922838
   > account:             0xB37576d2b725b6DED49dFB438631D79A9B60Ca11
   > balance:             18.618750166
   > gas used:            225237
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00225237 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00225237 ETH


2_deploy_contracts.js
=====================

   Deploying 'CustomERC721Token'
   -----------------------------
   > transaction hash:    0xaf5968507df5ac65172d00cb66dbc776cf93ade0f7b58a27e99bb4f0d03c3b13
   > Blocks: 0            Seconds: 9
   > contract address:    0x6Fc597dDa0C1Deb50E7F3C78cA3C933Adc55C44A
   > block number:        6451162
   > block timestamp:     1588922868
   > account:             0xB37576d2b725b6DED49dFB438631D79A9B60Ca11
   > balance:             18.590628386
   > gas used:            2769815
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02769815 ETH


   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x46cd5dc2af03612814450bdb28739a85b160fb7e914cd3b56bc073abc49acfe5
   > Blocks: 0            Seconds: 8
   > contract address:    0x146fE3ca1F582D1Ddc1EC7CF5aE4c001ee5b702F
   > block number:        6451163
   > block timestamp:     1588922883
   > account:             0xB37576d2b725b6DED49dFB438631D79A9B60Ca11
   > balance:             18.580703836
   > gas used:            992455
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00992455 ETH


   Deploying 'SquareVerifier'
   --------------------------
   > transaction hash:    0x02c24d3851cceb5f6f20dd562da99429d57172ba841c19642bc9ace1ef78a232
   > Blocks: 0            Seconds: 8
   > contract address:    0x09d8e2123B4D1c2F956964223E8B4669C9F59504
   > block number:        6451164
   > block timestamp:     1588922898
   > account:             0xB37576d2b725b6DED49dFB438631D79A9B60Ca11
   > balance:             18.570779286
   > gas used:            992455
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00992455 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xf25efb86eb748405ad9666667a0e06b62134f91aa677a446dfa544729cb1fda6
   > Blocks: 0            Seconds: 9
   > contract address:    0x8b6B4D9069F02b582a63FcB65be0F73F4e958367
   > block number:        6451165
   > block timestamp:     1588922913
   > account:             0xB37576d2b725b6DED49dFB438631D79A9B60Ca11
   > balance:             18.538510756
   > gas used:            3226853
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03226853 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.07981578 ETH


Summary
=======
> Total deployments:   5
> Final cost:          0.08206815 ETH




```

# Misc. code

```

ganache-cli -l 9999999999999 -g 1 -a 50 -e 10000 -m "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat"

```


```
# compile
zokrates compile -i root.zok
# perform the setup phase
zokrates setup
# execute the program
zokrates compute-witness -a 2 4
# generate a proof of computation
zokrates generate-proof
# export a solidity verifier
zokrates export-verifie

...
zokrates generate-proof -j proof9
zokrates generate-proof -j proof10
...


```

```
truffle migrate --network rinkeby
```


# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
