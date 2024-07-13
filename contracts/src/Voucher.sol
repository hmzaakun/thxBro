// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract Voucher is ReentrancyGuard {
    address public owner;
    mapping(bytes32 => uint) public vouchers; // Mapping from code hash to amounts in wei

    constructor(address _owner) {
        owner = _owner;
    }

    modifier isOwner() {
        require(
            msg.sender == owner,
            "Only the owner can execute this operation"
        );
        _;
    }

    function createVouchers(
        bytes32[] memory _codeHashes,
        uint _etherAmount
    ) public payable isOwner {
        require(_etherAmount > 0, "Amount must be greater than 0");
        uint _totalAmountInWei = _etherAmount * _codeHashes.length; // total amount in wei
        require(
            msg.value == _totalAmountInWei,
            "Sent Ether amount does not match the total voucher amount"
        );

        for (uint i = 0; i < _codeHashes.length; i++) {
            require(vouchers[_codeHashes[i]] == 0, "Voucher already exists");
            vouchers[_codeHashes[i]] = _etherAmount;
        }
    }

    // Function to claim a voucher
    function claimVoucher(
        string memory _code,
        address _to
    ) public isOwner nonReentrant {
        bytes32 codeHash = keccak256(abi.encodePacked(_code));
        uint amount = vouchers[codeHash];
        require(amount > 0, "Invalid or already used voucher");
        require(
            address(this).balance >= amount,
            "Contract insufficiently funded"
        );

        vouchers[codeHash] = 0;
        (bool success, ) = payable(_to).call{value: amount}("");
        require(success, "Transfer failed");
    }

    receive() external payable {}
}
