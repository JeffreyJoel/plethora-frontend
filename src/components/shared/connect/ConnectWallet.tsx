// "use client";
// import React from "react";
// import { useEffect, useState } from "react";
// import { connect, disconnect } from "starknetkit";
// import { Button } from "@/components/ui/button";

// function ConnectBtn() {
//   const [connection, setConnection] = useState(null);
//   const [account, setAccount] = useState(null);
//   const [address, setAddress] = useState("");

//   //   useEffect(() => {
//   //     const connectToStarknet = async () => {
//   //         const { wallet } = await connect( { modalMode: "neverAsk" } )

//   //       if (wallet && wallet.isConnected) {
//   //         setConnection(wallet);
//   //         setAccount(wallet.account);
//   //         setAddress(wallet.selectedAddress);
//   //       }
//   //       connectToStarknet();
//   //     };
//   //   }, []);

//   const connectWallet = async () => {
//     const wallet  = await connect({ modalMode: "neverAsk" });

//     if (wallet && wallet?.isConnected) {
//       setConnection(wallet);
//       setAccount(wallet?.account);
//       setAddress(wallet?.selectedAddress);
//     }
//   };

//   const disconnectWallet = async () => {
//     await disconnect();
//     setConnection(null);
//     setAccount(null);
//     setAddress("");
//   };
//   console.log(address);

//   return (
//     <div>
//       {!connection ? (
//         <Button
//           onClick={connectWallet}
//           className="h-[3rem] min-w-[4rem] gap-2 bg-purple-700 border border-purple-700 px-4 py-3 font-medium text-white lg:min-w-[8rem] rounded-full"
//           translate="no"
//         >
//           Connect Wallet
//         </Button>
//       ) : (
//         // <button className={styles.connectbtn}>Connect</button>
//         <button className="" onDoubleClick={disconnectWallet}>
//           {address.slice(0, 5)}...{address.slice(60, 66)}
//         </button>
//       )}
//     </div>
//   );
// }

// export default ConnectBtn;
