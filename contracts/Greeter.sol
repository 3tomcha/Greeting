pragma solidity >=0.4.22 <0.9.0;

contract Greeter {
    address private _owner;
    string private _greeting = "Hello, World!";
    function greet() external view returns (string memory){
        return _greeting;
    }
    function setGreeting (string calldata greeting) external {
        _greeting = greeting;
    }
    function owner() public view returns (address){
        return _owner;
    }    
}