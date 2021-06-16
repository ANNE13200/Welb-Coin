import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../welb/utils'
import useWelb from './useWelb'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const welb = useWelb()
  const farms = getFarms(welb)
  const masterChefContract = getMasterChefContract(welb)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, welb])

  useEffect(() => {
    if (account && masterChefContract && welb) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, welb])

  return balances
}

export default useAllEarnings
