// WalletConnection.js
import React from "react";
import { useWeb3React } from "@web3-react/core";

function WalletConnection() {
  const { account, activate, deactivate } = useWeb3React();

  const connectWallet = async () => {
    try {
      await activate();
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const disconnectWallet = () => {
    deactivate();
  };

  return (
    <div>
      {account ? (
        <div>
          <p>Connected Account: {account}</p>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}

export default WalletConnection;
