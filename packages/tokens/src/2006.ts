import { ChainId, WFDX, WETH9, ERC20Token } from '@pancakeswap/sdk'

import { BUSD_FDAX, CAKE, USDT, WBTC_FDAX } from './common'

export const fdaxTokens = {
  wfdx: WFDX[ChainId.FDAX],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  fdx: new ERC20Token(
    ChainId.FDAX,
    '0xa27a128dD70479FD2B37662223C6523F10eBc21A',
    18,
    'FDX',
    'FDX',
    'https://www.5dax.com/',
  ), 
  eth: WETH9[ChainId.FDAX],
  usdt: USDT[ChainId.FDAX],
  wbtc: WBTC_FDAX,
  cake: CAKE[ChainId.FDAX],
  busd: BUSD_FDAX,
  syrup: new ERC20Token(
    ChainId.FDAX,
    '0x35aDE6588d08114Fea2c22735187b223A5A7963C',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://miexx.finance/',
  ),
}