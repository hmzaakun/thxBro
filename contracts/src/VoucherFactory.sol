// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./Voucher.sol";

contract VoucherFactory {
    address public owner;
    Voucher[] public voucherContracts;

    constructor() {
        owner = msg.sender;
    }

    modifier isOwner() {
        require(
            msg.sender == owner,
            "Only the owner can execute this operation"
        );
        _;
    }

    event VoucherContractCreated(address voucherAddress);

    function createVoucherContract(
        bytes32[] memory _codeHashes,
        uint _etherAmount
    ) public payable isOwner {
        Voucher newVoucher = new Voucher{value: msg.value}(
            owner,
            _codeHashes,
            _etherAmount
        );
        voucherContracts.push(newVoucher);
        emit VoucherContractCreated(address(newVoucher));
    }

    function getVoucherContracts() public view returns (Voucher[] memory) {
        return voucherContracts;
    }
}
