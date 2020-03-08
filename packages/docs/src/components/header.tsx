import { Link } from 'gatsby'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Heading3 } from '@react-silk/ui'
import styled from 'styled-components'

const Nav = styled.nav.attrs({
  className: 'container',
})`
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
    color: #757575;
    :hover {
      text-decoration: none;
      color: #111;
    }
  }
`
const Brand = styled(Link)`
  :hover {
    text-decoration: none;
  }
`

const styles = StyleSheet.create({
  brand: {
    color: '#111',
  },
})

export interface Props {
  siteTitle: string
}

const Header: React.FunctionComponent<Props> = ({ siteTitle }: Props) => (
  <div>
    <Nav>
      <Brand to="/">
        <Heading3 style={styles.brand}>{siteTitle}</Heading3>
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
