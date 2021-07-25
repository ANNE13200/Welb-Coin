import React, {useEffect, useMemo, useState} from 'react'
import styled from 'styled-components'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import Spacer from '../../components/Spacer'
import useWelb from '../../hooks/useWelb'
import {getContract} from '../../utils/erc20'
import UnstakeXWelb from './components/UnstakeXWelb'
import StakeWelb from "./components/StakeWelb";

import {contractAddresses} from '../../welb/lib/constants'
import {getXWelbSupply} from "../../welb/utils";
import BigNumber from "bignumber.js";
import {getBalanceNumber} from "../../utils/formatBalance";
import {Trans, useTranslation} from "react-i18next";

const StakeXWelb: React.FC = () => {
  const {
    tokenAddress,
  } = {
    tokenAddress: contractAddresses.xWelb[56],
  }

  const [totalSupply, setTotalSupply] = useState<BigNumber>()

  const welb = useWelb()
  const {ethereum} = useWallet()

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getXWelbSupply(welb)
      setTotalSupply(supply)
    }
    if (welb) {
      fetchTotalSupply()
    }
  }, [welb, setTotalSupply])



  const lpContract = useMemo(() => {
    debugger
    return getContract(ethereum as provider, tokenAddress)
  }, [ethereum, tokenAddress])

  let _totalSupplyBalance =  "0";
  if(totalSupply){
    _totalSupplyBalance = `${getBalanceNumber(totalSupply)}`
  }else{
    _totalSupplyBalance = "0";
  }

  return (
    <>
      <StyledFarm>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <UnstakeXWelb
              lpContract={lpContract}
            />
          </StyledCardWrapper>
          <Spacer/>
          <StyledCardWrapper>
            <StakeWelb
            />
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg"/>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <StyledInfo>
              { t("staking.info.p1") }
              { t("staking.info.p2") }
              { t("staking.info.p3") }
            </StyledInfo>
            <Spacer/>
            {!!totalSupply ? (
            <StyledInfo>
              <Trans i18nKey="staking.info.total-staked" tOptions={{_totalSupply: _totalSupplyBalance}}>
                There are currently <strong>{_totalSupplyBalance} xWELB</strong> in the whole pool.
              </Trans>
            </StyledInfo>
            ) : null }
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg"/>
      </StyledFarm>
    </>
  )
}

const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[400]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default StakeXWelb
