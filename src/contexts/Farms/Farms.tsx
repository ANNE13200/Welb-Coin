import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useWelb from '../../hooks/useWelb'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../welb/utils'
import { getFarms } from '../../welb/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const welb = useWelb()
  const { account } = useWallet()

  const farms = getFarms(welb)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
