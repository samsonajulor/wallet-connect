// App.js
import React from "react";
import { Web3Provider } from "@web3-react/core"; // Import Web3Provider from web3-react
import { Web3ReactProvider } from "@web3-react/core"; // Import Web3ReactProvider
import WalletConnection from "./WalletConnection";

function App() {
  return (
    <div className="App">
      {/* Wrap your application with Web3ReactProvider */}
      <Web3ReactProvider>
        <header className="App-header">
          <h1>Wallet Connection App</h1>
        </header>
        <main>
          <WalletConnection />
        </main>
      </Web3ReactProvider>
    </div>
  );
}

export default App;
