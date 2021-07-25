import BigNumber from 'bignumber.js/bignumber'
import { useTranslation } from "react-i18next";

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)



export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}



export const contractAddresses = {
  welb: {
    56: '0x6AF2a7CA07dC6e234A1E3Fc4450b343ff994B1e6',
  },
  masterChef: {
    56: '0x5F1A5911C1A363D96f4Dc8bAF0E3e4A3EB268c58',
  },
  weth: {
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  },
  xWelb: {
    56: '0xC4142cD91be82668C12d390FC1DeB6c04E46561d'
  }
}


export const supportedPools = [

  {
    pid: 0,

    lpAddresses: {
      56: '0x69eee8735f97144dbd2ce66a63ff999dca60e2d7',
    },
    tokenAddresses: {
      56: '0x6AF2a7CA07dC6e234A1E3Fc4450b343ff994B1e6',
    },
    name: 'WELB BOXE!',
    active: true,
    symbol: 'WELB-WBNB',
    tokenSymbol: 'WELB',
    icon: '🥊',
  },
  {
    pid: 1,
    active: true,
    lpAddresses: {
      56: '0x6ef26bbf79bc7db23d05ccc3f6d737dbd8958f8e',
    },
    tokenAddresses: {
      56: '0x6AF2a7CA07dC6e234A1E3Fc4450b343ff994B1e6',
    },
    name: 'WELB FINESS!',
    symbol: 'WELB-BUSD',
    tokenSymbol: 'WELB',
    icon: '🤸‍♀️',
  },
  {
    pid: 2,
    active: false,
    lpAddresses: {
      56: '0x166c60047ab806d120f5c2d3f29bd0f334dfda4a',
    },
    tokenAddresses: {
      56: '0x6AF2a7CA07dC6e234A1E3Fc4450b343ff994B1e6',
    },
    name: 'WELB YOGA!',
    symbol: 'WELB-WBTCB',
    tokenSymbol: 'WELB',
    icon: '🧘',
  },
  
   {
    pid: 3,
    active: false,
    lpAddresses: {
      56: '0xfbb612f993b5270849fb817b4a89e140dc0480f6',
    },
    tokenAddresses: {
      56: '0x6AF2a7CA07dC6e234A1E3Fc4450b343ff994B1e6',
    },
    name: 'WELB GYM!',
    symbol: 'WELB-USDT',
    tokenSymbol: 'WELB',
    icon: '🚴‍♂',
  },
 
]
