import {useCallback} from 'react'

import useWelb from './useWelb'
import {useWallet} from 'use-wallet'

import {enter, getXWelbStakingContract} from '../welb/utils'

const useEnter = () => {
  const {account} = useWallet()
  const welb = useWelb()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await enter(
        getXWelbStakingContract(welb),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, welb],
  )

  return {onEnter: handle}
}

export default useEnter
