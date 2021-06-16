import {useCallback} from 'react'

import useWelb from './useWelb'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import {
  approve,
  getWelbContract,
  getXWelbStakingContract
} from '../welb/utils'

const useApproveStaking = () => {
  const {account}: { account: string; ethereum: provider } = useWallet()
  const welb = useWelb()
  const lpContract = getWelbContract(welb)
  const contract = getXWelbStakingContract(welb)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, contract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, contract])

  return {onApprove: handleApprove}
}

export default useApproveStaking
