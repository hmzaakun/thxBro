// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./Voucher.sol";

contract VoucherFactory {
    address public owner;
    Voucher[] public voucherContracts;
    mapping(string => address) public voucherAddresses; // Mapping from voucher name to voucher address

    constructor(address _relayer) {
        owner = _relayer;
    }

    modifier isOwner() {
        require(
            msg.sender == owner,
            "Only the owner can execute this operation"
        );
        _;
    }

    event VoucherContractCreated(string name, address voucherAddress);

    function createVoucherContract(
        string memory _name,
        bytes32[] memory _codeHashes,
        uint _etherAmount
    ) public payable {
        require(
            voucherAddresses[_name] == address(0),
            "Voucher name already exists"
        );

        Voucher newVoucher = new Voucher{value: msg.value}(
            owner,
            _codeHashes,
            _etherAmount
        );

        voucherContracts.push(newVoucher);
        voucherAddresses[_name] = address(newVoucher);
        emit VoucherContractCreated(_name, address(newVoucher));
    }

    function getVoucherContracts() public view returns (Voucher[] memory) {
        return voucherContracts;
    }

    function getVoucherAddressByName(
        string memory _name
    ) public view returns (address) {
        return voucherAddresses[_name];
    }
}
