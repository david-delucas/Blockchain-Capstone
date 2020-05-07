pragma solidity >=0.4.21 <0.6.0;

import "./ERC721Mintable.sol";
import "./Verifier.sol";
import 'openzeppelin-solidity/contracts/drafts/Counters.sol';



// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract SquareVerifier is Verifier {

}


// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is CustomERC721Token {
    using Counters for Counters.Counter;

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        address account;
        Counters.Counter index;
    }

    SquareVerifier internal verifier;


    constructor(address _account) public
    {
        verifier = SquareVerifier(_account);
    }

    // TODO define an array of the above struct
    // TODO define a mapping to store unique solutions submitted
    mapping (bytes32 => Solution) private solutions;



    // TODO Create an event to emit when a solution is added
    event AddedSolution(address account);


    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution
                        (
                            uint[2] memory a,
                            uint[2][2] memory b,
                            uint[2] memory c,
                            uint[2] memory input
                        )
                        public
                        returns (bytes32 key)
    {
        key = keccak256(abi.encodePacked(a, b, c, input));
        Solution storage solution = solutions[key];
        solution.account = msg.sender;
        solution.index.increment();

        solutions[key] = solution;

        emit AddedSolution(msg.sender);
    }



    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mint
                    (
                        uint[2] memory a,
                        uint[2][2] memory b,
                        uint[2] memory c,
                        uint[2] memory input,
                        address to,
                        uint256 tokenId
                    )
                    public
                    returns (bool)
    {
        require(verifier.verifyTx(a, b, c, input), "Solution is not verified");
        addSolution(a, b, c, input);
        return super.mint(to, tokenId);
    }




}






















