var ERC721MintableComplete = artifacts.require('CustomERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_one, 1);
            await this.contract.mint(account_one, 2);
            await this.contract.mint(account_one, 3);
            await this.contract.mint(account_one, 4);
            await this.contract.mint(account_one, 5);
            await this.contract.mint(account_one, 6);
            await this.contract.mint(account_one, 7);
            await this.contract.mint(account_one, 8);
            //await this.contract.mint(account_two, 9);
            //await this.contract.mint(account_two, 10);

        })

        it('should return total supply', async function () { 
            const result = await this.contract.totalSupply();
            assert.equal(result, 8,"Incorrect total supply" );

        })

        it('should get token balance', async function () { 
            const result = await this.contract.balanceOf.call(account_one);
            assert.equal(result, 8, "Incorrect token balance for account #1" );

            const result2 = await this.contract.balanceOf.call(account_two);
            assert.equal(result2,0,"Incorrect token balance for account #2");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            const result = await this.contract.tokenURI(1);
            assert.equal(result, 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1' , "Incorrect URI");
          
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.approve(account_two, 1);
            await this.contract.transferFrom(account_one, account_two, 1);

            const _owner = await this.contract.ownerOf(1);
            assert.equal(_owner,account_two, "Incorrect owner for token, should be account #2");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            var result = false;
            try {
                await this.contract.mint(account_one, 1, { from: account_two });
            } catch (e) {
                console.log(e.reason);
                result = true;
            }
            assert.equal(result,true,"Mint should fail as the address is not contract owner");
        })

        it('should return contract owner', async function () { 
            const result = await this.contract.getOwner.call();
            assert.equal(result, account_one,"Account # 1 should be the owner of the contract");            
        })

    });
})