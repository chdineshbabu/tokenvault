/** @type import('hardhat/config').HardhatUserConfig */
import "@nomiclabs/hardhat-ethers";

export const solidity = "0.8.28";
export const networks = {
  holesky: {
    url: "https://rpc.holesky.ethereumnodes.com",
    chainId: 17000, 
    accounts: process.env.PRIVATE_KEY 
  },
};
