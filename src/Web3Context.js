// Web3Context.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

const Web3Context = createContext();

export function Web3Provider({ children }) {
  const { library, account, active } = useWeb3React();

  const [provider, setProvider] = useState(null);

  useEffect(() => {
    if (active) {
      setProvider(new ethers.providers.Web3Provider(library));
    } else {
      setProvider(null);
    }
  }, [active, library]);

  return (
    <Web3Context.Provider value={{ account, provider }}>
      {children}
    </Web3Context.Provider>
  );
}

export function useWeb3() {
  return useContext(Web3Context);
}
