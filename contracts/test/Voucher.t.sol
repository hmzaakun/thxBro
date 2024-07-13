// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../src/Voucher.sol";

contract VoucherTest is Test {
    Voucher voucher;
    address owner;
    address user;

    function setUp() public {
        owner = address(this);
        user = address(0x123);
        voucher = new Voucher();
    }

    function testCreateVoucher() public {
        bytes32 codeHash = keccak256(abi.encodePacked("testcode"));
        uint etherAmount = 1 ether;
        uint balanceBefore = address(voucher).balance;

        // Send ether and create the voucher
        voucher.createVoucher{value: etherAmount}(codeHash, etherAmount);

        // Check that the voucher was created with the correct amount
        assertEq(voucher.vouchers(codeHash), etherAmount);

        // Check that the contract balance increased
        assertEq(address(voucher).balance, balanceBefore + etherAmount);
    }

    function testFailCreateVoucherWithZeroAmount() public {
        bytes32 codeHash = keccak256(abi.encodePacked("testcode"));
        uint etherAmount = 0;

        // This should fail because the amount is zero
        voucher.createVoucher{value: etherAmount}(codeHash, etherAmount);
    }

    function testClaimVoucher() public {
        bytes32 codeHash = keccak256(abi.encodePacked("testcode"));
        uint etherAmount = 1 ether;
        uint balanceBefore = address(voucher).balance;

        // Create the voucher
        voucher.createVoucher{value: etherAmount}(codeHash, etherAmount);

        // Claim the voucher
        voucher.claimVoucher("testcode", user);

        // Check that the voucher was claimed (should be zero now)
        assertEq(voucher.vouchers(codeHash), 0);

        // Check that the contract balance decreased
        assertEq(address(voucher).balance, balanceBefore);

        // Check that the user received the ether
        assertEq(user.balance, etherAmount);
    }

    function testFailClaimInvalidVoucher() public {
        // Attempt to claim a non-existent voucher
        voucher.claimVoucher("invalidcode", user);
    }

    function testWithdraw() public {
        bytes32 codeHash = keccak256(abi.encodePacked("testcode"));
        uint etherAmount = 1 ether;

        // Create the voucher
        voucher.createVoucher{value: etherAmount}(codeHash, etherAmount);

        // Check contract balance before withdrawal
        uint contractBalanceBefore = address(voucher).balance;

        // Check owner balance before withdrawal
        uint ownerBalanceBefore = owner.balance;

        // Withdraw the funds from the contract
        voucher.withdraw();

        // Check that the contract balance is zero after withdrawal
        assertEq(address(voucher).balance, 0);

        // Check that the owner received the ether
        assertEq(owner.balance, ownerBalanceBefore + contractBalanceBefore);
    }

    receive() external payable {}
}
