import { useCallback } from 'react'

import useWelb from './useWelb'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../welb/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const welb = useWelb()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(welb),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, welb],
  )

  return { onStake: handleStake }
}

export default useStake
