'use client';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, sepolia, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';



const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    sepolia
  ],
  [publicProvider()]
);


const { connectors } = getDefaultWallets({
  appName: 'AyaChain',
  projectId: '9904ebb190195acdcc552c331c1a8087',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function WalletProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default WalletProvider;
