import { fdaxTokens } from '@pancakeswap/tokens'
import { getAddress } from 'viem'

import { PoolCategory, SerializedPool } from '../../types'

export const livePools: SerializedPool[] = [
  {
    sousId: 0,
    stakingToken: fdaxTokens.cake,
    earningToken: fdaxTokens.cake,
    contractAddress: '0x5587d748b78327Aec0Ef57AEe0d3034f32c116BA',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '10',
    isFinished: false,
  },
].map((p) => ({
  ...p,
  contractAddress: getAddress(p.contractAddress, 2006),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

// known finished pools
export const finishedPools: SerializedPool[] = []

export const pools: SerializedPool[] = [...livePools, ...finishedPools]
