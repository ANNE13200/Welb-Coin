import { useCallback } from 'react'

import useWelb from './useWelb'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../welb/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const welb = useWelb()
  const masterChefContract = getMasterChefContract(welb)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, welb],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
