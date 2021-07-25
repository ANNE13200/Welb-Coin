import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from "react-i18next";

const Nav: React.FC = () => {
  const { t } = useTranslation();
  return (
    <StyledNav>
      <StyledLink exact activeClassName="active" to="/">
          { t("linkname.home") }
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/farms">
          { t("linkname.farm") }
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/staking">
          { t("linkname.staking") }
      </StyledLink>
      <StyledAbsoluteLink
        href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x6af2a7ca07dc6e234a1e3fc4450b343ff994b1e6"
        target="_blank"
      >
          { t("linkname.exchange") }
      </StyledAbsoluteLink>
      
      <StyledAbsoluteLink
        href="https://www.wellbe-coin.com/t-en-gb/contact"
        target="_blank"
      >
          { t("linkname.contact") }
      </StyledAbsoluteLink>
      
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav
