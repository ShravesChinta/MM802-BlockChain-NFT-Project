# BlockChainNFTProject

The BlockChainNFTProject is an innovative web application designed to facilitate the engraving of NFT (Non-Fungible Token) images onto water bottles by leveraging blockchain technology. As the popularity of NFTs continues to grow, businesses are exploring new market segments that incorporate these unique digital assets. This project aims to streamline the process of selecting and engraving NFT images onto water bottles through a decentralized application.

## Overview

NFTs are digital assets stored on the blockchain, ensuring their uniqueness and non-transferability. This project enables users to log in with MetaMask, access and select an NFT, and submit it to Lamose, a company specializing in personalized water bottle engraving. By utilizing the user's public key, the web application retrieves the NFT images associated with their wallet address from the NFT marketplace. The NFT metadata is then sent to a blockchain-based chat application. Finally, a smart contract is used to send a message to Lamose, making the entire process decentralized and transparent.

## Components

The BlockChainNFTProject consists of three main components:

1. **NFTServer**: This component is responsible for providing details about the NFTs associated with a particular wallet address. It retrieves and serves NFT metadata from the NFT marketplace.

2. **ClientGUI**: A user-friendly GUI application designed for clients of Lamose. It allows users to select and submit NFTs for engraving onto water bottles.

3. **LamoseGUI**: A GUI application created for Lamose to view engraving requests received from clients/customers. This interface enables Lamose to manage and fulfill engraving requests efficiently.

## Development Environment

The project is developed and tested using the Rinkeby test network. Rinkeby offers similar functionalities to the Ethereum Mainnet but is free and suitable for development and testing purposes.

## Setup Instructions

To run the complete application, all three components mentioned above need to be set up on the machine. Follow the instructions below:

1. **NFTServer Setup**: 
   - Configure and deploy the NFTServer component to provide NFT details.
  
2. **ClientGUI Setup**:
   - Set up the ClientGUI application to allow users to select and submit NFTs for engraving.
   
3. **LamoseGUI Setup**:
   - Configure the LamoseGUI application to view and manage engraving requests received from clients/customers.

Ensure that MetaMask is properly configured and connected to the Rinkeby test network to interact with the blockchain.

## Contributing

Contributions to the BlockChainNFTProject are welcome! Feel free to submit pull requests or open issues for any bugs, feature requests, or suggestions for improvement.

## License

This project is licensed under the [MIT License](LICENSE).
