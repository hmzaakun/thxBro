// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../src/Voucher.sol";
import "../src/VoucherFactory.sol";

contract VoucherFactoryTest is Test {
    VoucherFactory public factory;
    Voucher public voucher;

    address public owner = address(0x123);
    address public recipient = address(0x456);

    function setUp() public {
        vm.deal(owner, 100 ether); // Fund the owner account with 100 ether
        vm.startPrank(owner); // Simulate owner account
        factory = new VoucherFactory();
        vm.stopPrank();
    }

    function testCreateVoucherContract() public {
        vm.startPrank(owner);

        // Create an array of code hashes
        bytes32[] memory codeHashes = new bytes32[](1);
        codeHashes[0] = keccak256(abi.encodePacked("testcode"));

        // Fund the factory with the amount needed to create vouchers
        uint etherAmount = 1 ether;
        uint fee = (etherAmount * 2) / 100;
        uint totalAmount = etherAmount + fee;

        factory.createVoucherContract{value: totalAmount}(
            codeHashes,
            etherAmount
        );

        Voucher[] memory vouchers = factory.getVoucherContracts();
        assertEq(vouchers.length, 1);
        vm.stopPrank();
    }

    function testCreateVouchersAndClaim() public {
        vm.startPrank(owner);

        // Create an array of code hashes
        bytes32[] memory codeHashes = new bytes32[](1);
        codeHashes[0] = keccak256(abi.encodePacked("testcode"));

        // Fund the factory with the amount needed to create vouchers
        uint etherAmount = 1 ether;
        uint fee = (etherAmount * 2) / 100;
        uint totalAmount = etherAmount + fee;

        factory.createVoucherContract{value: totalAmount}(
            codeHashes,
            etherAmount
        );

        Voucher[] memory vouchers = factory.getVoucherContracts();
        voucher = vouchers[0];
        vm.stopPrank();

        // Simulate owner account again to claim the voucher
        vm.startPrank(owner);
        string memory code = "testcode";
        voucher.claimVoucher(code, recipient);
        vm.stopPrank();

        // Verify that the recipient received the funds
        assertEq(recipient.balance, etherAmount);
    }
}
