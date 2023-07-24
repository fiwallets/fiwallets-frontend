import { ChainId } from '@pancakeswap/sdk'
import { Address } from 'viem'

import { SupportedChainId } from './supportedChains'

export type ContractAddresses<T extends ChainId = SupportedChainId> = {
  [chainId in T]: Address
}

export const ICAKE = {
  [ChainId.BSC]: '0x3C458828D1622F5f4d526eb0d24Da8C4Eb8F07b1',
  [ChainId.FDAX]: '0xC1Ef9a2e5Dbcd25336302ECD72244E9Cfee7b778',
  [ChainId.BSC_TESTNET]: '0x',
  [ChainId.ETHEREUM]: '0x',
} as const satisfies ContractAddresses<SupportedChainId>

export const CAKE_VAULT = {
  [ChainId.BSC]: '0x45c54210128a065de780C4B0Df3d16664f7f859e',
  [ChainId.FDAX]: '0xF2cF021a7e177b3873B4744c6b589e8AfdF253E5',
  [ChainId.BSC_TESTNET]: '0x1088Fb24053F03802F673b84d16AE1A7023E400b',
  [ChainId.ETHEREUM]: '0x',
} as const satisfies ContractAddresses<SupportedChainId>

export const CAKE_FLEXIBLE_SIDE_VAULT = {
  [ChainId.BSC]: '0x615e896A8C2CA8470A2e9dc2E9552998f8658Ea0',
  [ChainId.FDAX]: '0x',
  [ChainId.BSC_TESTNET]: '0x',
  [ChainId.ETHEREUM]: '0x',

} as const satisfies ContractAddresses<SupportedChainId>
