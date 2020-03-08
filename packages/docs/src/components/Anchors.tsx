import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavItems = styled.ul`
  list-style: none;
`
const NavItem = styled.li``

const Anchors: React.FunctionComponent = () => (
  <NavItems>
    <NavItem>
      <Link to="/components/text">Text</Link>
    </NavItem>
    <NavItem>
      <Link to="/components/buttons">Buttons</Link>
    </NavItem>
    <NavItem>
      <Link to="/components/modals">Modals</Link>
    </NavItem>
    <NavItem>
      <Link to="/components/inputs">Inputs</Link>
    </NavItem>
    <NavItem>
      <Link to="/components/icons">Icons</Link>
    </NavItem>
    <NavItem>
      <Link to="/components/dropdowns">Dropdowns</Link>
    </NavItem>
    <NavItem>
      <Link to="/components/forms">Forms</Link>
    </NavItem>
  </NavItems>
)

export default Anchors
