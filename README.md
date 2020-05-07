# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Instructions - how to test the code

# Project details

## Contract Addresses

## Contract Abi's 

## OpenSea MarketPlace 

## Storefront link


# Truffle migrate to network rinkeby output

```

$ truffle migrate --network rinkeby

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 0x989680


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        6448642
   > block timestamp:     1588885049
   > account:             0xB37576d2b725b6DED49dFB438631D79A9B60Ca11
   > balance:             18.664042756
   > gas used:            210237
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00210237 ETH

   -------------------------------------
   > Total cost:          0.00210237 ETH


2_deploy_contracts.js
=====================

   Deploying 'SquareVerifier'
   --------------------------
   > block number:        6448644
   > block timestamp:     1588885057
   > account:             0xB37576d2b725b6DED49dFB438631D79A9B60Ca11
   > balance:             18.653844576
   > gas used:            992455
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00992455 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > block number:        6448645
   > block timestamp:     1588885093
   > account:             0xB37576d2b725b6DED49dFB438631D79A9B60Ca11
   > balance:             18.623226166
   > gas used:            3061841
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03061841 ETH

   -------------------------------------
   > Total cost:          0.04054296 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.04264533 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x989680


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xa311cb6fc0feeca5e9ba03781aeeab3d8e2e40c5fba9b9d6ad528163763167f3
   > Blocks: 0            Seconds: 8
   > contract address:    0x90Aa86519aa9b783AA3eebC9B22E3C6bA09700d2
   > block number:        6448646
   > block timestamp:     1588885128
   > account:             0xB37576d2b725b6DED49dFB438631D79A9B60Ca11
   > balance:             18.663892756
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

   Deploying 'SquareVerifier'
   --------------------------
   > transaction hash:    0xedff1e117dc338c815c9bba9d03043db2c92d9ba03b3d6766ca1d62a1f0d6e91
   > Blocks: 0            Seconds: 8
   > contract address:    0x2c389E6C2f9f5B8A9d600d4c0606826a272CbB2a
   > block number:        6448648
   > block timestamp:     1588885158
   > account:             0xB37576d2b725b6DED49dFB438631D79A9B60Ca11
   > balance:             18.653544576
   > gas used:            992455
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00992455 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x72ce8cce534d318bd356f492e52b53b33189002a6890b716d24b1ad7aa73e519
   > Blocks: 0            Seconds: 8
   > contract address:    0x7FcbA272e9632Bb7529B2FD71D062E94fC5a6B11
   > block number:        6448649
   > block timestamp:     1588885173
   > account:             0xB37576d2b725b6DED49dFB438631D79A9B60Ca11
   > balance:             18.621276166
   > gas used:            3226841
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03226841 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04219296 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.04444533 ETH


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
zokrates export-verifier
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
