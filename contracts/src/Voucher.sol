// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Voucher {
    address public owner;
    mapping(bytes32 => uint) public vouchers; // Mapping from code hash to amounts in wei

    constructor() {
        owner = msg.sender;
    }

    // Modifier to restrict access to the owner
    modifier isOwner() {
        require(
            msg.sender == owner,
            "Only the owner can execute this operation"
        );
        _;
    }

    // Function to create a voucher
    // _codeHash: Hash of the voucher code
    // _etherAmount: Amount of ether (in wei) to be assigned to the voucher
    function createVoucher(
        bytes32 _codeHash,
        uint _etherAmount
    ) public payable {
        require(_etherAmount > 0, "The amount must be greater than 0");
        uint _amountInWei = _etherAmount; // amount in wei
        require(vouchers[_codeHash] == 0, "Voucher already exists");
        require(
            msg.value == _amountInWei,
            "The sent ether amount does not match the voucher amount"
        );

        vouchers[_codeHash] = _amountInWei;
    }

    // Function to claim a voucher
    // _code: The code to claim the voucher
    // _to: Address to send the ether to
    function claimVoucher(string memory _code, address _to) public {
        bytes32 codeHash = keccak256(abi.encodePacked(_code));
        uint amount = vouchers[codeHash];
        require(amount > 0, "Invalid or already used voucher");
        require(
            address(this).balance >= amount,
            "Contract insufficiently funded"
        );

        vouchers[codeHash] = 0; // Mark the voucher as used
        payable(_to).transfer(amount); // Transfer the ether to the provided address
    }

    // Fallback function to receive ether
    receive() external payable {}

    // Function to withdraw the ether from the contract by the owner
    function withdraw() public isOwner {
        payable(owner).transfer(address(this).balance);
    }
}
