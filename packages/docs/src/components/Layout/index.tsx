import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import { installIconComponent } from '@react-silk/ui'

import Header from '../header'
import Footer from '../Footer'
import './reboot.css'
import './grid.css'

installIconComponent(FontAwesome)

const Layout: React.FunctionComponent = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container">{children}</div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
