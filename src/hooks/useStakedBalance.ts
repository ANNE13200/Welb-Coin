import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../welb/utils'
import useWelb from './useWelb'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const welb = useWelb()
  const masterChefContract = getMasterChefContract(welb)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, welb])

  useEffect(() => {
    if (account && welb) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, welb])

  return balance
}

export default useStakedBalance
