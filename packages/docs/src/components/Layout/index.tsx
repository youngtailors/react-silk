import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import { installIconComponent } from '@react-silk/ui'

import Header from '../header'
import Footer from '../Footer'
import './reboot.css'
import './grid.css'

installIconComponent(FontAwesome)

interface LayoutProps {
  children: React.ReactNode
}

interface SiteTitleQueryData {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
}: LayoutProps) => (
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
    render={(data: SiteTitleQueryData): React.ReactNode => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container">{children}</div>
        <Footer />
      </>
    )}
  />
)

export default Layout
