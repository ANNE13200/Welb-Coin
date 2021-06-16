import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Welb } from '../../welb'

export interface WelbContext {
  welb?: typeof Welb
}

export const Context = createContext<WelbContext>({
  welb: undefined,
})

declare global {
  interface Window {
    welbsauce: any
  }
}

const WelbProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [welb, setWelb] = useState<any>()

  // @ts-ignore
  window.welb = welb
  // @ts-ignore


  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const welbLib = new Welb(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setWelb(welbLib)
      window.welbsauce = welbLib
    }
  }, [ethereum])

  return <Context.Provider value={{ welb }}>{children}</Context.Provider>
}

export default WelbProvider
