

var Verifier = artifacts.require('Verifier');
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

contract('TestSolnSquareVerifier', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[9];

    const { proof, inputs } = {
        "proof": {
            "a": ["0x302cc6dcb61c6dfcbb99e680bd5b58f2a3a9502e97a18b7a65aa6e0605b67213", "0x098fc6dee9e9e622e75247d1d1099899ad858ffc5aa6d8f4adf0ba6a404b8133"],
            "b": [["0x0e9406711a18b050318e92d2f22b6126e8e9a4bea248b20518f6358238c1a1a7", "0x04dc1232a4da3053259e254298992640cc9386e3aa78fd5a3fec9f01ab23acb0"], ["0x2b5348334654d36ff480f1033e99cb4cf961e76c5a54074c176e2d90c7a25412", "0x04195b97fe231539c35add33d324b879a15e85dcebf7c74993971eef296dc5b7"]],
            "c": ["0x1374dc843afc5064a31e4277a24dcac6b64369875f151c47093e81f7086ed8f0", "0x25461ae652073d53117038dd66a865d6141d2a8668ed085971c26fc806eb9c97"]
        },
        "inputs": ["0x0000000000000000000000000000000000000000000000000000000000406d0e", "0x0000000000000000000000000000000000000000000000000000000000000000"]

    };

    describe('SolnSquareVerifier test', function () {
        beforeEach(async function () {
            contractVerifier = await Verifier.new({from: account_one});
            this.contract = await SolnSquareVerifier.new(contractVerifier.address, {from: account_one});
        })


        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('Test if a new solution can be added for contract - SolnSquareVerifier', async function () {
            const result = await this.contract.addSolution(proof.a, proof.b, proof.c, inputs);
            assert.equal(result.logs[0].event, 'AddedSolution', "A new solution should be added for contract - SolnSquareVerifier");
        })
        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('Test if an ERC721 token can be minted for contract - SolnSquareVerifier', async function () {
            var result = 'Error'; 
            try {
                result = await this.contract.mint(proof.a, proof.b, proof.c, inputs, account_two, 1);
                //console.log(JSON.stringify(result));    
            } catch (e) {
                console.log(e);            
            }
            assert.equal(result.logs[0].event, 'AddedSolution', "A token should be minted for contract - SolnSquareVerifier");

        })
    });
})