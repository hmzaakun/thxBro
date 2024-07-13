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
        factory.createVoucherContract();
        Voucher[] memory vouchers = factory.getVoucherContracts();
        assertEq(vouchers.length, 1);
        vm.stopPrank();
    }

    function testCreateVouchersAndClaim() public {
        vm.startPrank(owner);
        factory.createVoucherContract();
        Voucher[] memory vouchers = factory.getVoucherContracts();
        voucher = vouchers[0];

        // Create an array of code hashes
        bytes32[] memory codeHashes = new bytes32[](1);
        codeHashes[0] = keccak256(abi.encodePacked("testcode"));

        // Fund the voucher contract with 1 ether
        uint etherAmount = 1 ether;
        payable(address(voucher)).transfer(etherAmount);
        voucher.createVouchers{value: etherAmount}(codeHashes, etherAmount);

        string memory code = "testcode";
        voucher.claimVoucher(code, recipient);

        // Verify that the recipient received the funds
        assertEq(recipient.balance, 1 ether);
        vm.stopPrank();
    }
}
