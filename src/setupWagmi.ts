'use client';
import {configureChains, createConfig} from 'wagmi';
import {publicProvider} from 'wagmi/providers/public';
import {connectorsForWallets, getDefaultWallets} from '@rainbow-me/rainbowkit';

import {ChainId} from '@/types/ChainId';
import {getRpcUrl} from '@/utils/getRpcUrl';
import {getBlockExplorerUrl} from '@/utils/getBlockExplorerUrl';
import {ARBITRUM_SEPOLIA_ICON_URL} from './utils/constants';

const arbitrumSepolia = {
    id: ChainId.ArbitrumOneMainnet,
    name: 'Arbitrum One Mainnet',
    network: 'arbitrum-one-Mainnet',
    iconUrl: ARBITRUM_SEPOLIA_ICON_URL,
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: [getRpcUrl(ChainId.ArbitrumOneMainnet)],
        },
        public: {
            http: [getRpcUrl(ChainId.ArbitrumOneMainnet)],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: getBlockExplorerUrl(ChainId.ArbitrumOneMainnet),
        },
    },
    testnet: true,
};

const {chains, publicClient, webSocketPublicClient} = configureChains(
    [
        // Ideally, we wouldn't need to register the L1s, but there's currently an issue with WalletConnect v2: https://github.com/wagmi-dev/references/issues/225
        arbitrumSepolia,
    ],
    [publicProvider()],
);

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;

const appInfo = {
    appName: 'Arbitrum Orbit',
    projectId,
};

const {wallets} = getDefaultWallets({...appInfo, chains});

const connectors = connectorsForWallets(wallets);

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
});

export {chains, appInfo, wagmiConfig};
