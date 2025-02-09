"use client";

import { createContext, useContext, useState } from "react";
import { connect, disconnect } from "starknetkit";

const WalletContext = createContext<any>(null);

export const WalletProvider = ({ children }: { children: any }) => {
  const [connection, setConnection] = useState<any>();
  const [address, setAddress] = useState<string | undefined>();
  const [account, setAccount] = useState();

  const connectWallet = async () => {
    const connection = await connect();

    if (connection && connection.isConnected) {
      setConnection(connection);
      setAccount(connection.account);
      setAddress(connection?.selectedAddress);
    }
  };

  const disconnectWallet = async () => {
    await disconnect();

    setConnection(undefined);
    setAccount(undefined);
    setAddress("");
  };

  return (
    <WalletContext.Provider
      value={{ connection, address, account, connectWallet, disconnectWallet }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
