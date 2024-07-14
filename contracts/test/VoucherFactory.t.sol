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
    address public relayer = address(0x789);

    function setUp() public {
        vm.deal(owner, 100 ether); // Fund the owner account with 100 ether
        vm.deal(relayer, 100 ether); // Fund the relayer account with 100 ether
        vm.startPrank(relayer); // Simulate relayer account
        factory = new VoucherFactory(relayer);
        vm.stopPrank();
    }

    function testCreateVoucherContract() public {
        vm.startPrank(relayer);

        string memory voucherName = "Voucher1";

        // Create an array of code hashes
        bytes32[] memory codeHashes = new bytes32[](1);
        codeHashes[0] = keccak256(abi.encodePacked("testcode"));

        // Fund the factory with the amount needed to create vouchers
        uint etherAmount = 1 ether;
        uint fee = (etherAmount * 2) / 100;
        uint totalAmount = etherAmount + fee;

        factory.createVoucherContract{value: totalAmount}(
            voucherName,
            codeHashes,
            etherAmount
        );

        Voucher[] memory vouchers = factory.getVoucherContracts();
        assertEq(vouchers.length, 1);
        assertEq(
            factory.getVoucherAddressByName(voucherName),
            address(vouchers[0])
        );
        vm.stopPrank();
    }

    function testCreateVouchersAndClaim() public {
        vm.startPrank(relayer);

        string memory voucherName = "Voucher2";

        // Create an array of code hashes
        bytes32[] memory codeHashes = new bytes32[](1);
        codeHashes[0] = keccak256(abi.encodePacked("testcode"));

        // Fund the factory with the amount needed to create vouchers
        uint etherAmount = 1 ether;
        uint fee = (etherAmount * 2) / 100;
        uint totalAmount = etherAmount + fee;

        factory.createVoucherContract{value: totalAmount}(
            voucherName,
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

    function testCreateVoucherWithInsufficientFunds() public {
        vm.startPrank(relayer);

        string memory voucherName = "Voucher3";

        // Create an array of code hashes
        bytes32[] memory codeHashes = new bytes32[](1);
        codeHashes[0] = keccak256(abi.encodePacked("testcode"));

        // Fund the factory with insufficient amount
        uint etherAmount = 1 ether;
        uint fee = (etherAmount * 2) / 100;
        uint totalAmount = etherAmount + fee - 1 wei; // Insufficient by 1 wei

        vm.expectRevert(
            "Sent Ether amount does not match the total voucher amount with fee"
        );
        factory.createVoucherContract{value: totalAmount}(
            voucherName,
            codeHashes,
            etherAmount
        );

        vm.stopPrank();
    }

    function testCreateVoucherWithZeroAmount() public {
        vm.startPrank(relayer);

        string memory voucherName = "Voucher4";

        // Create an array of code hashes
        bytes32[] memory codeHashes = new bytes32[](1);
        codeHashes[0] = keccak256(abi.encodePacked("testcode"));

        // Fund the factory with zero amount
        uint etherAmount = 0 ether;
        uint totalAmount = 0 ether;

        vm.expectRevert("Amount must be greater than 0");
        factory.createVoucherContract{value: totalAmount}(
            voucherName,
            codeHashes,
            etherAmount
        );

        vm.stopPrank();
    }

    function testClaimVoucherTwice() public {
        vm.startPrank(relayer);

        string memory voucherName = "Voucher5";

        // Create an array of code hashes
        bytes32[] memory codeHashes = new bytes32[](1);
        codeHashes[0] = keccak256(abi.encodePacked("testcode"));

        // Fund the factory with the amount needed to create vouchers
        uint etherAmount = 1 ether;
        uint fee = (etherAmount * 2) / 100;
        uint totalAmount = etherAmount + fee;

        factory.createVoucherContract{value: totalAmount}(
            voucherName,
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

        // Attempt to claim the voucher again
        vm.startPrank(owner);
        vm.expectRevert("Invalid or already used voucher");
        voucher.claimVoucher(code, recipient);
        vm.stopPrank();
    }
}
