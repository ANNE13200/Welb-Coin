import {useCallback} from 'react'

import useWelb from './useWelb'
import {useWallet} from 'use-wallet'

import {leave, getXWelbStakingContract} from '../welb/utils'

const useLeave = () => {
  const {account} = useWallet()
  const welb = useWelb()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await leave(
        getXWelbStakingContract(welb),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, welb],
  )

  return {onLeave: handle}
}

export default useLeave
