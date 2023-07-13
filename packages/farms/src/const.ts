import { ChainId } from '@pancakeswap/sdk'

export const supportedChainIdV2 = [ChainId.GOERLI, ChainId.BSC, ChainId.BSC_TESTNET, ChainId.ETHEREUM, ChainId.FDAX] as const
export const supportedChainIdV3 = [ChainId.GOERLI, ChainId.BSC, ChainId.BSC_TESTNET, ChainId.ETHEREUM, ChainId.FDAX] as const
export const bCakeSupportedChainId = [ChainId.BSC] as const

export const FARM_AUCTION_HOSTING_IN_SECONDS = 691200

export type FarmSupportedChainId = (typeof supportedChainIdV3)[number]

export const masterChefAddresses = {
  [ChainId.BSC_TESTNET]: '0xB4A466911556e39210a6bB2FaECBB59E4eB7E43d',
  [ChainId.BSC]: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
  [ChainId.FDAX]: '0x9a9F76bcf72600831BB0EA181338B1eE7eB9c285',
} as const

export const masterChefV3Addresses = {
  [ChainId.ETHEREUM]: '0x556B9306565093C855AEA9AE92A594704c2Cd59e',
  [ChainId.GOERLI]: '0x864ED564875BdDD6F421e226494a0E7c071C06f8',
  [ChainId.BSC]: '0x556B9306565093C855AEA9AE92A594704c2Cd59e',
  [ChainId.BSC_TESTNET]: '0x4c650FB471fe4e0f476fD3437C3411B1122c4e3B',
  [ChainId.FDAX]: '0x5587d748b78327Aec0Ef57AEe0d3034f32c116BA',
} as const satisfies Record<FarmSupportedChainId, string>

export const nonBSCVaultAddresses = {
  [ChainId.ETHEREUM]: '0x2e71B2688019ebdFDdE5A45e6921aaebb15b25fb',
  [ChainId.GOERLI]: '0xE6c904424417D03451fADd6E3f5b6c26BcC43841',
} as const
