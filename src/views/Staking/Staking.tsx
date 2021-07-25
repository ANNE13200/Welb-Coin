import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom'
import {useWallet} from 'use-wallet'

import chef from '../../assets/img/chef.png'

import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import WalletProviderModal from '../../components/WalletProviderModal'

import useModal from '../../hooks/useModal'
import StakeXWelb from "../StakeXWelb";

import { useTranslation } from "react-i18next";

const Staking: React.FC = () => {
  const {path} = useRouteMatch()
  const {account} = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal/>)
  const { t } = useTranslation();
  return (
    <Switch>
      <Page>
        {!!account ? (
          <>
            <Route exact path={path}>
              <PageHeader
                icon={<img src={chef} height="120"/>}
               
                
              />
              
              <h1 style={{"textAlign":"center","color":"#fff"}}>{ t("staking.title") }</h1>
              <h2 style={{"textAlign":"center","color":"#fff"}}>{ t("staking.subtitle") }</h2>
            </Route>
            <StakeXWelb/>
          </>
        ) : (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={onPresentWalletProviderModal}
              text={t("wallet.unlock-icon")}
            />
          </div>
        )}
      </Page>
    </Switch>
  )
}

export default Staking
