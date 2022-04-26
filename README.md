IPFS stands for Interplanetry File Storage System, is a network of peer to peer connected nodes which allows us to upload files on this distributed network.
IPFS divides each file into different duplicated chunks and stores them individually on different nodes.
But, IPFS cannot gaurantee security and permanent access to our files.
This uploader pins the files ensuring permanent storage of our files just like Pinata, Filecoin, etc. and also enchances security using a hybrid cryptography algorithm with RC2, AES and DES algorithms.

To run the project - 
Clone this github repository

To run the frontend - 

-> cd client
-> npm run start

To run the local Blockchain use Ganche - https://trufflesuite.com/ganache/
Install and run Ganche with quickstart.

Now in a new terminal window -

-> truffle compile
-> truffle --reset migrate
-> truffle develop

Now connect frontend on your browser using a wallet like Metamask.

Once connected upload file using the upload button.
The files will be encrypted using the algorithm and a private key in .pem extension will be provided to the owner of the file.
Along with this the owner will get an IPFS Hash.

Checking availability of file on IPFS using the link -

https://ipfs.io/ipfs/<CID>
-> replace <CID> with your IPFS Hash.
