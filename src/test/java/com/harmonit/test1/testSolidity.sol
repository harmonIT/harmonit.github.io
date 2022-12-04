pragma solidity ^0.5.4;
contract Helloword{
    string MyName="aaa";

    function getName() public view returns(string){
        return MyName;
    }
}