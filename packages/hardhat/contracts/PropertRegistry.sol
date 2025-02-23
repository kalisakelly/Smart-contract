// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

contract PropertyRegistry {
    
    enum PropertyType { House, Car, Plot }
    address public owner; 
    uint256 public Id_counter = 1;

    struct Property {
        uint256 propertyId;
        string name;
        string[] images;
        string descriptions;
        uint256 amount;
        PropertyType propertyType;
        address payable owner;
        string contacts;
        string email;
        bool available;
    }

    Property[] public properties;
    mapping(uint256 => uint256) public propertyIdToIndex;

    // Events
    event PropertyAdded(uint256 propertyId, address indexed owner);
    event PropertyBought(uint256 propertyId, address indexed buyer, uint256 amount);
    event PropertyListedForSale(uint256 propertyId, address indexed owner);
    event Withdrawal(uint256 amount, address indexed recipient);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyContractOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action");
        _;
    }

    modifier isAvailable(uint256 propertyIndex) {
        require(properties[propertyIndex].available, "The property is no longer available");
        _;
    }

    function addProperty(
        string memory _name,
        string[] memory _images,
        string memory _descriptions,
        uint256 _amount,
        string memory _contacts,
        string memory _email,
        PropertyType _propertyType
    ) public {
        properties.push(
            Property({
                propertyId: Id_counter,
                name: _name,
                images: _images,
                descriptions: _descriptions,
                amount: _amount,
                propertyType: _propertyType,
                contacts: _contacts,
                email: _email,
                owner: payable(msg.sender),
                available: true
            })
        );

        propertyIdToIndex[Id_counter] = properties.length - 1;
        emit PropertyAdded(Id_counter, msg.sender);
        Id_counter++;
    }

    function getPropertyById(uint256 _propertyId) public view returns (Property memory) {
        uint256 index = propertyIdToIndex[_propertyId];
        require(index < properties.length, "Property does not exist");
        return properties[index];
    }

    function allProperties() public view returns (Property[] memory) {
        return properties;
    }

    function myProperties() public view returns (Property[] memory) {
        uint256 ownedCount = 0;
        for (uint256 i = 0; i < properties.length; i++) {
            if (properties[i].owner == msg.sender) {
                ownedCount++;
            }
        }

        Property[] memory ownedProperties = new Property[](ownedCount);
        uint256 counter = 0;

        for (uint256 i = 0; i < properties.length; i++) {
            if (properties[i].owner == msg.sender) {
                ownedProperties[counter] = properties[i];
                counter++;
            }
        }
        return ownedProperties;
    }

    function deleteProperty(uint256 _index) public onlyContractOwner {
        require(_index < properties.length, "Invalid property index");
        properties[_index] = properties[properties.length - 1];
        properties.pop();
    }

    function sellProperty(uint256 propertyIndex, address newOwner) public onlyContractOwner isAvailable(propertyIndex) {
        Property storage propertyToSell = properties[propertyIndex];
        propertyToSell.owner = payable(newOwner);
        propertyToSell.available = true;
        emit PropertyListedForSale(propertyToSell.propertyId, newOwner);
    }

    function buyProperty(uint256 propertyIndex) public payable isAvailable(propertyIndex) {
        Property storage propertyToBuy = properties[propertyIndex];

        require(msg.value == propertyToBuy.amount, "Incorrect payment amount");

        propertyToBuy.owner.transfer(msg.value);
        propertyToBuy.owner = payable(msg.sender);
        propertyToBuy.available = false;

        emit PropertyBought(propertyToBuy.propertyId, msg.sender, msg.value);
    }

    function withdrawFunds() public onlyContractOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");
        payable(owner).transfer(balance);
        emit Withdrawal(balance, owner);
    }
}
