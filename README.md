# TokenVault

A decentralized token vault application built with Next.js, Hardhat, and Web3 technologies. This project allows users to deposit and withdraw ERC-20 tokens through a secure smart contract vault.

## 🚀 Features

- **Secure Token Vault**: Deposit and withdraw ERC-20 tokens through a smart contract
- **Web3 Integration**: Built with Wagmi and RainbowKit for seamless wallet connection
- **Modern UI**: Clean, responsive interface built with Next.js and Tailwind CSS
- **Real-time Balance**: View your deposited token balance in real-time
- **Ethereum Testnet Support**: Deployed on Holesky testnet for testing

## 🏗️ Architecture

### Smart Contract
- **Vault.sol**: A secure smart contract that manages token deposits and withdrawals
- **Features**:
  - Deposit ERC-20 tokens
  - Withdraw deposited tokens
  - Track user balances
  - Emit events for deposits and withdrawals

### Frontend
- **Next.js 15**: React framework with App Router
- **Wagmi v2**: Web3 React hooks for Ethereum interaction
- **RainbowKit**: Wallet connection UI
- **Tailwind CSS**: Utility-first CSS framework

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MetaMask or compatible Web3 wallet
- Holesky testnet ETH for gas fees

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tokenvault
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Hardhat dependencies**
   ```bash
   cd hardhat
   npm install
   cd ..
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_api_key
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id
PRIVATE_KEY=your_private_key_for_deployment
```

### Hardhat Configuration

The project is configured to deploy on Holesky testnet. Update `hardhat/hardhat.config.js` if you want to use a different network.

## 🚀 Getting Started

### 1. Deploy the Smart Contract

```bash
cd hardhat
npx hardhat compile
npx hardhat ignition deploy ./ignition/modules/VaultModule.ts --network holesky
```

### 2. Update Contract Address

After deployment, update the contract address in `src/components/TokenVault.tsx`:

```typescript
address: "YOUR_DEPLOYED_CONTRACT_ADDRESS"
```

### 3. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Usage

1. **Connect Wallet**: Click the "Connect Wallet" button to connect your MetaMask or compatible wallet
2. **View Balance**: Your current deposited token balance will be displayed
3. **Deposit Tokens**: Enter the amount and click "Deposit" to add tokens to the vault
4. **Withdraw Tokens**: Enter the amount and click "Withdraw" to retrieve your tokens

## 🔒 Security Features

- **Input Validation**: All amounts must be greater than zero
- **Balance Checks**: Users can only withdraw tokens they have deposited
- **Transfer Validation**: All token transfers are validated before execution
- **Event Logging**: All deposits and withdrawals are logged as events

## 🧪 Testing

The smart contract includes comprehensive validation:
- Amount validation (must be > 0)
- Balance validation (sufficient funds for withdrawal)
- Transfer validation (successful token transfers)

## 📁 Project Structure

```
tokenvault/
├── hardhat/                 # Smart contract development
│   ├── contracts/          # Solidity contracts
│   ├── ignition/          # Deployment scripts
│   └── artifacts/         # Compiled contracts
├── src/
│   ├── app/               # Next.js app directory
│   ├── components/        # React components
│   └── utils/            # Utility files
├── public/               # Static assets
└── README.md
```

## 🛠️ Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Smart Contract
- `npx hardhat compile` - Compile contracts
- `npx hardhat test` - Run tests
- `npx hardhat deploy` - Deploy contracts

## 🌐 Network Configuration

Currently configured for Holesky testnet:
- **Network**: Holesky
- **Chain ID**: 17000
- **RPC URL**: https://rpc.holesky.ethereumnodes.com

## 🔗 Smart Contract Functions

### Vault Contract
- `deposit(uint256 amount)` - Deposit tokens to the vault
- `withdraw(uint256 amount)` - Withdraw tokens from the vault
- `balanceOf()` - Get total vault balance
- `userBalance(address user)` - Get user's deposited balance

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## ⚠️ Important Notes

- This is a testnet application - do not use with mainnet tokens
- Always test with small amounts first
- Ensure you have sufficient ETH for gas fees
- The contract address in the code is for demonstration - replace with your deployed address

## 🆘 Support

If you encounter any issues:
1. Check that your wallet is connected to Holesky testnet
2. Ensure you have sufficient ETH for gas fees
3. Verify the contract address is correct
4. Check the browser console for error messages

## 🔄 Updates

- **v0.1.0**: Initial release with basic vault functionality
- Smart contract deployed on Holesky testnet
- Frontend integration with Wagmi and RainbowKit