;const HDWalletProvider = require("truffle-hdwallet-provider")
const web3 = require('web3');

const fs = require('fs');
const MNEMONIC = fs.readFileSync("../.secret").toString().trim();
//const MNEMONIC = process.env.MNEMONIC

const INFURA_KEY = process.env.INFURA_KEY;
const NFT_CONTRACT_ADDRESS = "0x7FcbA272e9632Bb7529B2FD71D062E94fC5a6B11";
const OWNER_ADDRESS = "0xB37576d2b725b6DED49dFB438631D79A9B60Ca11";
const NETWORK = "rinkeby";
const NUM_PROPERTIES = 10;


const NFT_CONTRACT = require('./build/contracts/SolnSquareVerifier');
const NFT_ABI = NFT_CONTRACT.abi;

const PROPERTY_PROOFS = [
    require('../zokrates/proof1.json'),
    require('../zokrates/proof2.json'),
    require('../zokrates/proof3.json'),
    require('../zokrates/proof4.json'),
    require('../zokrates/proof5.json'),
    require('../zokrates/proof6.json'),
    require('../zokrates/proof7.json'),
    require('../zokrates/proof8.json'),
    require('../zokrates/proof9.json'),
    require('../zokrates/proof10.json'),
];

async function main() {
    const provider = new HDWalletProvider(MNEMONIC, `https://${NETWORK}.infura.io/v3/${INFURA_KEY}`);
    const web3Instance = new web3(
        provider
    );

    const nftContract = new web3Instance.eth.Contract(NFT_ABI, NFT_CONTRACT_ADDRESS, { gasLimit: "1000000" });

    // Properties issued directly to the owner.
    for (let i = 0; i < NUM_PROPERTIES; i++) {
        if (i < PROPERTY_PROOFS.length) {
            const tokenId = Math.floor(Math.random() * 10000);
            try {
                const {proof: {a, b, c}, inputs} = PROPERTY_PROOFS[i];
                const result = await nftContract.methods.mint(
                    a,
                    b,
                    c,
                    inputs,
                    OWNER_ADDRESS,
                    tokenId,
                ).send({ from: OWNER_ADDRESS, gas:3000000 });
                console.log("Minted property token. Transaction: " + result.transactionHash);
            } catch (error) {
                console.log("Cannot mint token: " + error);
            }
        } else {
            console.log("Cannot mint tokens. All proofs have been used.");
            break;
        }
    }
}

main();