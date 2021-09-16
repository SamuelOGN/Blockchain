// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    // An event is an inheritable stuff that holds like the state of a contract
    event NewWave(address indexed from, uint256 timestamp, string message);

    // A struct is like an array datatype but declared with curly braces
    struct Wave {
        address waver;
        string message;
        uint256 timestamp;
    }

    // Declaring a new instance of the Wave struct with the name waves
    Wave[] waves;

    constructor() {
        console.log("Building out a smart contract, Wow!");
    }

    function wave(string memory _message) public {
        totalWaves += 1;
        console.log("%s waved w/ messgae %s", msg.sender, _message);

        waves.push(Wave(msg.sender, _message, block.timestamp));

        emit NewWave(msg.sender, block.timestamp, _message);

        // uint prizeAmount = 0.00001 ether;
        // require(prizeAmount <= address(this).balance, "This contract doesn't have enough money to pay");
        // (bool success,) = (msg.sender).call{value: prizeAmount}("");
        // require(success, "Failed to withdraw money from contract");
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves", totalWaves);
        return totalWaves;
    }
}
