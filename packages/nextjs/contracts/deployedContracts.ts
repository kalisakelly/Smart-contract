/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    PropertyRegistry: {
      address: "0xc6e7DF5E7b4f2A278906862b61205850344D4e7d",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "propertyId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "PropertyAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "propertyId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "buyer",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "PropertyBought",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "propertyId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "PropertyListedForSale",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "recipient",
              type: "address",
            },
          ],
          name: "Withdrawal",
          type: "event",
        },
        {
          inputs: [],
          name: "Id_counter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string",
            },
            {
              internalType: "string[]",
              name: "_images",
              type: "string[]",
            },
            {
              internalType: "string",
              name: "_descriptions",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_contacts",
              type: "string",
            },
            {
              internalType: "string",
              name: "_email",
              type: "string",
            },
            {
              internalType: "enum PropertyRegistry.PropertyType",
              name: "_propertyType",
              type: "uint8",
            },
          ],
          name: "addProperty",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "allProperties",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "propertyId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string[]",
                  name: "images",
                  type: "string[]",
                },
                {
                  internalType: "string",
                  name: "descriptions",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "enum PropertyRegistry.PropertyType",
                  name: "propertyType",
                  type: "uint8",
                },
                {
                  internalType: "address payable",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "contacts",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "email",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "available",
                  type: "bool",
                },
              ],
              internalType: "struct PropertyRegistry.Property[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "propertyIndex",
              type: "uint256",
            },
          ],
          name: "buyProperty",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_index",
              type: "uint256",
            },
          ],
          name: "deleteProperty",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_propertyId",
              type: "uint256",
            },
          ],
          name: "getPropertyById",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "propertyId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string[]",
                  name: "images",
                  type: "string[]",
                },
                {
                  internalType: "string",
                  name: "descriptions",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "enum PropertyRegistry.PropertyType",
                  name: "propertyType",
                  type: "uint8",
                },
                {
                  internalType: "address payable",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "contacts",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "email",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "available",
                  type: "bool",
                },
              ],
              internalType: "struct PropertyRegistry.Property",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "myProperties",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "propertyId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string[]",
                  name: "images",
                  type: "string[]",
                },
                {
                  internalType: "string",
                  name: "descriptions",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "enum PropertyRegistry.PropertyType",
                  name: "propertyType",
                  type: "uint8",
                },
                {
                  internalType: "address payable",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "contacts",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "email",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "available",
                  type: "bool",
                },
              ],
              internalType: "struct PropertyRegistry.Property[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "properties",
          outputs: [
            {
              internalType: "uint256",
              name: "propertyId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "descriptions",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "enum PropertyRegistry.PropertyType",
              name: "propertyType",
              type: "uint8",
            },
            {
              internalType: "address payable",
              name: "owner",
              type: "address",
            },
            {
              internalType: "string",
              name: "contacts",
              type: "string",
            },
            {
              internalType: "string",
              name: "email",
              type: "string",
            },
            {
              internalType: "bool",
              name: "available",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "propertyIdToIndex",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "propertyIndex",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "sellProperty",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "withdrawFunds",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    YourContract: {
      address: "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "greetingSetter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "newGreeting",
              type: "string",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "premium",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "GreetingChange",
          type: "event",
        },
        {
          inputs: [],
          name: "greeting",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "premium",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_newGreeting",
              type: "string",
            },
          ],
          name: "setGreeting",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "userGreetingCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
