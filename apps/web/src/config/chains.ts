import { ChainId } from '@pancakeswap/sdk'
import memoize from 'lodash/memoize'
import {
  bsc as bsc_,
  bscTestnet,
  goerli,
  mainnet,
  // zkSync as zkSync_,
  // zkSyncTestnet as zkSyncTestnet_,
  polygonZkEvmTestnet as polygonZkEvmTestnet_,
  polygonZkEvm as polygonZkEvm_,
  lineaTestnet as lineaTestnet_,
  // arbitrumGoerli,
  Chain,
  
} from 'wagmi/chains'
import { createConfig, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

export const CHAIN_QUERY_NAME = {
  [ChainId.ETHEREUM]: 'eth',
  [ChainId.GOERLI]: 'goerli',
  [ChainId.BSC]: 'bsc',
  [ChainId.BSC_TESTNET]: 'bscTestnet',
  [ChainId.ARBITRUM_ONE]: 'arb',
  [ChainId.ARBITRUM_GOERLI]: 'arbGoerli',
  [ChainId.POLYGON_ZKEVM]: 'polygonZkEVM',
  [ChainId.POLYGON_ZKEVM_TESTNET]: 'polygonZkEVMTestnet',
  [ChainId.ZKSYNC]: 'zkSync',
  [ChainId.ZKSYNC_TESTNET]: 'zkSyncTestnet',
  [ChainId.LINEA_TESTNET]: 'lineaTestnet',
  [ChainId.FDAX]: 'fdax',
} as const satisfies Record<ChainId, string>

const CHAIN_QUERY_NAME_TO_ID = Object.entries(CHAIN_QUERY_NAME).reduce((acc, [chainId, chainName]) => {
  return {
    [chainName.toLowerCase()]: chainId as unknown as ChainId,
    ...acc,
  }
}, {} as Record<string, ChainId>)

export const getChainId = memoize((chainName: string) => {
  if (!chainName) return undefined
  return CHAIN_QUERY_NAME_TO_ID[chainName.toLowerCase()] ? +CHAIN_QUERY_NAME_TO_ID[chainName.toLowerCase()] : undefined
})

const bsc = {
  ...bsc_,
  rpcUrls: {
    ...bsc_.rpcUrls,
    public: {
      ...bsc_.rpcUrls.public,
      http: ['https://bsc-dataseed.binance.org/'],
    },
    default: {
      ...bsc_.rpcUrls.default,
      http: ['https://bsc-dataseed.binance.org/'],
    },
  },
} satisfies Chain

// const zkSync = {
//   ...zkSync_,
//   contracts: {
//     multicall3: {
//       address: '0x47898B2C52C957663aE9AB46922dCec150a2272c',
//       blockCreated: 1536804,
//     },
//   },
// } as const satisfies Chain

// const zkSyncTestnet = {
//   ...zkSyncTestnet_,
//   contracts: {
//     multicall3: {
//       address: '0x5640049C9e2d33127B34F1bef5C070509f14B5D0',
//       blockCreated: 5137723,
//     },
//   },
// } as const satisfies Chain

export const fdax = {
  id: 2006,
  name: "FDAX Smart Chain",
  network: "fdax",
  nativeCurrency: {
      decimals: 18,
      name: "FDX",
      symbol: "FDX",
  },
  rpcUrls: {
      default: {
          http:  ["https://mainnet-rpc.5dax.com"],
     },
      public: {
          http:  ["https://mainnet-rpc.5dax.com"],
     },
  },
  blockExplorers: {
      etherscan: {
          name: "FdaxScan",
          url: "https://scan.5dax.com",
     },
      default: {
          name: "FdaxScan",
          url: "https://scan.5dax.com",
     },
  },
  contracts: {
      multicall3: {
          address: "0x85C163aAeb2ecfA61Ea6D6f1b525e091A94aDB33",
          blockCreated: 1_651_639,
     },
  },
} as const satisfies Chain

const polygonZkEvm = {
  ...polygonZkEvm_,
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 57746,
    },
  },
} as const satisfies Chain

const polygonZkEvmTestnet = {
  ...polygonZkEvmTestnet_,
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 525686,
    },
  },
} as const satisfies Chain

const lineaTestnet = {
  ...lineaTestnet_,
  blockExplorers: {
    etherscan: {
      name: 'LineaScan',
      url: 'https://goerli.lineascan.build',
    },
    default: {
      name: 'LineaScan',
      url: 'https://goerli.lineascan.build',
    },
  },
} as const satisfies Chain

/**
 * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
 * The expectation is that all of these networks have immediate transaction confirmation.
 */
export const L2_CHAIN_IDS: ChainId[] = [
  ChainId.ARBITRUM_ONE,
  ChainId.ARBITRUM_GOERLI,
  ChainId.POLYGON_ZKEVM,
  ChainId.POLYGON_ZKEVM_TESTNET,
  ChainId.ZKSYNC,
  ChainId.ZKSYNC_TESTNET,
  ChainId.LINEA_TESTNET,
]

export const CHAINS = [
  bsc,
  mainnet,
  bscTestnet,
  goerli,
  // zkSync,
  // zkSyncTestnet,
  polygonZkEvm,
  polygonZkEvmTestnet,
  lineaTestnet,
  fdax,
  // arbitrumGoerli,
  // arbitrum,
]
