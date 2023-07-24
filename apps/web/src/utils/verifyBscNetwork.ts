import { ChainId } from '@pancakeswap/sdk'

export const verifyBscNetwork = (chainId: number) => {
  return chainId === ChainId.FDAX || chainId === ChainId.BSC_TESTNET
}
