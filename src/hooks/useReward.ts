import { useCallback } from 'react'

import useWelb from './useWelb'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../welb/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const welb = useWelb()
  const masterChefContract = getMasterChefContract(welb)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  },  [ account, pid, welb ])

  return { onReward: handleReward }
}

export default useReward
