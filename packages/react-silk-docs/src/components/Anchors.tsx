import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavItems = styled.ul`
  list-style: none;
`
const NavItem = styled.li``

export default () => (
  <NavItems>
    <NavItem>
      <Link to="/components/text">Text</Link>
    </NavItem>
    <NavItem>
      <Link to="/components/buttons">Buttons</Link>
    </NavItem>
  </NavItems>
)
