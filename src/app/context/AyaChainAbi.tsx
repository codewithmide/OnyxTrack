export const AyaChainAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "condition",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "deliveryLocation",
          "type": "string"
        }
      ],
      "name": "ProductCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "condition",
          "type": "string"
        }
      ],
      "name": "ProductDelivered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "condition",
          "type": "string"
        }
      ],
      "name": "ProductShipped",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "condition",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "location",
          "type": "string"
        }
      ],
      "name": "ProductUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_customer",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_intermediary",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_condition",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_currentLocation",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_deliveryLocation",
          "type": "string"
        }
      ],
      "name": "addProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_condition",
          "type": "string"
        }
      ],
      "name": "deliverProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        }
      ],
      "name": "getHistory",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "location",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "condition",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct AyaChain.History[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getProducts",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "enum AyaChain.ProductState",
              "name": "state",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "distributor",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "intermediary",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "customer",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "condition",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "currentLocation",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "deliveryLocation",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "deliveryDate",
              "type": "uint256"
            }
          ],
          "internalType": "struct AyaChain.Product[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "products",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "enum AyaChain.ProductState",
          "name": "state",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "distributor",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "intermediary",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "customer",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "condition",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "currentLocation",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "deliveryLocation",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "deliveryDate",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_condition",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_location",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_deliveryDate",
          "type": "uint256"
        }
      ],
      "name": "shipProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalProduct",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_condition",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_location",
          "type": "string"
        }
      ],
      "name": "updateProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ] as const;