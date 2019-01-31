import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Text,
  Button,
} from 'react-silk-ui'
import { Banner } from '../components/Banner'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Banner />
  </Layout>
)

export default IndexPage
