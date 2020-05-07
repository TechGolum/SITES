pragma solidity >=0.5.8;

contract Shop
{
    mapping(string => bytes32) logpass;
    mapping(string => User) users;
    struct User
    {
        string name;
        string login;
        bytes32 password;
    }
    function register(string memory name, string memory login, string memory password) public{
        User memory u;
        u.name = name;
        u.login = login;
        u.password = keccak256(abi.encode(password));
        logpass[login] = u.password;
        users[login] = u;
    }
    function auth(string memory login, string memory password) public view returns(bool)
    {
        if(logpass[login] == keccak256(abi.encode(password))) return true;
        return false;
    }
    function doesExist(string memory login) public view returns(bool)
    {
        if(logpass[login] != 0) return true;
        return false;
    }

}