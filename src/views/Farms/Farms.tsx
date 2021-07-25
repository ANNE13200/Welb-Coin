import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useWallet } from 'use-wallet'

import chef from '../../assets/img/chef.png'

import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import WalletProviderModal from '../../components/WalletProviderModal'

import useModal from '../../hooks/useModal'

import Farm from '../Farm'

import FarmCards from './components/FarmCards'
import { useTranslation } from "react-i18next";
import Spacer from "../../components/Spacer";

const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const { account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  const { t } = useTranslation()
  return (
    <Switch>
      <Page>
        {!!account ? (
          <>
            <Route exact path={path}>
             
              <PageHeader
                icon={<img src={chef} height="120" />}
                subtitle=""
                title=""
              />
               <h1 style={{"textAlign":"center","color":"#fff"}}> { t("farms.title") }</h1>
               <p style={{"textAlign":"center","color":"#fff"}}>
                   { t("farms.subtitle.p1") } <br />
               </p>
                <p style={{"textAlign":"center","color":"#fff"}}>
                    { t("farms.subtitle.p2") } <br />
                    { t("farms.subtitle.p3") } <br />
                    { t("farms.subtitle.p4") }
                </p>
                <Spacer/>
              <FarmCards />
            </Route>
            <Route path={`${path}/:farmId`}>
              <Farm />
            </Route>
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

export default Farms
