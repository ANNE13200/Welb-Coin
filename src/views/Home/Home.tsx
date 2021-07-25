import React from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/chef.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'
import { useTranslation, Trans } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <PageHeader
        icon={<img src={chef} height={120} />}
        title=""
        subtitle=""
      />
      <h1 style={{"color":"#fff"}}>{t("home.ready")}</h1>
      <h2 style={{"color":"#fff"}}>{t("home.stake")}</h2>

      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
      <StyledInfo>
          <Trans i18nKey="home.pro-tip">
              🏆<strong>Pro Tip</strong>: WELB-BNB SLP token pool yields <u>0.5x more</u> token rewards per block.
          </Trans>


      </StyledInfo>
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text={t("home.btnfarm")} to="/farms" variant="secondary" />
      </div>
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default Home
