import { ChainId } from '@pancakeswap/sdk'
import { createPublicClient, http, PublicClient } from 'viem'
import { bsc, bscTestnet, goerli, mainnet } from 'viem/chains'

const requireCheck = [ETH_NODE, GOERLI_NODE, BSC_NODE, BSC_TESTNET_NODE, FDAX_NODE]
requireCheck.forEach((node) => {
  if (!node) {
    throw new Error('Missing env var')
  }
})

const mainnetClient = createPublicClient({
  chain: mainnet,
  transport: http(ETH_NODE),
  batch: {
    multicall: {
      batchSize: 1024 * 200,
    },
  },
})

export const bscClient: PublicClient = createPublicClient({
  chain: bsc,
  transport: http(BSC_NODE),
  batch: {
    multicall: {
      batchSize: 1024 * 200,
    },
  },
})

export const bscTestnetClient: PublicClient = createPublicClient({
  chain: bscTestnet,
  transport: http(BSC_TESTNET_NODE),
  batch: {
    multicall: {
      batchSize: 1024 * 200,
    },
  },
})

const goerliClient = createPublicClient({
  chain: goerli,
  transport: http(GOERLI_NODE),
  batch: {
    multicall: {
      batchSize: 1024 * 200,
    },
  },
})
const fdax = {
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
  testnet: false,
}

const fdaxClient = createPublicClient({
  chain: fdax,
  transport: http(FDAX_NODE),
  batch: {
    multicall: {
      batchSize: 1024 * 200,
    },
  },
})

export const viemProviders = ({ chainId }: { chainId?: ChainId }): PublicClient => {
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
