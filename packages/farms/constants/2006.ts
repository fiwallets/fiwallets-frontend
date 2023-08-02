import { fdaxTokens } from '@pancakeswap/tokens'
import { FeeAmount } from '@pancakeswap/v3-sdk'
import { getAddress } from 'viem'
import { defineFarmV3Configs } from '../src/defineFarmV3Configs'
import { SerializedFarmConfig } from '..'

export const farmsV3 = defineFarmV3Configs([
  {
    pid: 1,
    token0: fdaxTokens.cake,
    token1: fdaxTokens.wfdx,
    lpAddress: '0xbf566f0de965710f4cb6b4bf831e2602301f5bcb',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 2,
    token0: fdaxTokens.cake,
    token1: fdaxTokens.busd,
    lpAddress: '0x64654a260d574f69d3c08de2c0746902dce9bfa5',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 3,
    token0: fdaxTokens.cake,
    token1: fdaxTokens.usdt,
    lpAddress: '0xcdb48167d08a6d9d198442d2138e2cfdf43bb4ad',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 4,
    token0: fdaxTokens.wfdx,
    token1: fdaxTokens.busd,
    lpAddress: '0x4667b6e6b49a96d39ef8d46fbe3cf762f1fb1ba4',
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 5,
    token0: fdaxTokens.usdt,
    token1: fdaxTokens.wfdx,
    lpAddress: '0x92226da3d5478a7920e01eb0e5f3636d9bd95042',
    feeAmount: FeeAmount.LOW,
  },
  // keep those farms on top

])

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'CAKE',
    lpAddress: '0xC4610d97c89E9d8326fb6A536f41A12580C12204',
    token: fdaxTokens.syrup,
    quoteToken: fdaxTokens.wfdx,
    boosted: true,
  },
  {
    pid: 2,
    v1pid: 2,
    lpSymbol: 'MIEXS-FDX LP',
    lpAddress: '0xe2c5834fba57ab7558824953a88f9fce140953e2',
    boosted: true,
    token: fdaxTokens.cake,
    quoteToken: fdaxTokens.wfdx,
  },
  {
    pid: 3,
    v1pid: 3,
    lpSymbol: 'MIEXS-BUSD LP',
    lpAddress: '0x9a02db6b7d23121a1c3cb8025a397ec77cb052b6',
    token: fdaxTokens.cake,
    quoteToken: fdaxTokens.busd,
  },
  {
    pid: 4,
    v1pid: 4,
    lpSymbol: 'MIEXS-USDT LP',
    lpAddress: '0x8795eed7ab5ebd687b805a92defe6a9e38e8b1d0',
    token: fdaxTokens.cake,
    quoteToken: fdaxTokens.usdt,
    boosted: true,
  },
  //    * V3 by order of release (some may be out of PID order due to multiplier boost)
].map((p) => ({
  ...p,
  token: p.token.serialize,
  quoteToken: p.quoteToken.serialize,
  lpAddress: getAddress(p.lpAddress),
}))

export default farms