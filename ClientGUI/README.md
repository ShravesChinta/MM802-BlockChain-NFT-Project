# Client GUI 
Application designed to be used by the clients of lamose. Provides option of connecting to metamask wallet, fetch NFT information, Select and Send the NFTs Information to Lamose using decentralized blockchain network.

## Getting Started :
 
The following instructions shall ensure that this project is up and running on your local machine for development and testing purposes. 
See Running Code section below to know how to run this project.


## Prerequisites :

## Software Requirements:

•	node : v14.19.0  
•	npm  : 6.14.19

## Creation and deployment of contract (Optional) :
1. Sign into Metamask on Remix IDE, make sure account is set for Rinkeby TestNet
2. Uploaded database.sol to Remix IDE
3. Click Solidity Compiler tab and compile database.sol. Copied ABI to abi.js
4. Click Deploy & Run Transaction tab. Change environment to Inject Web3. Deploy. Copy Contract Address for use in frontend
5. Copy the contract address in ./src/contractInfo.js file.

Note: We have already created and deployed the contract on blockchain , thus creation and deployment of contract step can be skipped.

## Register Lamose (Optional)
In order to establish connection with the client . Client need to register or know the wallet address of Lamose wallet. 
We have created the lamose wallet and added its default address. To modify the lamose wallet address edit in file src/lamoseInfo.js


## Installation:
Follow the installation instructions present on below link for installing npm and node on CentOS PC.

Link: https://linuxize.com/post/how-to-install-node-js-on-centos-7/

## Running Code: 

•	Run "npm install" to install dependencies.

•	Run "npm start" to start the project.

•	Open [http://localhost:3000](http://localhost:3000) to view it in the browser
