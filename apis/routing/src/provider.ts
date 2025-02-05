import { ChainId } from '@pancakeswap/sdk'
import { OnChainProvider, SubgraphProvider } from '@pancakeswap/smart-router/evm'
import { createPublicClient, http, Chain } from 'viem'
import { bsc, bscTestnet, goerli, mainnet } from 'viem/chains'
import { GraphQLClient } from 'graphql-request'

import { V3_SUBGRAPH_URLS } from './constants'

export const  fdax = {
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
      default: {
          name: "FdaxScan",
          url: "https://scan.5dax.com",
     },
 },
 contracts: {
   multicall3: {
       address: "0x85C163aAeb2ecfA61Ea6D6f1b525e091A94aDB33" as `0x${string}`,
       blockCreated: 1651639,
   },
 },
 testnet: false,
} as const satisfies Chain

const requireCheck = [ETH_NODE, GOERLI_NODE, BSC_NODE, BSC_TESTNET_NODE, FDAX_NODE]

requireCheck.forEach((node) => {
  if (!node) {
    throw new Error('Missing env var')
  }
})

const mainnetClient = createPublicClient({
  chain: mainnet,
  transport: http(ETH_NODE),
})

const bscClient = createPublicClient({
  chain: bsc,
  transport: http(BSC_NODE),
})

const bscTestnetClient = createPublicClient({
  chain: bscTestnet,
  transport: http(BSC_TESTNET_NODE),
})

const goerliClient = createPublicClient({
  chain: goerli,
  transport: http(GOERLI_NODE),
})

const fdaxClient = createPublicClient({
  chain: fdax,
  transport: http(FDAX_NODE),
})
// @ts-ignore
export const viemProviders: OnChainProvider = ({ chainId }: { chainId?: ChainId }) => {
  switch (chainId) {
    case ChainId.ETHEREUM:
      return mainnetClient
    case ChainId.BSC:
      return bscClient
    case ChainId.BSC_TESTNET:
      return bscTestnetClient
    case ChainId.GOERLI:
      return goerliClient
    case ChainId.FDAX:
      return fdaxClient
    default:
      return bscClient
  }
}

export const v3SubgraphClients = {
  [ChainId.ETHEREUM]: new GraphQLClient(V3_SUBGRAPH_URLS[ChainId.ETHEREUM], { fetch }),
  [ChainId.GOERLI]: new GraphQLClient(V3_SUBGRAPH_URLS[ChainId.GOERLI], { fetch }),
  [ChainId.BSC]: new GraphQLClient(V3_SUBGRAPH_URLS[ChainId.BSC], { fetch }),
  [ChainId.BSC_TESTNET]: new GraphQLClient(V3_SUBGRAPH_URLS[ChainId.BSC_TESTNET], { fetch }),
  [ChainId.FDAX]: new GraphQLClient(V3_SUBGRAPH_URLS[ChainId.FDAX], { fetch }),
}

export const v3SubgraphProvider: SubgraphProvider = ({ chainId = ChainId.FDAX }: { chainId?: ChainId }) => {
  return v3SubgraphClients[chainId] || v3SubgraphClients[ChainId.BSC]
}
