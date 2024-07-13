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

    function createVoucherContract() public isOwner {
        Voucher newVoucher = new Voucher(owner);
        voucherContracts.push(newVoucher);
        emit VoucherContractCreated(address(newVoucher));
    }

    function getVoucherContracts() public view returns (Voucher[] memory) {
        return voucherContracts;
    }
}
