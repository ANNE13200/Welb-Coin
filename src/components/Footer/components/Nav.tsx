import React from 'react'
import styled from 'styled-components'
import Select from '../../Select'
const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://bscscan.com/address/0x5F1A5911C1A363D96f4Dc8bAF0E3e4A3EB268c58"
      >
        MasterChef Contract
      </StyledLink>
      {/*<StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0xce84867c3c02b05dc570d0135103d3fb9cc19433"
      >
        WelbSwap WELB-BNB
      </StyledLink> */}
      <StyledLink target="_blank" href="t.me/wellbecoingroupe">
        Telegram
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/ANNE13200">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/WellbeCoin">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="https://cyclon13200.medium.com/">
        Medium
      </StyledLink>
      <Select />
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
