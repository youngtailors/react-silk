import { Link } from 'gatsby'
import React from 'react'
import { Heading3 } from 'react-silk-ui'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  align-items: center;
`
const NavItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-bottom: 0;
  padding: 0;
`

const NavItem = styled.li`
  a {
    padding: 1rem;
    display: block;
  }
`
const Brand = styled(Link)``

export interface Prop {
  siteTitle: string
}

const Header: React.FunctionComponent<Prop> = ({ siteTitle }) => (
  <div className="container-fluid">
    <Nav>
      <Brand to="/">
        <Heading3>{siteTitle}</Heading3>
      </Brand>
      <NavItems>
        <NavItem>
          <Link to="/components/text">Components</Link>
        </NavItem>
        <NavItem>
          <Link to="/showcase">Showcase</Link>
        </NavItem>
        <NavItem>
          <a href="https://github.com/youngtailors/react-silk">Github</a>
        </NavItem>
      </NavItems>
    </Nav>
  </div>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
